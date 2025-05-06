

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
    fontSize: '3rem',
    color: '#8A4DFF',
    marginBottom: '1rem',
  };

  const titleStyle = {
    fontFamily: "Bebas Neue",
    fontSize: '2rem',
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
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>HANDS-ON COURSES</h2>

      <div style={coursesContainerStyle}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <div style={iconStyle}>🧩</div>
          <div style={titleStyle}>API DOCUMENTATION</div>
          <p style={descriptionStyle}>
            Enhance your technical writing skills by how learning to create clear and effective API documentation
          </p>
          <button style={buttonStyle}>EXPLORE COURSE</button>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <div style={iconStyle}>📄</div>
          <div style={titleStyle}>ASCIIDOC COURSE</div>
          <p style={descriptionStyle}>
            Dive into the AsciiDoc Course to master this powerful markup language, enabling you to produce professional documents that are easily integrated into your workflow
          </p>
          <button style={buttonStyle}>EXPLORE COURSE</button>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <div style={iconStyle}>📑</div>
          <div style={titleStyle}>TECHNICAL WRITING COURSE</div>
          <p style={descriptionStyle}>
            Develop the essential skills needed to convey complex information clearly and effectively in our Technical Writing Course
          </p>
          <button style={buttonStyle}>EXPLORE COURSE</button>
        </div>
      </div>

      <button style={buttonStyle}>GO TO ACADEMY</button>
    </div>
  );
};

export default HandsOnCourses;
