import React from 'react';
import { Box, Typography, Card, CardContent, Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      <Helmet>
        <title>About Sidhartha Kumar Sahoo | AI/ML Engineer | Student Intern</title>

        <meta
          name="description"
          content="Learn about Sidhartha Kumar Sahoo, an Information Science and Telecommunication student, AI/ML engineer, and student intern passionate about web development, machine learning, and cybersecurity."
        />

        <meta
          name="keywords"
          content="Sidhartha Kumar Sahoo, AI ML Engineer, Student Intern, Information Science and Telecommunication, React Developer, Web Developer, Cybersecurity, Portfolio"
        />

        <meta name="author" content="Sidhartha Kumar Sahoo" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="About Sidhartha Kumar Sahoo | Portfolio"
        />

        <meta
          property="og:description"
          content="Information Science and Telecommunication student, AI/ML engineer and student intern focused on web development, AI and cybersecurity."
        />

        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Sidhartha Portfolio" />
        <meta
          property="og:url"
          content="https://sidharthakumarsahoo.com/about"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sidhartha Kumar Sahoo | AI/ML Engineer"
        />

        <meta
          name="twitter:description"
          content="Student intern and AI/ML engineer passionate about machine learning, web development and cybersecurity."
        />
      </Helmet>

      <Box
        id={styles.aboutSection}
        className={styles.aboutContainer}
      >
        <Typography
          id={styles.aboutTitle}
          variant="h2"
          className={styles.title}
        >
          About Sidhartha Kumar Sahoo
        </Typography>

        <Typography
          id={styles.aboutSubtitle}
          variant="h5"
          className={styles.subtitle}
        >
          AI/ML Engineer · Student Intern
        </Typography>

        {/* Biography */}

        <Typography
          id={styles.bioPara1}
          className={styles.bio}
        >
          Sidhartha Kumar Sahoo is an Information Science and
          Telecommunication student from Odisha, India, with
          strong interest in technology, innovation and modern
          digital systems. His academic journey is focused on
          learning and building practical technical skills.
        </Typography>

        <Typography
          id={styles.bioPara2}
          className={styles.bio}
        >
          As a student intern and AI/ML engineer, Sidhartha
          is continuously improving his knowledge in machine
          learning, artificial intelligence, frontend development
          and software technologies. He enjoys exploring how
          technology can solve real-world problems.
        </Typography>

        <Typography
          id={styles.bioPara3}
          className={styles.bio}
        >
          Along with AI and machine learning, he actively
          works on web development using React, JavaScript,
          HTML and CSS while also building interest in
          cybersecurity and practical development experience.
        </Typography>

        {/* Cards */}

        <Box
          id={styles.cardsWrapper}
          className={styles.cardContainer}
        >

          {/* Professional Role */}

          <Card
            id={styles.professionalRoleCard}
            className={styles.card}
          >
            <CardContent>

              <Typography
                id={styles.professionalRoleTitle}
                variant="h6"
                className={styles.cardTitle}
              >
                Professional Interests
              </Typography>

              <Typography
                id={styles.professionalRoleText}
                className={styles.cardText}
              >
                Sidhartha is passionate about artificial
                intelligence, machine learning, web development
                and cybersecurity. His goal is to continuously
                learn, improve and gain practical experience
                through projects and internship opportunities.
              </Typography>

              <Typography
                id={styles.professionalRoleLinks}
                className={styles.links}
              >
                <Link
                  href="https://github.com/sidhartha091027"
                  target="_blank"
                >
                  GitHub
                </Link>
                {' · '}
                <Link
                  href="https://www.linkedin.com/in/sidhartha-kumar-sahoo-8329b73b0"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </Typography>

            </CardContent>
          </Card>

          {/* Academic Background */}

          <Card
            id={styles.academicCard}
            className={styles.card}
          >
            <CardContent>

              <Typography
                id={styles.academicTitle}
                variant="h6"
                className={styles.cardTitle}
              >
                Academic Background
              </Typography>

              <Typography
                id={styles.academicText}
                className={styles.cardText}
              >
                Sidhartha is pursuing studies in Information
                Science and Telecommunication with growing
                interest in AI, machine learning, software
                engineering and modern computing technologies.
                His learning combines academic knowledge with
                hands-on technical practice.
              </Typography>

            </CardContent>
          </Card>

          {/* Personal Values */}

          <Card
            id={styles.familyCard}
            className={styles.card}
          >
            <CardContent>

              <Typography
                id={styles.familyTitle}
                variant="h6"
                className={styles.cardTitle}
              >
                Values & Learning Mindset
              </Typography>

              <Typography
                id={styles.familyText1}
                className={styles.cardText}
              >
                Sidhartha believes in continuous learning,
                practical development and self-improvement.
                Curiosity and discipline motivate his journey
                toward becoming a stronger technology
                professional.
              </Typography>

              <Typography
                id={styles.familyText2}
                className={styles.cardText}
              >
                He values creativity, teamwork and problem
                solving while building skills that can support
                future career growth in AI, development and
                cybersecurity.
              </Typography>

            </CardContent>
          </Card>

        </Box>
      </Box>
    </>
  );
}

export default About;