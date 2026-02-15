import React, { useState } from "react";
import "./EventRegistration.css";

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    eventType: "",
    experience: "",
    interests: [],
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const eventTypes = [
    "Workshop",
    "Webinar",
    "Hackathon",
    "Meetup",
    "Conference",
  ];
  const experienceLevels = ["Beginner", "Intermediate", "Advanced"];
  const interestOptions = [
    "Web Development",
    "Mobile Development",
    "AI/ML",
    "Cloud Computing",
    "DevOps",
    "Data Science",
    "Cybersecurity",
    "Other",
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.college.trim()) {
      newErrors.college = "College/Organization is required";
    }
    if (!formData.eventType) {
      newErrors.eventType = "Please select an event type";
    }
    if (!formData.experience) {
      newErrors.experience = "Please select your experience level";
    }
    if (formData.interests.length === 0) {
      newErrors.interests = "Please select at least one interest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
    if (errors.interests) {
      setErrors({ ...errors, interests: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          college: "",
          eventType: "",
          experience: "",
          interests: [],
          message: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="event-registration-page">
      {/* Animated Background */}
      <div className="google-background">
        <div className="google-blob blob-1"></div>
        <div className="google-blob blob-2"></div>
        <div className="google-blob blob-3"></div>
        <div className="google-blob blob-4"></div>
      </div>

      {/* Success Message */}
      {isSubmitted && (
        <div className="success-modal">
          <div className="success-card">
            <div className="success-icon">✓</div>
            <h2>Registration Successful!</h2>
            <p>Thank you for registering. Check your email for details.</p>
          </div>
        </div>
      )}

      <div className="registration-container">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-content">
            <h1 className="main-title">
              Join the<span className="gradient-text"> Innovation</span>
            </h1>
            <p className="subtitle">
              Register now and be part of an extraordinary experience with Google
              Developer Group
            </p>
            <div className="floating-icons">
              <div className="icon-float icon-1">💻</div>
              <div className="icon-float icon-2">🚀</div>
              <div className="icon-float icon-3">🎯</div>
              <div className="icon-float icon-4">⚡</div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="registration-form">
            {/* Personal Information */}
            <div className="form-section">
              <h2 className="section-title">Personal Information</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.fullName ? "error" : ""}`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <span className="error-message">{errors.fullName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? "error" : ""}`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${errors.phone ? "error" : ""}`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {errors.phone && (
                    <span className="error-message">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="college" className="form-label">
                    College / Organization
                  </label>
                  <input
                    type="text"
                    id="college"
                    name="college"
                    value={formData.college}
                    onChange={handleInputChange}
                    className={`form-input ${errors.college ? "error" : ""}`}
                    placeholder="Your college or organization"
                  />
                  {errors.college && (
                    <span className="error-message">{errors.college}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="form-section">
              <h2 className="section-title">Event Details</h2>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="eventType" className="form-label">
                    Select Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className={`form-input ${errors.eventType ? "error" : ""}`}
                  >
                    <option value="">Choose an event...</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.eventType && (
                    <span className="error-message">{errors.eventType}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="experience" className="form-label">
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={`form-input ${errors.experience ? "error" : ""}`}
                  >
                    <option value="">Select your level...</option>
                    {experienceLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  {errors.experience && (
                    <span className="error-message">{errors.experience}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="form-section">
              <h2 className="section-title">Your Interests</h2>
              <div className="interests-grid">
                {interestOptions.map((interest) => (
                  <label key={interest} className="interest-checkbox">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                    />
                    <span className="checkbox-label">{interest}</span>
                  </label>
                ))}
              </div>
              {errors.interests && (
                <span className="error-message">{errors.interests}</span>
              )}
            </div>

            {/* Message */}
            <div className="form-section">
              <h2 className="section-title">Additional Message (Optional)</h2>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input textarea"
                  placeholder="Tell us anything else you'd like us to know..."
                  rows="4"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="submit-section">
              <button type="submit" className="submit-button">
                <span className="button-text">Register Now</span>
                <span className="button-icon">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
