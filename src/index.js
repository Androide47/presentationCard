import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill0="React" emoji0="&#128406;" color="#61dafb" />
      <Skill skill0="Next.js" emoji0="&#128640;" color="#fff" />
      <Skill skill0="Guitar" emoji0="&#127926;" color="#ff7f50" />
      <Skill skill0="Video Games" emoji0="&#127918;" color="#ff69b4" />
      <Skill skill0="Programming" emoji0="&#128187;" color="#ff8c00" />
      <Skill skill0="Music" emoji0="&#127911;" color="#ffd700" />
      <Skill skill0="Cooking" emoji0="&#127850;" color="#ffa500" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill0}</span>
      <span>{props.emoji0}</span>
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
