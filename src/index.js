import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skill = [
  {
    id: 1,
    skill0: "React",
    emoji0: "&#128406;",
    level: "Intermediate",
    color: "#61dafb",
  },
  {
    id: 2,
    skill0: "Next.js",
    emoji0: "&#128640;",
    level: "Intermediate",
    color: "#fff",
  },
  {
    id: 3,
    skill0: "Guitar",
    emoji0: "&#127926;",
    level: "Advanced",
    color: "#ff7f50",
  },
  {
    id: 4,
    skill0: "Video Games",
    emoji0: "&#127918;",
    level: "Beginner",
    color: "#ff69b4",
  },
  {
    id: 5,
    skill0: "Programming",
    emoji0: "&#128187;",
    level: "Advanced",
    color: "#ff8c00",
  },
  {
    id: 6,
    skill0: "Music",
    emoji0: "&#127911;",
    level: "Intermediate",
    color: "#ffd700",
  },
  {
    id: 7,
    skill0: "Cooking",
    emoji0: "&#127850;",
    level: "Intermediate",
    color: "#ffa500",
  },
  {
    id: 8,
    skill0: "Photography",
    emoji0: "&#128247;",
    level: "Beginner",
    color: "#00ffff",
  },
  {
    id: 9,
    skill0: "Python",
    emoji0: "&#127850;",
    level: "Advanced",
    color: "#ffa500",
  },
  {
    id: 10,
    skill0: "PHP",
    emoji0: "&#127850;",
    level: "Intermediate",
    color: "#ffa501",
  },
  {
    id: 11,
    skill0: "CSS",
    emoji0: "&#127850;",
    level: "Beginner",
    color: "#ffa501",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="avatar.jpg" alt="avatar" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Andrei Ortega</h1>
      <p>
        I am a <strong>Frontend Developer</strong> from <strong>Mexico</strong>.
        I am currently learning <strong>React</strong> and{" "}
        <strong>Next.js</strong>. I like to play guitar and play video games.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skill.map((skill) => (
        <Skill
          key={skill.id}
          skill={skill.skill0}
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Advanced" && "💪🏼"}
        {level === "Intermediate" && "🤖"}
        {level === "Beginner" && "👨‍💻"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
