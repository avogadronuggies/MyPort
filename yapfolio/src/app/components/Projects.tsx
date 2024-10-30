import Image from "next/image";
import Link from "next/link";

const projectsData = [
  {
    name: "WeatherApp",
    image: "/images/p1.png",
    url: "https://avogadronuggies.github.io/weatherapp/index.html",
  },
  {
    name: "TicTacToe",
    image: "/images/p3.png",
    url: "https://tic-tac-toe-mine.vercel.app/",
  },
  {
    name: "FoodMA",
    image: "/images/p2.png",
    url: "https://foodma.vercel.app",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="Projects">
      <div className="progress-bar"></div>
      <h2>Projects</h2>
      <div className="container project_container">
        {projectsData.map((project, index) => (
          <article key={index} className="project">
            <div className="project_image">
              <Image
                src={project.image}
                alt={project.name}
                width={200}
                height={200}
              />
            </div>
            <div className="project_info">
              <h4>{project.name}</h4>
              <Link href={project.url} className="btn btn-primary">
                Visit
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
