import React, { useState, useEffect } from 'react';
import FeatherIcon from 'feather-icons-react';

const ArrowButton = () => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Check if user has scrolled down enough to show the button
            if (window.scrollY > 100) {
                setOpacity(1);
            } else {
                setOpacity(0);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className="backto-top"
            onClick={scrollToTop}
            style={{ opacity, transition: 'opacity 0.3s ease' }} // Apply transition for smooth opacity change
        >
            <div>
                <FeatherIcon icon="arrow-up" />
            </div>
        </div>
    );
};

export default ArrowButton;
