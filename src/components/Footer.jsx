import React from 'react';
import { Box, Typography, Link, Tooltip } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SchoolIcon from '@mui/icons-material/School';

import styles from '../styles/Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      className={styles.footer}
      style={{ background: 'rgb(3, 11, 30)' }}
    >
      <Box className={styles.topFooter}>
        <Box className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
        </Box>

        <Box className={styles.socialLinks}>
          <Tooltip title="LinkedIn">
            <Link
              href="https://www.linkedin.com/in/sidhartha-kumar-sahoo-8329b73b0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <LinkedInIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Email">
            <Link
              href="mailto:sahoosidhartha1027@gmail.com"
              className={styles.socialLink}
            >
              <EmailIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Phone / WhatsApp">
            <Link
              href="tel:+916371541129"
              className={styles.socialLink}
            >
              <PhoneIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Instagram">
            <Link
              href="https://www.instagram.com/sidh_ram_09/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <InstagramIcon />
            </Link>
          </Tooltip>

          <Tooltip title="GitHub">
            <Link
              href="https://github.com/sidhartha091027"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <GitHubIcon />
            </Link>
          </Tooltip>

          <Tooltip title="X">
            <Link
              href="https://x.com/your_x_username"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <XIcon />
            </Link>
          </Tooltip>

          <Tooltip title="AI/ML Engineer">
            <Link href="/skills" className={styles.socialLink}>
              <PsychologyIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Student Intern">
            <Link href="/about" className={styles.socialLink}>
              <SchoolIcon />
            </Link>
          </Tooltip>

          <Tooltip title="Odisha, India">
            <Link
              href="https://maps.google.com/?q=Odisha,India"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <LocationOnIcon />
            </Link>
          </Tooltip>
        </Box>
      </Box>

      <Box className={styles.divider}></Box>

      <Typography variant="body2" className={styles.text}>
        © {currentYear} <strong>Sidhartha Kumar Sahoo</strong> · AI/ML Engineer · Student Intern
      </Typography>
    </Box>
  );
}

export default Footer;