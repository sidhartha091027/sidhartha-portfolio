import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, LinearProgress, Chip } from '@mui/material';

import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';

import styles from '../styles/Skills.module.css';

const technicalSkills = [
  { name: 'HTML', level: 85, icon: <CodeIcon className={styles.skillIcon} />, category: 'Frontend' },
  { name: 'CSS', level: 80, icon: <CodeIcon className={styles.skillIcon} />, category: 'Frontend' },
  { name: 'JavaScript', level: 70, icon: <CodeIcon className={styles.skillIcon} />, category: 'Frontend' },
  { name: 'React', level: 65, icon: <WebIcon className={styles.skillIcon} />, category: 'Frontend' },
  { name: 'Material UI', level: 60, icon: <WebIcon className={styles.skillIcon} />, category: 'Frontend' },
  { name: 'Python', level: 70, icon: <CodeIcon className={styles.skillIcon} />, category: 'Programming' },
  { name: 'C Programming', level: 65, icon: <CodeIcon className={styles.skillIcon} />, category: 'Programming' },
  { name: 'AI/ML Basics', level: 55, icon: <PsychologyIcon className={styles.skillIcon} />, category: 'AI/ML' },
  { name: 'Data Analysis Basics', level: 50, icon: <StorageIcon className={styles.skillIcon} />, category: 'AI/ML' },
  { name: 'Cybersecurity Basics', level: 55, icon: <SecurityIcon className={styles.skillIcon} />, category: 'Cybersecurity' },
  { name: 'Networking Basics', level: 50, icon: <SecurityIcon className={styles.skillIcon} />, category: 'Cybersecurity' },
  { name: 'MySQL', level: 55, icon: <StorageIcon className={styles.skillIcon} />, category: 'Database' },
  { name: 'Git/GitHub', level: 65, icon: <CodeIcon className={styles.skillIcon} />, category: 'Tools' }
];

const professionalSkills = [
  { name: 'Problem Solving', level: 75, icon: <CodeIcon className={styles.skillIcon} /> },
  { name: 'Learning Ability', level: 85, icon: <SchoolIcon className={styles.skillIcon} /> },
  { name: 'Creativity', level: 80, icon: <EmojiObjectsIcon className={styles.skillIcon} /> },
  { name: 'Teamwork', level: 75, icon: <BuildIcon className={styles.skillIcon} /> },
  { name: 'Communication', level: 70, icon: <EmojiObjectsIcon className={styles.skillIcon} /> },
  { name: 'Adaptability', level: 80, icon: <BuildIcon className={styles.skillIcon} /> },
  { name: 'Consistency', level: 75, icon: <SchoolIcon className={styles.skillIcon} /> }
];

const toolsAndPlatforms = [
  { name: 'VS Code', icon: <CodeIcon className={styles.toolIcon} /> },
  { name: 'GitHub', icon: <CodeIcon className={styles.toolIcon} /> },
  { name: 'Git', icon: <CodeIcon className={styles.toolIcon} /> },
  { name: 'Google Colab', icon: <PsychologyIcon className={styles.toolIcon} /> },
  { name: 'Jupyter Notebook', icon: <PsychologyIcon className={styles.toolIcon} /> },
  { name: 'Linux Basics', icon: <SecurityIcon className={styles.toolIcon} /> },
  { name: 'MySQL', icon: <StorageIcon className={styles.toolIcon} /> }
];

