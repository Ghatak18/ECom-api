import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Proceed.css'; // Import ProceedPage component-specific CSS for styling
import Header from '../Header/Header';

const ProceedPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', phoneNumber: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, such as sending the data to a server
        console.log('Form submitted:', formData);
        // Clear form fields after submission
        setFormData({ name: '', phoneNumber: '' });
    };

    const handleShopMore = () => {
        // Navigate to the shop page or any other desired page
        navigate("/");
    };

    return (
        <div className="proceed-page-container">
            <Header />
            <div className="proceed-page-content">
                <h2>Thank you for shopping with us!</h2>
                <p>Please leave your details below, we will contact you through this.</p>
                <form onSubmit={handleSubmit} className="details-form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                <button onClick={handleShopMore} className="shop-more-btn">Shop More</button>
            </div>
        </div>
    );
};

export default ProceedPage;
