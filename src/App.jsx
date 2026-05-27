import { useState } from "react";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
} from "react-icons/si";


function App() {

  const skillCategories = ["Frontend", "Tools", "Deploy", "API", "Design"];
  
  const skillList = [
    {
      category: "Frontend",
      name: "JavaScript",
      icon: <SiJavascript />,
      className: "js",
    },
    {
      category: "Frontend",
      name: "React",
      icon: <SiReact />,
      className: "react",
    },
    {
      category: "Frontend",
      name: "HTML",
      icon: <SiHtml5 />,
      className: "html",
    },
    {
      category: "Frontend",
      name: "CSS",
      icon: "C",
      className: "css",
    },
    {
      category: "Tools",
      name: "Git",
      icon: <SiGit />,
      className: "git",
    },
    {
      category: "Tools",
      name: "GitHub",
      icon: <SiGithub />,
      className: "github",
    },
    {
      category: "Tools",
      name: "VS Code",
      icon: "VS",
      className: "vscode",
    },
    {
      category: "Deploy",
      name: "Vercel",
      icon: <SiVercel />,
      className: "vercel",
    },
    {
      category: "API",
      name: "Google Maps API",
      icon: "Map",
      className: "map",
    },
    {
      category: "Design",
      name: "Photoshop",
      icon: "Ps",
      className: "photoshop",
    },
    {
      category: "Design",
      name: "Illustrator",
      icon: "Ai",
      className: "illustrator",
    },
    {
      category: "Design",
      name: "Figma",
      icon: <SiFigma />,
      className: "figma",
    },
  ];
    

    const [selectedSkill, setSelectedSkill] = useState(null);

    const filteredSkills = selectedSkill
  ? skillList.filter((skill) => skill.category === selectedSkill)
  : skillList;

  
  return (
    <div className="page">

      <div className="side-links">
          <a href="https://github.com/sangu-05" target="_blank" rel="noreferrer">
            GH
          </a>
          <a href="https://vercel.com/sangu-05s-projects" target="_blank" rel="noreferrer">
            VC
          </a>
          <div className="side-line"></div>
        </div>
        
        <div className="right-contact">
          <div className="right-line"></div>
          <span>sw8037896@gmail.com</span>
        </div>

      <section id="home" className="main-visual">
        <div className="hero-left">
          <p className="sub-name">Frontend Developer Portfolio</p>

          <h2>
            사용자의 목적지까지
            <br />
            자연스럽게 안내하는
            <br />
            화면을 만듭니다.
          </h2>

          <p className="intro-text">
            React와 JavaScript를 활용해 검색, 필터, 지도 API, 상태 관리 기능을 구현하며
            사용자 흐름이 자연스러운 웹 화면을 만드는 프론트엔드 개발자가 되고싶습니다!
          </p>

          <div className="hero-tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>UI 구현</span>
            <span>Search & Filter</span>
            <span>Google Maps API</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="main-btn">프로젝트 보기</a>
            <a href="#skills" className="sub-btn">기술 보기</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-visual">
          <div className="profile-outline"></div>

          <div className="profile-image-box">
            <div className="avatar-circle"></div>
            <div className="avatar-body"></div>
          </div>
        </div>

          <div className="mini-card card-one">
            <strong>2+</strong>
            <span>Projects</span>
          </div>

          <div className="mini-card card-two">
            <strong>React</strong>
            <span>Main Skill</span>
          </div>
        </div>
      </section>

      <div className="white-divider"></div>

      <section id="skills" className="section skills-section">
        <h2 className="section-title">SKILLS</h2>
        <p className="section-desc">
          프로젝트를 만들며 직접 사용해본 기술들을 정리했습니다.
        </p>

        <div className="skill-category">
          {skillCategories.map((category) => (
            <button
            key={category}
            className={selectedSkill === category ? "active" : ""}
            onClick={() =>
              setSelectedSkill(selectedSkill === category ? null : category)
            }
          >
            {category}
          </button>
          ))}
        </div>

        <div className="skill-icon-grid">
          {filteredSkills.map((skill) => (
            <div className="skill-icon-card" key={skill.name}>
              <div className={`skill-icon ${skill.className}`}>
                {skill.icon}
              </div>
              <p>{skill.name}</p>
            </div>
          ))}
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