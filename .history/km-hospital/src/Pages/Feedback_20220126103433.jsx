import React , {useState,useEffect} from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async';
import firebase from '../firebase.js'
import Styles from '../Styles/Feedback.module.css'
import { Card, Col, Row,Spin } from 'antd';
const { Meta } = Card;
const Dhuruvam=()=> {
    const [FeedBacks, setFeedBacks] = useState([]);
    const [homeCols , setHomeCols] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
          //ONE TIME GET FUNCTION
    const ref = firebase.firestore().collection("Departments");
  
    setLoading(true);
    function getFeedBacks() {
        ref.onSnapshot((querySnapshot)=>{
            const items = [];
            querySnapshot.forEach((doc)=>{
                items.push(doc.data());
            });
        setLoading(false);
        setFeedBacks(items);
        });
    }

    const refTwo = firebase.firestore().collection("HomeCols");
    function getHomeCols() {
        refTwo.onSnapshot((querySnapshot)=>{
            const cols = [];
            querySnapshot.forEach((doc)=>{
                cols.push(doc.data());
            });
            console.log(cols);
        setHomeCols(cols);
        });
    }
  
        getFeedBacks();
        getHomeCols();
    },[]);

console.log(loading)
    if(loading){
        <h1>Loading</h1>
   
    }
    return (
        <div>
             <HelmetProvider>
                    <Helmet>
                        <title>FeedBack</title>
                    </Helmet>
             </HelmetProvider>


             <img src="https://img.icons8.com/ios-filled/50/000000/doctor-male.png"/>   
           

          
           <div className="title-pongal">
               <h1>FeedBack </h1>
           </div>
		   <Spin tip="Loading ..." style={{width:1550}} size="large" spinning={loading}>
          
          </Spin><br/>;
          <Row gutter={[90,30]}>  
                {homeCols.map((homeCol)=>(
                    <div >
                   <Col lg={{span:2 ,offset:4}}  >
                        <Card 
                                justify="center" align="middle"
                                hoverable
                                style={{ width: 280 }}
                            > 
                                <img src={homeCol.img} alt="svg"/>
                                    <Meta title={homeCol.name} />
                            </Card>        
                    </Col>  
                    </div>
             ))}       
        </Row>

		   <Row gutter={[90,30]}>
			{FeedBacks.map((feedback)=>(
				<div className={feedback.key}>
					<Col lg={{span:5 ,offset:4}}  >
							<Card
								hoverable
								style={{ width: 280 }}
								cover={<img alt="example" src={feedback.img} />}
							>
								<Meta title={feedback.name} description={feedback.desc} />
						    </Card>
					</Col>
				</div>
			))}
</Row>
      </div>
    )
}

export default Dhuruvam;
