import React, { useState } from 'react';
import styles from './ShoeForm.module.css';

const ShoeForm = ({ addShoe }) => {
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        size: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addShoe({ ...formData, id: crypto.randomUUID() });
        setFormData({
            brand: '',
            model: '',
            size: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
            Brand:
            <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className={styles.input}
            />
            </label>
            <label>
            Model:
            <input
                type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className={styles.input}
            />
            </label>
            <label>
            Size:
            <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className={styles.input}
            />
            </label>
            <button type="submit" className={styles.button}>Add Shoe</button>
        </form>
    );
};

export default ShoeForm;
