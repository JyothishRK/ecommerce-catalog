function AboutPage(props) {
  return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px', color:'white'}}>About Me</h1>
          
          <div style={{ marginBottom: '30px' , color:'white'}}>
              <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Hi, I'm R K Jyothish!</h2>
              <p style={{ fontSize: '1.2rem', color: '#c8b3ce' }}>
                  I am currently pursuing a B.Tech in Computer Science and Engineering at Vellore Institute of Technology, Chennai. I have a strong passion for technology and software development.
              </p>
              <p style={{ fontSize: '1.2rem', color: '#c8b3ce' }}>
                  I have hands-on experience in languages like C, C++, Java, Python, and SQL. Over the course of my academic journey, I have worked on several projects, including a product catalog application called <strong>Product-Vault</strong>, an online bookstore, and an encryption project. I enjoy learning new technologies and enhancing my skills.
              </p>
          </div>

          <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '10px' , color:'white'}}>Goals and Vision</h2>
              <p style={{ fontSize: '1.2rem', color: '#c8b3ce' }}>
                  As a future Application Engineer, I aim to leverage my skills in full-stack development, cloud computing, and AI to build innovative and impactful software solutions. I’m constantly improving my skills through coding challenges and projects, and I’m excited about the possibilities in the tech industry.
              </p>
          </div>

          <div style={{
              background: '#f7f7f7',
              padding: '20px',
              borderRadius: '10px',
              marginTop: '30px'
          }}>
              <p style={{ fontSize: '1rem', color: '#555' }}>
                  Feel free to connect with me and explore my work on my GitHub profile: <a href="https://github.com/JyothishRK" style={{ color: '#ff7e5f' }}>github.com/JyothishRK</a>
              </p>
          </div>
      </div>
  );
}

export default AboutPage;
