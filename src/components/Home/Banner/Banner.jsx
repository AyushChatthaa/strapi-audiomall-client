import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
               <h1>SALE</h1>
               <p>
               Discover a symphony of choice at your fingertips. From headphones to speakers, find the perfect harmony of innovation and sound quality.
               </p>
               <div className="ctas">
                  <div className="banner-cta">Read More</div>
                  <div className="banner-cta v2">Shop Now</div>
               </div>
            </div>
            <img className="banner-img" src={BannerImg} alt=""/>
        </div>
    </div>;
};

export default Banner;  
