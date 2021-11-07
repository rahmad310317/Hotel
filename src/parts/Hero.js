import React from 'react';
import HeroImage from 'assets/images/HeroImage.png';
import HeroImageFrame from 'assets/images/HeroImageFrame.png';
import Travelers from 'assets/images/icons/icon-traveler.svg';
import Cities from 'assets/images/icons/icon-cities.svg';
import Treasure from 'assets/images/icons/icon-treasure.svg';

import Button from 'element/Button';
import  numberFormat from 'utils/FormatNumber'



function showmostPicked () {
    window.scrollTo({
        top: props.refMostPicked.current.offsetTop -30,
        behavior: "smooth"
    })
} 


export default function Hero(props) {
    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{ width: 530}}>
                    <h1 className=" mt-4 font-weight-bold line-heigth-1 mb-2">
                        Forget Busy Work, <br/>
                        Start Next Vacation.
                    </h1>
                    <p className="mt-4 font-weight-ligth text-gray-500 w-75" style={{lineHeight: "172%"}}>
                    Kami menyediakan apa yang Anda butuhkan untuk menikmati liburan Anda bersama keluarga
                    </p>
                    <Button className="btn px-5" hasShadow isPrimary onClick={showmostPicked}>
                        Show Me Now
                    </Button>
              <div className="row mt-5">
                <div className="col-auto" style={{ marginRigth: 35}}>
                        <img width= "36" height="36"
                         src={Travelers}
                         alt={`${props.data.travelers} Travelers`}                                                   
                     />                  
                    <h6 className="mt-3">
                        {numberFormat(props.data.travelers)}{""}                      
                        <span className="text-gray-500 font-weight-ligth"> travelers</span>
                    </h6>
                </div>
                <div className="col-auto"  style={{ marginRigth:  35}}>
                    <img width="36" height="36"
                    src={Cities} 
                    alt={`${props.data.cities} Cities`}
                    />
                <h6 className="mt-3">
                    {numberFormat(props.data.cities)}{""}
                    <span className="text-gray-500 font-weight-ligth"> cities</span>
                </h6>
            </div>
             <div className="col-auto">
                 <img width="36" height="36"
                 src={Treasure} 
                 alt={`${props.data.treasure} Treasure`}
                 />
                <h6 className="mt-3">
                    {numberFormat(props.data.treasure)}{""}
                    <span className="text-gray-500 font-weight-ligth"> treasure
                    </span>
                </h6>
                </div>                
            </div>
        </div>
        <div className="col mr-5 mb-5 pb-5 px-5">
            <div className="image-hero" style={{height: 190 , marginLeft: 150}}>
                <img src={HeroImage} alt="room tour couches" className="img-fluid position-absolute" style={{ margin: "-30px 0 0 -30px", zIndex: 1 , height: 350,  width: 450}} />
                <img src={HeroImageFrame} alt="room tour couches frame" className="img-fluid position-absolute" style={{ margin:"0 -15px -15px 0", height: 350, width: 430 }} />
            </div>
        </div>
    </div>
        </section>
      )

  
}

