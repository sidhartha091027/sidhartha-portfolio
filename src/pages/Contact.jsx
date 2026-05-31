import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import styles from '../styles/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:sahoosidhartha1027@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Sidhartha Kumar Sahoo | AI/ML Engineer
        </title>

        <meta
          name="description"
          content="Get in touch with Sidhartha Kumar Sahoo for discussions, collaboration, internships, AI/ML, web development and technology."
        />

        <meta
          name="keywords"
          content="Sidhartha Kumar Sahoo contact, AI ML Engineer, Student Intern, React Developer, Web Development, Cybersecurity, Technology"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sidharthakumarsahoo.com/contact"
        />

        <meta
          property="og:title"
          content="Contact Sidhartha Kumar Sahoo | Portfolio"
        />

        <meta
          property="og:description"
          content="Connect with Sidhartha Kumar Sahoo regarding AI/ML, internships, web development and technology."
        />

        <meta
          property="og:image"
          content="%PUBLIC_URL%/logo192.png"
        />

        {/* Twitter */}
        <meta
          property="twitter:card"
          content="summary_large_image"
        />

        <meta
          property="twitter:url"
          content="https://sidharthakumarsahoo.com/contact"
        />

        <meta
          property="twitter:title"
          content="Contact Sidhartha Kumar Sahoo"
        />

        <meta
          property="twitter:description"
          content="Contact Sidhartha Kumar Sahoo for AI/ML, web development and internship discussions."
        />

        <meta
          property="twitter:image"
          content="%PUBLIC_URL%/logo192.png"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://sidharthakumarsahoo.com/contact"
        />

        {/* Meta */}
        <meta
          name="author"
          content="Sidhartha Kumar Sahoo"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="language"
          content="English"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"ContactPage",
            "name":"Contact Sidhartha Kumar Sahoo",
            "description":"Contact page for Sidhartha Kumar Sahoo - AI/ML Engineer and Student Intern",
            "url":"https://sidharthakumarsahoo.com/contact",
            "author":{
              "@type":"Person",
              "name":"Sidhartha Kumar Sahoo",
              "jobTitle":"AI/ML Engineer and Student Intern",
              "email":"sahoosidhartha1027@gmail.com",
              "url":"https://sidharthakumarsahoo.com"
            },
            "contactPoint":[
              {
                "@type":"ContactPoint",
                "email":"sahoosidhartha1027@gmail.com",
                "contactType":"personal",
                "availableLanguage":"English"
              }
            ]
          }
          `}
        </script>
      </Helmet>

      <Box className={styles.contactContainer}>
        <Typography
          variant="h2"
          className={styles.title}
        >
          Contact Me
        </Typography>

        <Typography className={styles.subtitle}>
          Let’s connect and discuss technology, AI/ML,
          web development and learning opportunities.
        </Typography>

        {/* Contact Details */}
        <Box className={styles.contactInfo}>

          <Typography>
            <EmailIcon fontSize="small" />{' '}
            <strong>Email:</strong>{' '}
            sahoosidhartha1027@gmail.com
          </Typography>

          <Typography>
            <WhatsAppIcon fontSize="small" />{' '}
            <Link
              href="https://wa.me/916371541129"
              target="_blank"
              underline="none"
              aria-label="Contact via WhatsApp"
            >
              WhatsApp
            </Link>
          </Typography>

        </Box>

        {/* Form */}
        <Box className={styles.formWrapper}>
          <form onSubmit={handleSubmit}>

            <TextField
              fullWidth
              label="Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
            />

            <TextField
              fullWidth
              label="Subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className={styles.input}
            />

            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className={styles.input}
            />

            <Button
              type="submit"
              className={styles.submitButton}
            >
              Send Message
            </Button>

          </form>
        </Box>
      </Box>
    </>
  );
}

export default Contact;