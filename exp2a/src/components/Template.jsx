import download from './download.jpg';
import "./style.css";

function Template() {
    return (
        <div className="container">
            <div className="header">
                <div className="heading">KL University</div>
                <div className="Menu">
                    <span> Home </span>
                    <span> About </span>
                    <span> Portfolio </span>
                    <span> Login </span>
                </div>
            </div>
            <div className="Content">
                <div className="plogo">
                    <img src={download} alt="No Image" height={100} width={100} />
                </div>
                <div className="pdesc">
                    <p>Pname</p>
                    <p>Rs.500000</p>
                    <p>2025</p>
                </div>
            </div>
            <div className="footer">
                <div className="slogos">
                    <i className="fa fa-linkedin"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-wikipedia-w"></i>
                    <i className="fa fa-whatsapp"></i>
                </div>
            </div>
        </div>
    );
}

export default Template;