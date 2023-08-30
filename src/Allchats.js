import './Allchats.css';
import {  useState , useEffect ,useContext} from 'react';
import { Link } from 'react-router-dom';


function Allchats() {
  
  var [user,userStatus] =useState([]);
  const socket=initializeSocket();
  useEffect(()=>{    
  },[])

  return (
    <div className="row">
    <div className="col-lg-6">
        <div className="articles card">
            <div className="card-body no-padding">
                <div className="item d-flex align-items-center">
                    <div className="image"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..."
                            className="img-fluid rounded-circle" /></div>
                    <div className="text"> 
                    <Link to={{
                      pathname:'/login',
                      search:'?id=2'               
                    }} >                      
                            <h3 className="h5">Satya</h3>
                        </Link><small>Posted on 5th June 2017 by Frank Williams. </small></div>
                </div>
                <div className="item d-flex align-items-center">
                    <div className="image"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="..."
                            className="img-fluid rounded-circle" /></div>
                    <div className="text">
                    <Link to={{
                      pathname:'/login',
                      search:'?id=1'               
                    }} >                      
                            <h3 className="h5">Surya</h3>
                        </Link><small>Posted on 5th June 2017 by Frank Williams. </small></div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Allchats;
