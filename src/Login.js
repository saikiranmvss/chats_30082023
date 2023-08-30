import './Login.css';

function Login() {
  return (
    <div className="container-fluid">
            <div className="d-flex align-items-center h-100">
  
                <form className="w-100">
    
                <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Log in</h3>
    
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example18">Email address</label>
                    <input type="email" id="form2Example18" className="form-control form-control-lg" placeholder="Email address"/>                    
                </div>
    
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example28">Password</label>
                    <input type="password" id="form2Example28" className="form-control form-control-lg" placeholder="Password" />                    
                </div>
    
                <div className="pt-1 mb-4">
                    <button className="btn btn-success w-100 btn-lg btn-block" type="button">Login</button>
                </div>
    
                </form>
  
            </div>
    </div>
  );
}

export default Login;
