import React ,{useState , useEffect} from 'react';
import { Card, Col, Row, Carousel } from 'antd';
import firebase from  '../firebase.js'
import Styles from '../Styles/Home.module.css'
const { Meta } = Card;
function Home() {
    const [homeCols , setHomeCols] = useState([]);
    const [FeedBacks, setFeedBacks] = useState([]);


    const contentStyle = {
        height: '460px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#001529',
      };

    useEffect(()=>{
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
    },[])
  return <div>
      <h1 style={{textAlign: 'center'}}>Hearty Welcome ..!</h1>
      <Row gutter={[90,30]}>  
                {homeCols.map((homeCol)=>(
                    <div  >
                   <Col lg={{span:2 ,offset:4}}  >
                        <Card className={Styles.card}
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
        </Row> <br/>


                 <Carousel autoplay>  
                        {FeedBacks.map((feedback)=>(                
                            <div span={4} offset={4} >
                            <h1  style={contentStyle} ><img style={{marginLeft:600}} width="310" height="461"   src={feedback.img} /></h1>
                                {/* <img  style={contentStyle}   src={feedback.img} /> */}
                                
                            </div>
                        ))}
                </Carousel>
  </div>;
}

export default Home;
