import React, { useState } from 'react';
import './Report.css';
import Header from './Header';
import Footer from './Footer';

const Report = () => {
  const [formData, setFormData] = useState({
    incidentType: '',
    description: '',
    date: '',
    location: '',
    evidence: null,
  });
  
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Show loading state or process the form
    console.log(formData);
    // Add form validation and submission logic here
  };

  return (
   
    <main>
       <Header/>
      <section className="report">
        <h2 className="section-title">Submit Incident Report</h2>
        <form className="report-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="incidentType">Incident Type</label>
            <select
              id="incidentType"
              name="incidentType"
              value={formData.incidentType}
              onChange={handleChange}
              required
            >
              <option value="">Select Incident Type</option>
              <option value="physical">Physical Violence</option>
              <option value="sexual">Sexual Violence</option>
              <option value="emotional">Emotional/Psychological Abuse</option>
              <option value="economic">Economic Abuse</option>
              <option value="cyber">Cyber Harassment</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Please provide detailed information about the incident"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date of Incident</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location Level</label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="">Select Location Level</option>
              <option value="home">Home</option>
              <option value="workplace">Workplace</option>
              <option value="public">Public Space</option>
              <option value="educational">Educational Institution</option>
              <option value="online">Online/Digital Space</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="evidence">Upload Evidence (Optional)</label>
            <input
              type="file"
              id="evidence"
              name="evidence"
              onChange={handleChange}
              multiple
              accept="image/*,video/*,.pdf,.doc,.docx"
            />
            <small className="file-hint">Accepted formats: Images, Videos, PDF, DOC files (Max size: 10MB)</small>
          </div>

          <button type="submit" className="cta-button">Submit Report</button>
        </form>
      </section>
      <Footer/>
    </main>
  );
};

export default Report;
