import { useState, useEffect } from "react";

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
        icon: "/icons/html.png",
      },
      {
        category: "Frontend",
        name: "CSS",
        icon: "/icons/css.png",
      },
      {
        category: "Frontend",
        name: "JavaScript",
        icon: "/icons/javascript.png",
      },
      {
        category: "Frontend",
        name: "React",
        icon: "/icons/react.png",
      },
      {
        category: "Tools",
        name: "VS Code",
        icon: "/icons/vscode.png",
      },
      {
        category: "Design",
        name: "Photoshop",
        icon: "/icons/photoshop.png",
      },
      {
        category: "Design",
        name: "Illustrator",
        icon: "/icons/illustrator.png",
      },
      {
        category: "Design",
        name: "Figma",
        icon: "/icons/figma.png",
      },
      {
        category: "Tools",
        name: "Git",
        icon: "/icons/git.png",
      },
      {
        category: "Tools",
        name: "GitHub",
        icon: "/icons/github.png",
      },
      {
        category: "Deploy",
        name: "Vercel",
        icon: "/icons/vercel.png",
      },
      {
        category: "API",
        name: "Google Maps API",
        icon: "/icons/googlemaps.png",
      },
    ];

  const projects = {
  beyond: {
      title: "Beyond Map",
      subtitle: "Google Maps API를 활용한 사람들이 잘 모르는 세계 여행지 추천 웹 서비스\n\n검색, 카테고리별 필터링, 여행지 상세정보를 제공합니다.",
      description:
        "잘 알려지지 않은 나라와 도시, 그리고 추천 여행지를 소개하는 웹 서비스.",
      features: [
        "예: 일본 or 문화/역사 등 키워드를 통해 검색이 가능합니다",
        "카테고리 필터도 나열해 검색이아닌 방법으로도 찾을 수 있습니다",
        "Google Maps API 연동",
        "나라에 도시마다 상세하게 여행할 지역을 설명하였습니다",
      ],
      tech: "React, JavaScript, CSS, Google Maps API, Vercel",
      link: "https://beyond-map.vercel.app/",
    },

    jobtrack: {
      title: "JobTrack",
      subtitle: "취업 준비 과정에서 지원 회사를 편리하게 관리할 수 있는 웹 서비스 \n\n지원 현황 , 회사 검색, 지원상태 별 필터링을 제공합니다.",
      description:
        "취업 준비 과정에서 지원 회사를 관리할 수 있도록 만든 웹 서비스.",
      features: [
        "회사를 추가하고 현재 취업 상태를 설정 가능합니다",
        "지원 전, 지원 완료 등등 현 상태별로 필터 기능이 있습니다",
        "회사명을 입력해 검색 가능합니다",
      ],
      tech: "React, JavaScript, CSS, GitHub, Vercel",
      link: "https://job-track-beta.vercel.app",
    },
  };
    

    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [bubbles, setBubbles] = useState([]);

    const [skillsVisible, setSkillsVisible] = useState(false);

    const nameTop = ["C", "H", "O"];
    const nameBottom = ["S", "A", "N", "G", "W", "O", "O"];

    const heroSubText = "Frontend Developer Portfolio";
    

    useEffect(() => {
        const handleMouseMove = (e) => {
          const newBubble = {
            id: Date.now() + Math.random(),
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 26 + 14,
          };

          setBubbles((prev) => [...prev.slice(-12), newBubble]);

          setTimeout(() => {
            setBubbles((prev) => prev.filter((bubble) => bubble.id !== newBubble.id));
          }, 450);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);

      useEffect(() => {
        const motionItems = document.querySelectorAll(".project-motion");

        const observer = new IntersectionObserver(
          (entries) => {
           entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("show");
              } else {
                entry.target.classList.remove("show");
              }
            });
          },
          {
            threshold: 0.25,
          }
        );

        motionItems.forEach((item) => observer.observe(item));

        return () => {
          motionItems.forEach((item) => observer.unobserve(item));
        };
      }, []);

    useEffect(() => {
      const skillsSection = document.querySelector("#skills");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setSkillsVisible(entry.isIntersecting);
          });
        },
        {
          threshold: 0.25,
        }
      );

      if (skillsSection) {
        observer.observe(skillsSection);
      }

      return () => {
        if (skillsSection) {
          observer.unobserve(skillsSection);
        }
      };
    }, []);



    const filteredSkills = selectedSkill
  ? skillList.filter((skill) => skill.category === selectedSkill)
  : skillList;

  
  return (
    <div className="page">
      <div className="bubble-area">
        {bubbles.map((bubble) => (
          <span
            key={bubble.id}
            className="cursor-bubble"
            style={{
              left: `${bubble.x}px`,
              top: `${bubble.y}px`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
            }}
          ></span>
        ))}
      </div>

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
      <div className="hero-name-wrap">

            <div className="big-name top-name">
              {nameTop.map((letter, index) => (
                <span key={index} style={{ "--i": index }}>
                  {letter}
                </span>
              ))}
            </div>

            <div className="big-name bottom-name">
              {nameBottom.map((letter, index) => (
                <span key={index} style={{ "--i": index + 3 }}>
                  {letter}
                </span>
              ))}
            </div>

              <p className="hero-sub-motion">
              {heroSubText.split("").map((letter, index) => (
                <span key={index} style={{ "--i": index }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </p>
          </div>
          

          <div className="scroll-guide">
            <span>SCROLL</span>
            <div></div>
          </div>
        </section>

      <section
        id="skills"
        className={`section skills-section ${skillsVisible ? "show" : ""}`}
      >
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
          {filteredSkills.map((skill, index) => (
            <div
              className={`skill-icon-card skill-motion motion-${index % 8}`}
              key={skill.name}
            >
              <div className="skill-icon">
                <img src={skill.icon} alt={skill.name} />
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
      className={`project-card project-motion ${
        key === "beyond" ? "from-left" : "from-right"
      }`}
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

        <section id="education" className="section education-section">
          <h2 className="section-title">EDUCATION</h2>

          <div className="education-list">
            <div className="education-item">
              <div className="edu-date">2021 - 2023</div>

              <div className="edu-content">
                <h3>인문계 경원고등학교 졸업</h3>
                <p>체대 입시 준비</p>
                <ul>
                  <li>기초 체력 관리와 목표 달성을 위한 꾸준한 훈련 경험</li>
                  <li>성실함과 자기관리 습관을 쌓은 시기</li>
                </ul>
              </div>
            </div>

            <div className="education-item">
              <div className="edu-date">2025.10 - 2026.06</div>

              <div className="edu-content">
                <h3>부산 SBS 컴퓨터아트학원 부산지점</h3>
                <p>웹 프론트엔드 개발자 과정</p>
                <ul>
                  <li>Photoshop, Illustrator, 기초 디자인 및 UI/UX 디자인 학습</li>
                  <li>HTML, CSS, JavaScript, React 기반 웹 화면 구현 학습</li>
                  <li>포트폴리오 프로젝트 제작 및 배포 경험</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
     
     <footer className="footer">
        <h2>
          감사합니다
          <br />
          편하게 연락 주신다면
          <br />
          늦어도 1~2일 이내에 꼭 답변드리겠습니다!
        </h2>

        <p className="footer-message">
          아직 배움의 시간이 길지 않지만, 열심히 꾸준히 공부하며 성장하겠습니다 :)
        </p>

        <div className="contact-box">
          <div className="contact-row">
            <strong>이메일</strong>
            <a href="mailto:sw8037896@gmail.com">sw8037896@gmail.com</a>
          </div>

          <div className="contact-row">
            <strong>Github</strong>
            <a href="https://github.com/sangu-05" target="_blank" rel="noreferrer">
              @sangu-05
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;