import kristiePic from '../img/Kristie L Woodward.jpg'
import trinhaPic from '../img/Trinha K Smith.jpg'
import chelseaPic from '../img/Chelsea F Felker.jpg'

const Testimonials = () => {
    return (
        <div className="Testimonials">
            
            <h2 className="Testimonials-heading">
                Testimonials
            </h2>
            
            <div className="testimonials-main">
                
                <div className="testimonial">
                    <blockquote className="testimonial-text">
                        I had just about given up trading, when I found Tanxy's Bots.
                        Two years later am still trading with them.
                        Regardless to say, their business is wonderful.
                    </blockquote>
                    <div className="testimonials-details">
                        <div className="testimonials-details-text">
                            <p className="testimonials-details-name">Kristie L. Woodward</p>
                            <p className="testimonials-details-joinDate">Joined 2019</p>
                        </div>
                        <img src={ kristiePic } alt="" className="testimonials-img" />
                    </div>
                </div>
                
                <div className="testimonial">
                    <blockquote className="testimonial-text">
                        I couldn't have asked for more than this.
                        Tanxy's Bots has got everything I need.
                        I can't even imagine not trading bots now,
                        My view on trading is forever changed.
                    </blockquote>
                    <div className="testimonials-details">
                        <div className="testimonials-details-text">
                            <p className="testimonials-details-name">Trinha K. Smith</p>
                            <p className="testimonials-details-joinDate">Joined 2021</p>
                        </div>
                        <img src={ trinhaPic } alt="" className="testimonials-img" />
                    </div>
                </div>
                
                <div className="testimonial">
                    <blockquote className="testimonial-text">
                        Love the site and it keeps getting better and better.
                        Sometimes I cant decide between screaming it to the whole world or just keeping this to myself.
                    </blockquote>
                    <div className="testimonials-details">
                        <div className="testimonials-details-text">
                            <p className="testimonials-details-name">Chelsea F. Felker</p>
                            <p className="testimonials-details-joinDate">joined 2020</p>
                        </div>
                        <img src={ chelseaPic } alt="" className="testimonials-img" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials