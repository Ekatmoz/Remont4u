import { Col } from 'react-bootstrap';

const MapComponent = () => {
  return (
    <Col lg={6} md={12}>
      <iframe
      title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.2003368653595!2d19.061149611593393!3d47.505489571060565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc6e79d6f8a3%3A0x73cb72000feaf437!2sBudapest%2C%20Oktogon!5e0!3m2!1shu!2shu!4v1713525151462!5m2!1shu!2shu"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Col>
  );
}

export default MapComponent;

