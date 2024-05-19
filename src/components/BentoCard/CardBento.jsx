import bentoImage from "../../assets/image/shubham-dhage-Hatkch_piQM-unsplash.jpg";
import curve from "../../assets/image/curve-dark.png";
import "./bento.css";

const CardBento = () => {
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-8">
          <div className="card">
            <img
              src={bentoImage}
              className="bento-image img-fluid rounded-corner"
              alt="img"
            />

            <div className="cbody">
            <div className="feature-title-wrapper ">
                <div className="feature-center-title d-flex">
                    <h1 className="mb-0 py-1 pe-3">Feature Center</h1>
                   
                    <img src={curve} className="curve img-fluid" alt="" />
                </div>
            </div>

            <div className="feature-title-wrapper ">
                <div className="feature-center-title d-flex">
                    <h1 className="mb-0 py-2 pe-3">Feature </h1>
                   
                    <img src={curve} className="curve img-fluid" alt="" />
                </div>
            </div>
           
            
            <div className="feature-title-wrapper ">
                <div className="feature-center-title d-flex">
                    <img src={curve} className="curve img-fluid" alt="" />
                </div>
            </div>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBento;
