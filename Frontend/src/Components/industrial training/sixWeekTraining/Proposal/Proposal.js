import React, { useState } from 'react';
import styles from './Proposal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const Proposal = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        projectDetails: '',
        countryCode: '+91', // Default country code
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form Submitted:', formData);
        alert('Thank you for your proposal request!');
    };

    return (
        <div className={styles.proposalContainer}>
            <div className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <h2 className={styles.heroTitle}>
                        We are excited to be a part of your Next <span className={styles.bigProject}>Big Project!</span>
                    </h2>
                    <p className={styles.heroDescription}>
                        Your big dreams deserve the right strategy. Fill out the form, pick a time that works for you, and let's connect.
                    </p>

                    <div className={styles.contactInfo}>
                        <p><FontAwesomeIcon icon={faPhone} className={styles.icon} /> +91 760 40 5025 <span className={styles.flag}>🇮🇳</span></p>
                        <p><FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> contact@dianapps.com</p>
                    </div>
                </div>

                <div className={styles.formCard}>
                    <form className={styles.proposalForm} onSubmit={handleSubmit}>
                        {/* Floating Label Input Fields */}
                        <div className={styles.formGroup}>
                            <input
                                type="text"
                                id="fullName"
                                className={styles.formInput}
                                placeholder=" "
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="fullName" className={styles.formLabel}>Full Name*</label>
                        </div>

                        <div className={styles.formGroup}>
                            <input
                                type="email"
                                id="email"
                                className={styles.formInput}
                                placeholder=" "
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email" className={styles.formLabel}>Email ID*</label>
                        </div>

                        {/* --- MODIFIED: Simplified Phone Input --- */}
                        <div className={styles.phoneInputContainer}>
                            <span className={styles.countryCodePrefix}>🇮🇳 +91</span>
                            <div className={styles.formGroup} style={{ flexGrow: 1, marginBottom: 0 }}>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    className={styles.formInput}
                                    placeholder=" "
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="contactNumber" className={styles.formLabel}>Contact Number*</label>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <textarea
                                id="projectDetails"
                                className={`${styles.formInput} ${styles.formTextarea}`}
                                placeholder=" "
                                value={formData.projectDetails}
                                onChange={handleChange}
                            ></textarea>
                            <label htmlFor="projectDetails" className={styles.formLabel}>Project Details</label>
                        </div>

                        <div className={styles.formActions}>
                            <label htmlFor="documentUpload" className={styles.attachDocument}>
                                <FontAwesomeIcon icon={faPaperclip} className={styles.attachIcon} /> Attach Document
                                <input type="file" id="documentUpload" style={{ display: 'none' }} />
                            </label>
                            <button type="submit" className={styles.requestProposalButton}>Request Proposal</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* The footer remains the same as the previous version */}
        </div>
    );
};

export default Proposal;