function App() {
  return (
    <div className="page">
      <header className="top-header">
        <a href="#home" className="logo">
          Sangwoo Portfolio
        </a>

        <nav className="menu">
          <a href="#about">About me</a>
          <a href="#skills">Skills</a>
          <a href="#archiving">Archiving</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <section id="home" className="main-visual">
        <p className="sub-name">- 조상우 -</p>
        <h2>프론트엔드 개발자 포트폴리오</h2>
        <div className="line"></div>
        <p className="intro-text">
          안녕하세요.
          <br />
          프론트엔드 개발자를 준비하고 있는 조상우입니다.
        </p>
        <a href="#about" className="more-btn">더 알아보기 ↓</a>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">ABOUT ME</h2>

        <div className="about-grid">
          <div className="about-item">
            <strong>이름</strong>
            <p>조상우</p>
          </div>

          <div className="about-item">
            <strong>생년월일</strong>
            <p>2005.05.27</p>
          </div>

          <div className="about-item">
            <strong>위치</strong>
            <p>대한민국 부산</p>
          </div>

          <div className="about-item">
            <strong>이메일</strong>
            <p>sw8037896@gmail.com</p>
          </div>

          <div className="about-item">
            <strong>교육 과정</strong>
            <p>웹 프론트엔드 개발자 과정</p>
          </div>

          <div className="about-item">
            <strong>관심 분야</strong>
            <p>웹 화면 구현, React UI 개발</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section gray-section">
        <h2 className="section-title">SKILLS</h2>

        <div className="skill-box">
          <h3>Frontend</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>UI / UX</h3>
          <ul>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Figma</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>Tools</h3>
          <ul>
            <li>VS Code</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Vercel</li>
          </ul>
        </div>

        <div className="skill-box">
          <h3>API</h3>
          <ul>
            <li>Google Maps API</li>
          </ul>
        </div>
      </section>

      <section id="archiving" className="section">
        <h2 className="section-title">ARCHIVING</h2>

        <div className="archive-list">
          <a href="https://github.com/sangu-05"
           target="_blank"
          className="archive-card"
          rel="noreferrer">
            <h3>GitHub</h3>
            <p>소스 코드 저장소</p>
          </a>

          <a href="https://velog.io/@sangu-05/posts"
           target="_blank"
            className="archive-card"
            rel="noreferrer">
            <h3>Velog</h3>
            <p>공부 내용 정리</p>
          </a>

        </div>
      </section>

      <section id="projects" className="section gray-section">
        <h2 className="section-title">PROJECTS</h2>

        <a
          href="https://beyond-map.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="project-card"
        >
          <h3>Beyond Map</h3>
          <p className="project-date">2026 개인 프로젝트</p>
          <p>
            잘 알려지지 않은 나라와 그 나라의 도시, 그리고 추천 여행지를 소개하는 웹사이트입니다.
          </p>
          <ul>
            <li>키워드 검색 및 카테고리 필터 기능 구현</li>
            <li>도시별 상세 페이지 구성</li>
            <li>Google Maps API를 활용한 지도와 마커 표시</li>
            <li>GitHub와 Vercel을 이용한 배포 경험 보유</li>
          </ul>
          <p className="tech">React, JavaScript, CSS, Google Maps API, Vercel</p>
        </a>

        <a
          href="https://job-track-beta.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="project-card"
        >
          <h3>JobTrack</h3>
          <p className="project-date">2026 개인 프로젝트</p>
          <p>
            취업 준비 과정에서 지원 회사를 관리할 수 있도록 만든 웹 앱입니다.
          </p>
          <ul>
            <li>회사 추가 및 삭제 기능 구현</li>
            <li>지원 상태 변경 기능 구현</li>
            <li>검색 및 상태별 카테고리 필터 기능 구현</li>
            <li>GitHub와 Vercel을 이용한 배포 경험 보유</li>
          </ul>
          <p className="tech">React, JavaScript, CSS, GitHub, Vercel</p>
        </a>
        
      </section>

      <footer className="footer">
          조상우 | Frontend Portfolio
      </footer>
    </div>
  );
}

export default App;