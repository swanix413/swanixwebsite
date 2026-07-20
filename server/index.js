const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'swanixbranddevelopment@gmail.com',
    pass: process.env.EMAIL_PASS || ''
  }
});

const submissions = [];

app.post('/api/business-inquiry', (req, res) => {
  const { businessName, contactPerson, email, phone, industry, website, services, goals, about, budget, contactMethod } = req.body;
  submissions.push({ type: 'business', ...req.body, date: new Date().toISOString() });
  console.log('Business Inquiry:', req.body);
  res.json({ success: true, message: 'Business inquiry submitted successfully!' });
});

app.post('/api/student-registration', (req, res) => {
  const { fullName, email, phone, college, branch, year, city, linkedin, interests, careerGoals } = req.body;
  submissions.push({ type: 'student', ...req.body, date: new Date().toISOString() });
  console.log('Student Registration:', req.body);
  res.json({ success: true, message: 'Student registration successful!' });
});

app.post('/api/college-partnership', (req, res) => {
  const { collegeName, principal, tpo, email, phone, city, students, programs, requirements } = req.body;
  submissions.push({ type: 'college', ...req.body, date: new Date().toISOString() });
  console.log('College Partnership:', req.body);
  res.json({ success: true, message: 'College partnership request submitted!' });
});

app.post('/api/post-opportunity', (req, res) => {
  const { orgName, contactPerson, email, opportunityType, title, description, eligibility, deadline, registrationLink } = req.body;
  submissions.push({ type: 'opportunity', ...req.body, date: new Date().toISOString() });
  console.log('Opportunity Posted:', req.body);
  res.json({ success: true, message: 'Opportunity posted successfully!' });
});

app.post('/api/book-appointment', (req, res) => {
  const { name, contact, email, date, time } = req.body;
  submissions.push({ type: 'appointment', ...req.body, date: new Date().toISOString() });
  console.log('Appointment Booked:', req.body);
  res.json({ success: true, message: 'Appointment booked successfully!' });
});

app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Swanix server running on port ${PORT}`);
});
