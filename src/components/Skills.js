import React, { useState } from 'react';
import './Skills.css';

const skillCategories = [
  {
    name: 'Technical',
    skills: [
      { name: 'HTML', icon: '🔤' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '✨' },
      { name: 'Reactjs', icon: '⚛️' },
      { name: 'Nextjs', icon: '⏭️' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'AWS', icon: '☁️' },
      { name: 'Cloud Shell', icon: '💻' },
      { name: 'C++', icon: '➕' },
      { name: 'C', icon: '🌊' },
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'SQL', icon: '🗄️' },
    ],
  },
  {
    name: 'AI & Content',
    skills: [
      { name: 'Artificial Intelligence (AI)', icon: '🤖' },
      { name: 'Content Strategy', icon: '🧠' },
      { name: 'Content Creation', icon: '✍️' },
      { name: 'Content Management', icon: '📋' },
      { name: 'Content Management Systems (CMS)', icon: '🗂️' },
      { name: 'SEO', icon: '🔍' },
    ],
  },
  {
    name: 'Management & Soft Skills',
    skills: [
      { name: 'Project Management', icon: '📈' },
      { name: 'Leadership', icon: '🦸' },
      { name: 'Event Management', icon: '🎤' },
      { name: 'Time Management', icon: '⏰' },
      { name: 'Writing', icon: '📝' },
      { name: 'Public Speaking', icon: '📢' },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="skills-section fade-in">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-tabs">
        {skillCategories.map((cat, idx) => (
          <button
            key={cat.name}
            className={`skills-tab${activeTab === idx ? ' active' : ''}`}
            onClick={() => setActiveTab(idx)}
          >
            {cat.name}
          </button>
        ))}
      </div>
      <div className="skills-badges-grid">
        {skillCategories[activeTab].skills.map((skill, i) => (
          <div className="skill-badge animated-skill" key={skill.name} style={{ animationDelay: `${i * 0.07 + 0.1}s` }}>
            <span className="skill-badge-icon">{skill.icon}</span>
            <span className="skill-badge-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 