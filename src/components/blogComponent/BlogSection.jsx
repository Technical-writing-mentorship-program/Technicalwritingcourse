import semrush from './image/semrush.png'
import Javascript from './image/JavascriptVariables.png'
import contentmarketing from './image/contentMarketing.png'

const BlogSection = () => {
  const sectionStyle = {
    padding: '60px 20px',
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#8A2BE2',
    fontWeight: 'bold',
    marginBottom: '40px',
    letterSpacing: '2px',
    fontFamily: "Bebas Neue"
  };

  const blogsContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap'
  };

  const blogCard = {
    width: '300px',
    textAlign: 'center',
    textDecoration: 'none'
  };

  const blogImage = {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px'
  };

  const blogTitle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#8A2BE2',
    lineHeight: '1.5',
    fontFamily: "Bebas Neue",
  };

  const buttonStyle = {
    marginTop: '40px',
    padding: '10px 30px',
    fontSize: '1rem',
    backgroundColor: '#8A2BE2',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none'
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>CHECKOUT OUR BLOG</h2>
      <div style={blogsContainer}>
        <a href="/blog/master-the-basics-of-seo-using-semrush" style={blogCard}>
          <img src={semrush} alt="SEO Basics" style={blogImage} />
          <p style={blogTitle}>Master the Basics of SEO Using Semrush</p>
        </a>
        <a href="/blog/javascript-variables-and-data-types" style={blogCard}>
          <img src={Javascript} alt="JavaScript Essentials" style={blogImage} />
          <p style={blogTitle}>JavaScript Essentials Understanding Variables and Data Types</p>
        </a>
        <a href="/blog/what-is-content-marketing" style={blogCard}>
          <img src={contentmarketing} alt="Technical Writing" style={blogImage} />
          <p style={blogTitle}>What is Content Marketing?</p>
        </a>
      </div>
      <a href="/blog">
        <button style={buttonStyle}>READ MORE</button>
      </a>
    </section>
  );
};

export default BlogSection;
