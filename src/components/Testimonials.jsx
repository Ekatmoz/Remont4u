import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { StarFill } from 'react-bootstrap-icons';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Отзывы</h2>
          <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div id="testimonials" className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>Maryna Nazarian</h3>
                <h4>16 июня 2021, Будапешт</h4>
                <div className="stars">
                  <StarFill/><StarFill/><StarFill/><StarFill/><StarFill/>
                </div>
                <p>
                  <FaQuoteLeft className="quote-icon-left"/>
                    Когда от Будапештских «мастеров» я уже пришла в отчаяние, мне встретилась ОНА! Команда настоящих профессионалов своего дела! Делаем уже второй ремонт вместе (и скорее всего не последний!). Работают быстро, качественно, чисто, на совесть! Рекомендую!
                  <FaQuoteRight className="quote-icon-right"/>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>Papp Artúr</h3>
                <h4>2021, Будапешт</h4>
                <div className="stars">
                  <StarFill/><StarFill/><StarFill/><StarFill/><StarFill/>
                </div>
                <p>
                  <FaQuoteLeft className="quote-icon-left"/>
                  Igazi pozitiv csalodas, aki lakast ujitott mar fel, erti mire gondolok. Precizek, pontosak, profik. Ujitottunk mar fel furdoszobat es egesz lakast is veluk es mindig nagyon hatekonyak voltak, nem voltak rejtett koltsegek, amit elore mondtak arat/idot (!) a teljes felujitasra, az maradt vegig! Csak ajanlani tudom!
                  <FaQuoteRight className="quote-icon-right"/>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <div className="stars">
                  <StarFill/><StarFill/><StarFill/><StarFill/><StarFill/>
                </div>
                <p>
                  <FaQuoteLeft className="quote-icon-left"/>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <FaQuoteRight className="quote-icon-right"/>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <div className="stars">
                  <StarFill/><StarFill/><StarFill/><StarFill/><StarFill/>
                </div>
                <p>
                  <FaQuoteLeft className="quote-icon-left"/>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <FaQuoteRight className="quote-icon-right"/>
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
