import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Link
} from '@mui/material';

import WebIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import SchoolIcon from '@mui/icons-material/School';
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from '../styles/Projects.module.css';

const TechStack = ({ tech }) => (
  <Box className={styles.tech}>
    {tech.map((t, i) => (
      <Chip key={i} label={t} size="small" style={{ color: 'rgb(66, 201, 255)' }} />
    ))}
  </Box>
);

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website created to present my profile, skills, projects, internship journey, and contact details.",
      tech: ['React', 'JavaScript', 'Material UI', 'CSS'],
      link: "https://github.com/sidhartha091027",
      icon: <WebIcon className={styles.icon} />,
      color: styles.blue
    },
    {
      title: "AI/ML Learning Projects",
      description: "Practice projects focused on understanding machine learning concepts, Python programming, data handling, and model building basics.",
      tech: ['Python', 'Machine Learning', 'Data Analysis'],
      link: "https://github.com/sidhartha091027",
      icon: <PsychologyIcon className={styles.icon} />,
      color: styles.green
    },
    {
      title: "React Practice Components",
      description: "Frontend practice work using React components, props, state, routing, and clean UI structure for improving development skills.",
      tech: ['React', 'JSX', 'CSS', 'JavaScript'],
      link: "https://github.com/sidhartha091027",
      icon: <CodeIcon className={styles.icon} />,
      color: styles.purple
    },
    {
      title: "Cybersecurity Learning Work",
      description: "A learning-based project area focused on cybersecurity fundamentals, safe web practices, basic security concepts, and awareness.",
      tech: ['Cybersecurity', 'Networking', 'Security Basics'],
      link: "https://github.com/sidhartha091027",
      icon: <SecurityIcon className={styles.icon} />,
      color: styles.orange
    },
    {
      title: "Student Internship Projects",
      description: "Practical work and learning tasks completed during internship experience, focused on improving real-world technical understanding.",
      tech: ['Internship', 'Web Development', 'Teamwork'],
      link: "https://github.com/sidhartha091027",
      icon: <SchoolIcon className={styles.icon} />,
      color: styles.red
    },
    {
      title: "Database Practice Work",
      description: "Basic database practice projects for understanding data storage, tables, queries, and backend connection concepts.",
      tech: ['MySQL', 'Database', 'Queries'],
      link: "https://github.com/sidhartha091027",
      icon: <StorageIcon className={styles.icon} />,
      color: styles.gray
    },
    {
      title: "GitHub Project Collection",
      description: "A collection of my coding practice, learning projects, frontend experiments, and portfolio development work.",
      tech: ['Git', 'GitHub', 'Code Practice'],
      link: "https://github.com/sidhartha091027",
      icon: <GitHubIcon className={styles.icon} />,
      color: styles.dark
    }
  ];

  const metaDescription = `Projects by Sidhartha Kumar Sahoo including portfolio website, AI/ML learning projects, React practice work, cybersecurity learning, internship projects and database practice.`;

  return (
    <>
      <Helmet>
        <title>Projects | Sidhartha Kumar Sahoo - AI/ML Engineer</title>

        <meta
          name="description"
          content={metaDescription}
        />

        <meta
          name="keywords"
          content="Sidhartha Kumar Sahoo projects, AI ML projects, React projects, portfolio website, student intern projects, cybersecurity learning, web development projects"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sidharthakumarsahoo.com/projects" />
        <meta property="og:title" content="Projects | Sidhartha Kumar Sahoo Portfolio" />

        <meta
          property="og:description"
          content="Explore projects and learning work by Sidhartha Kumar Sahoo in AI/ML, React, web development, cybersecurity and internship practice."
        />

        <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sidharthakumarsahoo.com/projects" />
        <meta property="twitter:title" content="Projects | Sidhartha Kumar Sahoo" />

        <meta
          property="twitter:description"
          content="Portfolio projects, AI/ML learning work, React practice, cybersecurity learning and internship projects."
        />

        <meta property="twitter:image" content="%PUBLIC_URL%/logo192.png" />

        <link rel="canonical" href="https://sidharthakumarsahoo.com/projects" />

        <meta name="author" content="Sidhartha Kumar Sahoo" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Projects Portfolio - Sidhartha Kumar Sahoo",
            "description": "Collection of student projects, AI/ML learning work, React practice and web development projects by Sidhartha Kumar Sahoo.",
            "url": "https://sidharthakumarsahoo.com/projects",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "url": project.link || "https://sidharthakumarsahoo.com/projects",
                "keywords": project.tech.join(", "),
                "author": {
                  "@type": "Person",
                  "name": "Sidhartha Kumar Sahoo"
                }
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
                "name": "Projects",
                "item": "https://sidharthakumarsahoo.com/projects"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          My Projects
        </Typography>

        <Typography className={styles.subtitle}>
          AI/ML learning, React practice, web development and internship work
        </Typography>

        <Box className={styles.cards}>
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`${styles.card} ${project.color}`}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              <CardContent>
                {project.icon}

                <Typography
                  className={styles.cardTitle}
                  itemProp="name"
                >
                  {project.title}
                </Typography>

                <Typography
                  className={styles.text}
                  itemProp="description"
                >
                  {project.description}
                </Typography>

                <Box itemProp="keywords" style={{ display: 'none' }}>
                  {project.tech.join(', ')}
                </Box>

                <TechStack tech={project.tech} />

                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="url"
                    aria-label={`View ${project.title}`}
                  >
                    View Project
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Projects;