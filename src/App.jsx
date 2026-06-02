import { useState } from "react";
import { FaReact } from "react-icons/fa";

import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiGooglemaps,
} from "react-icons/si";


function App() {

  const skillCategories = ["Frontend", "Tools", "Deploy", "API", "Design"];
  
  const skillList = [
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
      category: "Tools",
      name: "VS Code",
      icon: "VS",
      className: "vscode",
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
  ];

  const projects = {
  beyond: {
      title: "Beyond Map",
      subtitle: "Google Maps API를 활용한 사람들이 잘 모르는 세계 여행지 추천 서비스입니다.\n\n검색, 카테고리별 필터링, 여행지 상세정보를 제공합니다.",
      description:
        "잘 알려지지 않은 나라와 도시, 그리고 추천 여행지를 소개하는 웹사이트입니다.",
      features: [
        "예: 일본 or 문화/역사 등 키워드를 통해 검색이 가능함",
        "카테고리 필터도 나열해 검색이아닌 방법으로도 찾을 수 있게 구현함",
        "Google Maps API 연동",
        "나라에 도시마다 상세하게 여행할 지역을 설명함",
      ],
      tech: "React, JavaScript, CSS, Google Maps API, Vercel",
      link: "https://beyond-map.vercel.app/",
    },

    jobtrack: {
      title: "JobTrack",
      subtitle: "취업 준비 과정에서 지원 회사를 편리하게 관리할 수 있는 웹 앱입니다. \n\n지원 현황 , 회사 검색, 지원상태 별 필터링을 제공합니다.",
      description:
        "취업 준비 과정에서 지원 회사를 관리할 수 있도록 만든 웹 앱입니다.",
      features: [
        "회사를 추가하고 현재 취업 상태를 설정 가능함",
        "지원 전, 지원 완료 등등 현 상태별로 필터 기능 구현함",
        "회사명을 입력해 검색 가능",
      ],
      tech: "React, JavaScript, CSS, GitHub, Vercel",
      link: "https://job-track-beta.vercel.app",
    },
  };
    

    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredSkills = selectedSkill
  ? skillList.filter((skill) => skill.category === selectedSkill)
  : skillList;

  
  return (
    <div className="page">

      <div className="side-links">
          <a href="https://github.com/sangu-05" target="_blank" rel="noreferrer">
            <SiGithub />
          </a>

          <a href="https://vercel.com/sangu-05s-projects" target="_blank" rel="noreferrer">
            <SiVercel />
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
            화면을 만들겠습니다.
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

        <div className="project-grid">

  {Object.entries(projects).map(([key, project]) => (

    <div
      key={key}
      className="project-card"
      onClick={() => setSelectedProject(key)}
    >
      <h3>{project.title}</h3>

      <p className="project-desc">
        {project.subtitle}
      </p>

      {key === "beyond" && (
       <div className="project-tech">
        <SiReact className="react-icon" />
        <SiJavascript className="js-icon" />
        <SiGooglemaps className="map-icon" />
        <SiGithub className="github-icon" />
        <SiVercel className="vercel-icon" />
      </div>
      )}
      
      {key === "jobtrack" && (
          <div className="project-tech">
            <SiReact className="react-icon" />
            <SiJavascript className="js-icon" />
            <SiGithub className="github-icon" />
            <SiVercel className="vercel-icon" />
          </div>
        )}
        <span className="card-more">Click to view details →</span>

    </div>
      ))}
    </div>
      </section>

      {selectedProject && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <h2>{projects[selectedProject].title}</h2>

              <p className="modal-label">프로젝트 설명</p>

              <p className="modal-desc">
                {projects[selectedProject].description}
              </p>

              <p className="modal-label">기술 스택</p>

              <div className="modal-tech">
                {selectedProject === "beyond" && (
                  <>
                    <SiReact className="react-icon" />
                    <SiJavascript className="js-icon" />
                    <SiGooglemaps className="map-icon" />
                    <SiGithub className="github-icon" />
                    <SiVercel className="vercel-icon" />
                  </>
                )}

                {selectedProject === "jobtrack" && (
                  <>
                    <SiReact className="react-icon" />
                    <SiJavascript className="js-icon" />
                    <SiGithub className="github-icon" />
                    <SiVercel className="vercel-icon" />
                  </>
                )}
              </div>

              <div className="modal-info-grid">
                <div>
                  <p>참여인원</p>
                  <strong>개인 프로젝트</strong>
                </div>

                <div>
                  <p>기간</p>
                  <strong>2026</strong>
                </div>

                <div>
                  <p>사이트 링크</p>
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    프로젝트 방문
                  </a>
                </div>
              </div>

              <div className="modal-divider"></div>

              <h3>상세 내용</h3>

              <ul className="modal-feature-list">
                {projects[selectedProject].features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
     
      <footer className="footer">
          조상우 | Frontend Portfolio
      </footer>
    </div>
  );
}

export default App;