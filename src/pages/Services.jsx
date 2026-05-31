import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, Card, CardContent, Chip } from '@mui/material';

import WebIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';

import styles from '../styles/Services.module.css';

const Tech = ({ items }) => (
  <Box className={styles.tech}>
    {items.map((item, i) => (
      <Chip
        key={i}
        label={item}
        size="small"
        style={{ color: 'rgb(66, 201, 255)' }}
        aria-label={`Technology: ${item}`}
      />
    ))}
  </Box>
);

function Services() {
  const services = [
    {
      title: "Frontend Development",
      description: "I create clean and responsive web pages using HTML, CSS, JavaScript, React and Material UI.",
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Material UI'],
      icon: <WebIcon className={styles.icon} />,
      color: styles.blue,
      category: "Frontend Development"
    },
    {
      title: "React Projects",
      description: "I build React-based portfolio pages, reusable components, routing pages and interactive web sections.",
      tech: ['React', 'JSX', 'Components', 'Routing'],
      icon: <CodeIcon className={styles.icon} />,
      color: styles.green,
      category: "React Development"
    },
    {
      title: "AI/ML Learning",
      description: "I am building my knowledge in artificial intelligence and machine learning using Python, data handling and basic model concepts.",
      tech: ['Python', 'AI', 'Machine Learning', 'Data Analysis'],
      icon: <PsychologyIcon className={styles.icon} />,
      color: styles.orange,
      category: "AI/ML"
    },
    {
      title: "Cybersecurity Learning",
      description: "I am learning cybersecurity fundamentals, networking basics, safe web practices and security awareness.",
      tech: ['Cybersecurity', 'Networking', 'Security Basics'],
      icon: <SecurityIcon className={styles.icon} />,
      color: styles.red,
      category: "Cybersecurity"
    },
    {
      title: "Database Practice",
      description: "I practice database concepts such as tables, queries, data storage and basic backend connection ideas.",
      tech: ['MySQL', 'Database', 'Queries'],
      icon: <StorageIcon className={styles.icon} />,
      color: styles.purple,
      category: "Database"
    },
    {
      title: "Student Internship Work",
      description: "I am gaining practical experience through internship tasks, teamwork, project practice and real-world technical learning.",
      tech: ['Internship', 'Teamwork', 'Learning', 'GitHub'],
      icon: <SchoolIcon className={styles.icon} />,
      color: styles.dark,
      category: "Internship"
    }
  ];

  const metaDescription =
    "Learning areas and technical skills of Sidhartha Kumar Sahoo including frontend development, React projects, AI/ML learning, cybersecurity, database practice and student internship work.";

  const allKeywords = Array.from(new Set(services.flatMap(s => s.tech))).join(', ');

  return (
    <>
      <Helmet>
        <title>Services | Sidhartha Kumar Sahoo - AI/ML Engineer</title>

        <meta
          name="description"
          content={metaDescription}
        />

        <meta
          name="keywords"
          content={`Sidhartha Kumar Sahoo, AI ML Engineer, Student Intern, ${allKeywords}, frontend development, React development, cybersecurity`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sidharthakumarsahoo.com/services" />
        <meta property="og:title" content="Services | Sidhartha Kumar Sahoo Portfolio" />

        <meta
          property="og:description"
          content="Frontend development, React projects, AI/ML learning, cybersecurity learning, database practice and student internship work by Sidhartha Kumar Sahoo."
        />

        <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
        <meta property="og:image:alt" content="Sidhartha Kumar Sahoo Services Overview" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sidharthakumarsahoo.com/services" />
        <meta property="twitter:title" content="Services | Sidhartha Kumar Sahoo" />

        <meta
          property="twitter:description"
          content="Explore the technical learning areas of Sidhartha Kumar Sahoo in AI/ML, React, web development and cybersecurity."
        />

        <meta property="twitter:image" content="%PUBLIC_URL%/logo192.png" />

        <link rel="canonical" href="https://sidharthakumarsahoo.com/services" />

        <meta name="author" content="Sidhartha Kumar Sahoo" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="subject" content="AI/ML, Web Development, React, Cybersecurity" />
        <meta name="classification" content="Student Portfolio" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Learning Areas and Technical Skills - Sidhartha Kumar Sahoo",
            "description": metaDescription,
            "url": "https://sidharthakumarsahoo.com/services",
            "numberOfItems": services.length,
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": service.title,
                "description": service.description,
                "keywords": service.tech.join(", "),
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
                "name": "Services",
                "item": "https://sidharthakumarsahoo.com/services"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box className={styles.container}>
        <Typography variant="h3" className={styles.title}>
          Learning Areas & Technical Skills
        </Typography>

        <Typography className={styles.subtitle}>
          Frontend development, React, AI/ML, cybersecurity and internship practice
        </Typography>

        <Box className={styles.cards}>
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${styles.card} ${service.color}`}
              itemScope
              itemType="https://schema.org/CreativeWork"
              aria-labelledby={`service-title-${index}`}
            >
              <CardContent>
                <div aria-hidden="true">
                  {service.icon}
                </div>

                <Typography
                  id={`service-title-${index}`}
                  className={styles.cardTitle}
                  itemProp="name"
                >
                  {service.title}
                </Typography>

                <Typography
                  className={styles.text}
                  itemProp="description"
                >
                  {service.description}
                </Typography>

                <Box itemProp="keywords" style={{ display: 'none' }}>
                  {service.tech.join(', ')}
                </Box>

                <Box itemProp="genre" style={{ display: 'none' }}>
                  {service.category}
                </Box>

                <Tech items={service.tech} />
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Services;