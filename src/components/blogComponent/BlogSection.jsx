import semrush from './image/semrush.png';
import hugoMigration from "/img/hugo-to-docusaurus.png";
import JavascriptVariables from './Image/JavascriptVariables.png';
import styles from './styles.module.css';

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
    gap: '80px',
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
    padding: '0.75rem 1.25rem',
    fontSize: '1rem',
    backgroundColor: '#8A4DFF',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none'
  };

  const blogPreviews = [
    {
      "title": "JavaScript Essentials Understanding Variables and Data Types",
     "img": JavascriptVariables,
      "url": "/blog/javascript-variables-and-data-types" 
    },

    {
      "title": "Master the Basics of SEO Using Semrush",
      "img": semrush,
      "url": "/blog/master-the-basics-of-seo-using-semrush"
    },

    {
      "title": "How to Migrate Your Docs from Hugo to Docusaurus: The TWMP Approach",
      "img": hugoMigration,
      "url": "/blog/how-to-migrate-your-docs-from-hugo-to-docusaurus" 
    }
  
  ]
  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>CHECKOUT OUR BLOG</h2>
      <div style={blogsContainer}>
      {
        blogPreviews.map((preview, index) => (
          <a key={index} href={preview.url} style={blogCard} className={styles.blogPreviewCard}>
            <img src={preview.img} alt={preview.title} style={blogImage} />
            <p style={blogTitle}>{preview.title}</p>
          </a>
        ))
      }
      </div>
      <a href="/blog">
        <button className={styles.button} style={buttonStyle}>READ MORE</button>
      </a>
    </section>
  );
};

export default BlogSection;