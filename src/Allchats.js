import './Allchats.css';

function Allchats() {
  return (
    <div className="row">
    <div className="col-lg-6">
        <div className="articles card">
            <div className="card-body no-padding">
                <div className="item d-flex align-items-center">
                    <div className="image"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="..."
                            className="img-fluid rounded-circle" /></div>
                    <div className="text"><a href="#">
                            <h3 className="h5">Lorem Ipsum Dolor</h3>
                        </a><small>Posted on 5th June 2017 by Aria Smith. </small></div>
                </div>
                <div className="item d-flex align-items-center">
                    <div className="image"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="..."
                            className="img-fluid rounded-circle" /></div>
                    <div className="text"><a href="#">
                            <h3 className="h5">Lorem Ipsum Dolor</h3>
                        </a><small>Posted on 5th June 2017 by Frank Williams. </small></div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default Allchats;
