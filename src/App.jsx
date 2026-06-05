import { useState } from 'react';
import './App.css';
import avatar from './assets/avatar.jpg';
import ContactForm from "./ContactForm";



const skills = [
  {
    category: 'Frontend',
    technologies: 'React, JavaScript, HTML5, CSS3'
  },
  {
    category: 'Backend',
    technologies: 'PHP, Database'
  },
  {
    category: 'Desktop',
    technologies: 'C#, Windows Forms'
  },
  {
    category: 'Game Development',
    technologies: 'Unity'
  },
  {
    category: 'Business Software',
    technologies: '1C'
  }
];

const projects = [
  {
    id: 1,
    title: 'Личный сайт-портфолио',
    description: 'Одностраничное приложение с информацией обо мне, навыками, проектами и формой обратной связи.',
    stack: 'React, Vite, CSS',
    status: 'Готово'
  },
  {
    id: 2,
    title: 'ВКР "Разработка веб-сайта макретплейса по продаже автозапчастей" ',
    description: 'Проект ориентирован на автоматизацию продаж в сфере автозапчастей с учётом современных стандартов веб-разработки и потребностей целевой аудитории.',
    stack: 'PHP, CSS',
    status: 'Готово'
  },
  {
    id: 3,
    title: 'Мобильная игра',
    description: 'Мобильная игра в жанре приключенческого экшена, разрабатываемая для платформ Android и iOS.',
    stack: 'Unity',
    status: 'В разработке'
  },
  {
    id: 4,
    title: 'Разработка системы управления складом и учёта товаров для малого бизнеса',
    description: 'Веб-приложение для автоматизации складского учёта в малых предприятиях (магазинах, складах, мастерских)',
    stack: 'HTML5, CSS3, JavaScript, Bootstrap 5, PHP',
    status: 'Идея'
  }
];

function Header({ name, role }) {
  return (
    <header className="hero">
      <div className="heroAvatar">
        <img src={avatar} alt={name} />
      </div>

      <div className="heroContent">
        <p className="eyebrow">React-портфолио</p>
        <h1>{name}</h1>
        <p className="heroText">{role}</p>

        <a className="heroButton" href="#contacts">
          Связаться
        </a>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="section">
      <h2>Обо мне</h2>
      <p>
        Меня зовут Юрий Пономарев, мне 21 год. Я изучаю frontend-разработку и хочу научиться
        создавать понятные интерфейсы на React. В этом проекте я показываю,
        как работаю с компонентами, props, state, списками и формами.
        Также я уже закончил среднее-профессиональное обучение в Меджународном Институте Дизайна и Сервиса на специальность техник-программист.
        Уже знаком с разработками веб-сайтов, Windowforms, немного познакомился с разработками игр на Unity.
      </p>
    </section>
  );
}

function SkillsList({ items }) {
  return (
    <section className="section">
      <h2>Технологический стек</h2>

      <div className="stackGrid">
        {items.map((item) => (
          <div className="stackCard" key={item.category}>
            <h3>{item.category}</h3>
            <p>{item.technologies}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const statusClass = {
    'Готово': 'badgeReady',
    'В разработке': 'badgeProgress',
    'Идея': 'badgeIdea'
  };

  return (
    <article className="projectCard">
      <div className="cardTop"></div>

      <div className="projectHeader">
        <h3>
          <span className="projectIcon">🚀</span>
          {project.title}
        </h3>

        <span className={`badge ${statusClass[project.status]}`}>
          {project.status}
        </span>
      </div>

      <p className="projectDescription">
        {project.description}
      </p>

      <div className="stackTags">
        {project.stack.split(',').map((tech) => (
          <span className="stackTag" key={tech.trim()}>
            {tech.trim()}
          </span>
        ))}
      </div>

            <a
        href="https://github.com/yurch1knaprekole"
        target="_blank"
        rel="noopener noreferrer"
        className="projectButton"
      >
        <span>🐙</span>
        Подробнее
      </a>
    </article>
  );
}

function ProjectsSection({ items }) {
  return (
    <section className="section">
      <h2>Проекты</h2>
      <div className="projectsGrid">
        {items.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
}



export default function App() {
  return (
    <main className="page">
      <Header name="Юрий Пономарев" role="Начинающий frontend-разработчик" />
      <About />
      <SkillsList items={skills} />
      <ProjectsSection items={projects} />
      <ContactForm />
    </main>
  );
}