function Skills() {
  const avgTechnicalLevel = Math.round(
    technicalSkills.reduce((sum, skill) => sum + skill.level, 0) / technicalSkills.length
  );

  const metaDescription =
    `Sidhartha Kumar Sahoo's skills include HTML, CSS, JavaScript, React, Python, AI/ML basics, cybersecurity basics, MySQL, Git and GitHub.`;

  const allSkills = [...technicalSkills, ...professionalSkills];

  return (
    <>
      <Helmet>
        <title>Skills | Sidhartha Kumar Sahoo - AI/ML Engineer</title>

        <meta
          name="description"
          content={metaDescription}
        />

        <meta
          name="keywords"
          content={`Sidhartha Kumar Sahoo skills, AI ML Engineer, Student Intern, ${technicalSkills.map(s => s.name).join(', ')}, web development, React, Python, cybersecurity`}
        />

        <meta property="og:type" content="profile" />
        <meta property="og:profile:username" content="sidhartha-kumar-sahoo" />
        <meta property="og:url" content="https://sidharthakumarsahoo.com/skills" />
        <meta property="og:title" content="Skills | Sidhartha Kumar Sahoo Portfolio" />

        <meta
          property="og:description"
          content="Explore Sidhartha Kumar Sahoo's technical and professional skills in AI/ML, React, web development, Python, cybersecurity and database practice."
        />

        <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
        <meta property="og:image:alt" content="Sidhartha Kumar Sahoo Skills Overview" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sidharthakumarsahoo.com/skills" />
        <meta property="twitter:title" content="Skills | Sidhartha Kumar Sahoo" />

        <meta
          property="twitter:description"
          content="Technical skills in HTML, CSS, JavaScript, React, Python, AI/ML basics, cybersecurity and database practice."
        />

        <meta property="twitter:image" content="%PUBLIC_URL%/logo192.png" />

        <link rel="canonical" href="https://sidharthakumarsahoo.com/skills" />

        <meta name="author" content="Sidhartha Kumar Sahoo" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="rating" content="General" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sidhartha Kumar Sahoo",
            "url": "https://sidharthakumarsahoo.com",
            "description": "AI/ML Engineer, Information Science and Telecommunication student, and Student Intern",
            "knowsAbout": technicalSkills.map(skill => skill.name),
            "hasOccupation": {
              "@type": "Occupation",
              "name": "AI/ML Engineer and Student Intern",
              "skills": allSkills.map(skill => ({
                "@type": "DefinedTerm",
                "name": skill.name,
                "description": `${skill.name} skill with ${skill.level}% proficiency`,
                "inDefinedTermSet": skill.category || "Professional Skill"
              }))
            },
            "knowsLanguage": [
              {
                "@type": "Language",
                "name": "English",
                "proficiencyLevel": "Working proficiency"
              },
              {
                "@type": "Language",
                "name": "Hindi",
                "proficiencyLevel": "Fluent"
              },
              {
                "@type": "Language",
                "name": "Odia",
                "proficiencyLevel": "Native"
              }
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Technical Skills - Sidhartha Kumar Sahoo",
            "description": "Technical skills and learning areas with proficiency levels.",
            "numberOfItems": technicalSkills.length,
            "itemListElement": technicalSkills.map((skill, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "DefinedTerm",
                "name": skill.name,
                "description": `${skill.name} - ${skill.category}`,
                "termCode": `${skill.level}%`
              }
            }))
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://sidharthakumarsahoo.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Skills",
                "item": "https://sidharthakumarsahoo.com/skills"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h2" className={styles.title}>
          My Skills
        </Typography>

        <Typography className={styles.subtitle}>
          Technical skills, AI/ML learning, cybersecurity basics and professional growth
        </Typography>

        <Box className={styles.section} itemScope itemType="https://schema.org/ItemList">
          <Typography variant="h4" className={styles.sectionTitle}>
            <CodeIcon aria-hidden="true" /> Technical Skills
          </Typography>

          <Typography
            variant="body2"
            className={styles.avgSkill}
            style={{ display: 'none' }}
            itemProp="description"
          >
            Average proficiency: {avgTechnicalLevel}%
          </Typography>

          <Box className={styles.skillsList}>
            {technicalSkills.map((skill, i) => (
              <Box
                key={i}
                className={styles.skillItem}
                itemScope
                itemType="https://schema.org/DefinedTerm"
                itemProp="itemListElement"
              >
                <Box className={styles.skillNameIcon}>
                  <span aria-hidden="true">{skill.icon}</span>

                  <Typography className={styles.skillName} itemProp="name">
                    {skill.name}
                  </Typography>

                  <meta itemProp="category" content={skill.category} />
                  <meta itemProp="proficiencyLevel" content={`${skill.level}%`} />
                </Box>

                <Box className={styles.progressContainer}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    className={styles.progressBar}
                    aria-label={`${skill.name} proficiency: ${skill.level}%`}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />

                  <Typography
                    className={styles.skillLevel}
                    itemProp="description"
                    style={{ display: 'none' }}
                  >
                    {skill.level}%
                  </Typography>

                  <Typography className={styles.skillLevel} aria-hidden="true">
                    {skill.level}%
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={styles.section}>
          <Typography variant="h4" className={styles.sectionTitle}>
            <EmojiObjectsIcon aria-hidden="true" /> Professional Skills
          </Typography>

          <Box className={styles.skillsList}>
            {professionalSkills.map((skill, i) => (
              <Box key={i} className={styles.skillItem}>
                <Box className={styles.skillNameIcon}>
                  <span aria-hidden="true">{skill.icon}</span>

                  <Typography className={styles.skillName}>
                    {skill.name}
                  </Typography>
                </Box>

                <Box className={styles.progressContainer}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    className={styles.progressBar}
                    aria-label={`${skill.name} proficiency: ${skill.level}%`}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />

                  <Typography className={styles.skillLevel} aria-hidden="true">
                    {skill.level}%
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={styles.section}>
          <Typography variant="h4" className={styles.sectionTitle}>
            <BuildIcon aria-hidden="true" /> Tools & Platforms
          </Typography>

          <Box className={styles.tools}>
            {toolsAndPlatforms.map((tool, i) => (
              <Chip
                key={i}
                label={tool.name}
                icon={<span aria-hidden="true">{tool.icon}</span>}
                color="primary"
                className={styles.toolChip}
                aria-label={`Tool: ${tool.name}`}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Skills;