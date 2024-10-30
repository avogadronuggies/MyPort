import Image from "next/image";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      {
        name: "JavaScript",
        logo: "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
      },
      {
        name: "CSS",
        logo: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
      },
      {
        name: "Bootstrap",
        logo: "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "PostgreSQL",
        logo: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
      },
      {
        name: "MongoDB",
        logo: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
      },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      {
        name: "ReactJS",
        logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      },
      {
        name: "Django",
        logo: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <div className="progress-bar"></div>
        <h2>Skills</h2>
      </div>

      <div className="skills-content">
        {skillsData.map((category, index) => (
          <div key={index} className="skills-category">
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={50}
                    height={50}
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
