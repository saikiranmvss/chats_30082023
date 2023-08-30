import { useNavigate } from 'react-router-dom';
import './Login.css';
import $ from 'jquery';
import { initializeSocket } from './socket';

function Login() {

  var navigate = useNavigate();

  function loginValidate(){
    var email=$('#email').val();
    var password=$('#password').val();
    var details={email,password};
    $.ajax({
      url:'http://192.168.0.144:9999/validate',
      data:details,
      type:"post",
      success:function(data){ 
        localStorage.setItem('socket_ids',JSON.stringify(data.sockets));
        const socket=initializeSocket();
        navigate('/Allchats');
      }
    
    })
  }


  return (
    <div className="container-fluid">
            <div className="d-flex align-items-center vh-100">
  
                <form className="w-100">
    
                <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Log in</h3>
    
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="email" id="email" className="form-control form-control-lg" placeholder="Email address"/>                    
                </div>
    
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control form-control-lg" placeholder="Password" />                    
                </div>
    
                <div className="pt-1 mb-4">
                    <button className="btn btn-success w-100 btn-lg btn-block" onClick={loginValidate} type="button">Login</button>
                </div>
    
                </form>
  
            </div>
    </div>
  );
}

export default Login;
