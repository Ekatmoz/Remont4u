import { StarFill } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


const Test = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <Container/>

    <div className="section-header">
      <h2>Testimonials</h2>
      <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
    </div>

    <div className="slides-2 swiper">
      <div className="swiper-wrapper">

        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/>
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <div className="stars">
                <StarFill/><StarFill/><StarFill/><StarFill/><StarFill/>
              </div>
              <p>
                <FaQuoteLeft />
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <FaQuoteRight />
              </p>
            </div>
          </div>
        </div>

        <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <div className="stars">
                <StarFill/><StarFill/><StarFill/><StarFill/><StarFill/>
              </div>
              <p>
                <FaQuoteLeft />
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <FaQuoteRight/>
              </p>
            </div>
          </div>
        </div>

        {/* <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="">
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <div className="stars">
                <BiStarFill/><BiStarFill/><BiStarFill/><BiStarFill/><BiStarFill/>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="">
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="swiper-slide">
          <div className="testimonial-wrap">
            <div className="testimonial-item">
              <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="">
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
              </div>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
          </div>
        </div> */}

      </div>
      <div className="swiper-pagination"></div>
    </div>

      <Container/>
    </section>
  )
}

export default Test;