import SEO from './Image/SEO.jpg'
import JavaScript from './Image/JavaScript.jpg'
import TechnicalWriting from './Image/TechnicalWriting.jpg'



const BlogSection = () => {
  const sectionStyle = {
    padding: '60px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#8A2BE2',
    fontWeight: 'bold',
    marginBottom: '40px',
    letterSpacing: '2px'
  };

  const blogsContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap'
  };

  const blogCard = {
    width: '300px',
    textAlign: 'center'
  };

  const blogImage = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px'
  };

  const blogTitle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#8A2BE2',
    lineHeight: '1.5'
  };

  const buttonStyle = {
    marginTop: '40px',
    padding: '10px 30px',
    fontSize: '1rem',
    backgroundColor: '#A18CFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>CHECKOUT OUR BLOG</h2>
      <div style={blogsContainer}>
        <div style={blogCard}>
          <img
            src={SEO} 
            alt="SEO Basics"
            style={blogImage}
          />
          <p style={blogTitle}>
            MASTER THE BASICS OF SEO USING SEMRUSH.
          </p>
        </div>
        <div style={blogCard}>
          <img
            src={JavaScript} 
            alt="JavaScript Essentials"
            style={blogImage}
          />
          <p style={blogTitle}>
            JAVASCRIPT ESSENTIALS: UNDERSTANDING VARIABLES AND DATA TYPES.
          </p>
        </div>
        <div style={blogCard}>
          <img
            src={TechnicalWriting} 
            alt="Technical Writing"
            style={blogImage}
          />
          <p style={blogTitle}>
            TECHNICAL WRITIN FOR BEGINNERS.
          </p>
        </div>
      </div>
      <button style={buttonStyle}>READ MORE</button>
    </section>
  );
};

export default BlogSection;
