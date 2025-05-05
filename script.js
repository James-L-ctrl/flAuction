// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Get tab ID from data attribute
            const tabId = button.getAttribute('data-tab');
            
            // Hide all panels
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Show selected panel
            const selectedPanel = document.getElementById(tabId);
            if (selectedPanel) {
                selectedPanel.classList.add('active');
            }
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // List Item Form Functionality
    const listForm = document.querySelector('.list-form');
    if (listForm) {
        // Image Preview
        const mainImage = document.getElementById('main-image');
        const previewImage = document.getElementById('preview-image');

        mainImage.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        // Thumbnail Previews
        const thumbnails = document.querySelectorAll('.thumbnail-preview input[type="file"]');
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('change', function() {
                const file = this.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        const preview = this.closest('.thumbnail-preview').querySelector('img');
                        preview.src = e.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        });

        // Form Submission
        listForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // TODO: Add form submission logic here
            // For now, just show a success message
            alert('Item listed successfully!');
            this.reset();
        });
    }
});