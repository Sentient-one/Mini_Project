document.addEventListener('DOMContentLoaded', function() {
    // Sticky navigation
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            nav.style.background = 'white';
        }
    });

    // Smooth scrolling for sidebar links
    document.querySelectorAll('.sidebar-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
            
            // Update active link
            document.querySelectorAll('.sidebar-menu li').forEach(item => {
                item.classList.remove('active');
            });
            this.parentElement.classList.add('active');
        });
    });

    // Donation button click handler
    document.querySelectorAll('.donate-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your interest in donating! This would redirect to a donation form.');
        });
    });

    // Edit recurring donation handler
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', function() {
            alert('You can modify your recurring donation amount or frequency here.');
        });
    });

    // Pause recurring donation handler
    document.querySelectorAll('.pause-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'Pause') {
                this.textContent = 'Resume';
                this.style.background = '#3498db';
                this.style.color = 'white';
                alert('Your recurring donation has been paused.');
            } else {
                this.textContent = 'Pause';
                this.style.background = '#f1c40f';
                this.style.color = '#2c3e50';
                alert('Your recurring donation has been resumed.');
            }
        });
    });

    // Make donation CTA button
    document.querySelector('.cta-button').addEventListener('click', function() {
        alert('This would redirect to the donation page.');
    });

    // Support button
    document.querySelector('.support-btn').addEventListener('click', function() {
        alert('This would open a support ticket form or chat.');
    });

    // Mobile menu toggle (for future implementation)
    // This would be implemented for mobile responsive design
});