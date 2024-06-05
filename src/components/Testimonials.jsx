import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { StarFill } from 'react-bootstrap-icons';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Testimonials = () => {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };
    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView();

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    }
  }, []);

  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="section-header">
          <h2>Отзывы</h2>
          <p>Наши клиенты говорят за нас.</p>
          <p>Для нас важна обратная саязь во время и после ремонта.</p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false
           }}
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
                <h3>Nat Kmk</h3>
                <h4>2022, Будапешт</h4>
                <div className="stars">
                  <StarFill/><StarFill/><StarFill/><StarFill/><StarFill/>
                </div>
                <p>
                  <FaQuoteLeft className="quote-icon-left"/>
                    Всё сделали очень качественно и с душой! Видно, что люди любят свое дело.
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
