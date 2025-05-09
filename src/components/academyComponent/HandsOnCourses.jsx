import API from './Image/API.png'
import xml from './Image/xml.png'
import writing from './Image/writing.png'

const HandsOnCourses = () => {
  const containerStyle = {
    padding: '4rem 1rem',
    textAlign: 'center',
    backgroundColor: "#e5e5e5",
  };

  const headingStyle = {
    color: '#8A4DFF',
    fontSize: '2.5rem',
    fontFamily: "Bebas Neue",
    marginBottom: '3rem',
  };

  const coursesContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    marginBottom: '2rem',
    fontFamily: "Instrument Sans",
  };

  const cardStyle = {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '1.5rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  };

  const iconStyle = {
    width: '60px',
    height: '60px',
    marginBottom: '1rem',
  };

  const titleStyle = {
    fontFamily: "Bebas Neue",
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'black',
    margin: '0.5rem 0',
  };

  const descriptionStyle = {
    fontSize: '0.9rem',
    color: '#444',
    marginBottom: '1.5rem',
  };

  const buttonStyle = {
    backgroundColor: '#8A4DFF',
    color: '#fff',
    padding: '0.75rem 1.25rem',
    borderRadius: '0.5rem',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "Instrument Sans",
    textDecoration: 'none',
    display: 'inline-block',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>HANDS-ON COURSES</h2>

      <div style={coursesContainerStyle}>
        {/* Card 1: API Documentation */}
        <div style={cardStyle}>
          <img 
            src={API} 
            alt="API Documentation Icon" 
            style={iconStyle} 
          />
          <div style={titleStyle}>API DOCUMENTATION</div>
          <p style={descriptionStyle}>
            Enhance your technical writing skills by learning how to create clear and effective API documentation.
          </p>
          <a href="/docs/category/api-documentation-course" style={buttonStyle}>EXPLORE COURSE</a>
        </div>

        {/* Card 2: Markup Language */}
        <div style={cardStyle}>
          <img 
            src={xml} 
            alt="Markup Language" 
            style={iconStyle} 
          />
          <div style={titleStyle}>Markup Languages</div>
          <p style={descriptionStyle}>
            Enhance your technical writing skills by learning how to use markup languages to structure and present content clearly and efficiently
          </p>
          <a href="/docs/category/markup-languages" style={buttonStyle}>EXPLORE COURSE</a>
        </div>

        {/* Card 3: Technical Writing */}
        <div style={cardStyle}>
          <img 
            src={writing} 
            alt="Technical Writing Icon" 
            style={iconStyle} 
          />
          <div style={titleStyle}>TECHNICAL WRITING COURSE</div>
          <p style={descriptionStyle}>
            Develop essential skills to convey complex information clearly and effectively in our Technical Writing Course.
          </p>
          <a href="/docs/category/technical-writing-course" style={buttonStyle}>EXPLORE COURSE</a>
        </div>
      </div>

      {/* Go to the Academy session */}
      <a href="/docs/category/technical-writing-course" style={buttonStyle}>GO TO ACADEMY</a>
    </div>
  );
};

export default HandsOnCourses;
