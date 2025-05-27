// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded - main.js executing");
    
    try {
        // Initialize GSAP
        console.log("Setting up preloader");
        
        // Preloader
        const preloader = document.querySelector('.preloader');
        console.log("Preloader element found:", preloader !== null);
        
        const body = document.querySelector('body');
        console.log("Body element found:", body !== null);
        
        // Hide preloader after 2 seconds
        setTimeout(() => {
            console.log("Hiding preloader");
            if (preloader) {
                preloader.style.opacity = 0;
                preloader.style.display = 'none';
            }
            if (body) {
                body.style.overflow = 'visible';
            }
            initAnimations();
        }, 2000);
        
        // Custom cursor
        console.log("Setting up custom cursor");
        const cursor = document.querySelector('.custom-cursor');
        console.log("Custom cursor element found:", cursor !== null);
        
        if (window.innerWidth > 768 && cursor) {
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
            
            const interactiveElements = document.querySelectorAll('a, button, .timeline-item, .skill-node, .contact-card');
            console.log("Interactive elements found:", interactiveElements.length);
            
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('hover');
                });
                
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('hover');
                });
            });
        } else if (cursor) {
            cursor.style.display = 'none';
        }
        
        // Header scroll effect
        console.log("Setting up header scroll effect");
        const header = document.querySelector('.header');
        console.log("Header element found:", header !== null);
        
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
        
        // Mobile menu toggle
        console.log("Setting up mobile menu");
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        console.log("Mobile menu button found:", mobileMenuBtn !== null);
        console.log("Mobile menu element found:", mobileMenu !== null);
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('active');
                
                if (mobileMenu.classList.contains('active')) {
                    mobileMenuBtn.innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#ECF0F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `;
                } else {
                    mobileMenuBtn.innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="#ECF0F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `;
                }
            });
        }
        
        // Close mobile menu when clicking on a link
        console.log("Setting up mobile menu links");
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
        console.log("Mobile menu links found:", mobileMenuLinks.length);
        
        if (mobileMenuLinks.length > 0 && mobileMenu && mobileMenuBtn) {
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="#ECF0F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `;
                });
            });
        }
        
        // Experience timeline interaction
        console.log("Setting up experience timeline");
        const timelineItems = document.querySelectorAll('.timeline-item');
        const jobDetails = document.querySelectorAll('.job-detail');
        console.log("Timeline items found:", timelineItems.length);
        console.log("Job details found:", jobDetails.length);
        
        if (timelineItems.length > 0 && jobDetails.length > 0) {
            timelineItems.forEach(item => {
                item.addEventListener('click', () => {
                    const jobId = item.getAttribute('data-job');
                    console.log("Timeline item clicked, job ID:", jobId);
                    
                    // Update active timeline item
                    timelineItems.forEach(i => i.classList.remove('active'));
                    item.classList.add('active');
                    
                    // Show corresponding job detail
                    jobDetails.forEach(detail => {
                        if (detail.id === jobId) {
                            detail.classList.add('active');
                        } else {
                            detail.classList.remove('active');
                        }
                    });
                });
            });
        }
        
        // Skills category switching
        console.log("Setting up skills categories");
        const categoryBtns = document.querySelectorAll('.category-btn');
        const skillsLists = document.querySelectorAll('.skills-list');
        const skillsCategoryTitle = document.querySelector('.skills-category-title');
        console.log("Category buttons found:", categoryBtns.length);
        console.log("Skills lists found:", skillsLists.length);
        console.log("Skills category title found:", skillsCategoryTitle !== null);
        
        // Skills data for constellation visualization
        const skillsData = {
            technical: [
                { name: 'Prompt Engineering', level: 99 },
                { name: 'Generative AI', level: 99 },
                { name: 'Python', level: 70 },
                { name: 'C++', level: 70 },
                { name: 'Machine Learning', level: 65 }
            ],
            healthcare: [
                { name: 'HIPAA Compliance', level: 100 },
                { name: 'Medical Scribing', level: 95 },
                { name: 'SOAP Documentation', level: 95 },
                { name: 'EHR/EMR Systems', level: 90 },
                { name: 'Revenue Cycle Management', level: 80 }
            ],
            management: [
                { name: 'Operations Management', level: 99 },
                { name: 'Team Leadership', level: 95 },
                { name: 'Process Automation', level: 90 },
                { name: 'Training & Development', level: 85 },
                { name: 'Strategic Planning', level: 80 }
            ]
        };
        
        // Generate constellation visualization
        function generateConstellation(category) {
            console.log("Generating constellation for category:", category);
            const skills = skillsData[category];
            const svgElement = document.querySelector('.constellation');
            const nodesContainer = document.querySelector('.skill-nodes');
            console.log("SVG element found:", svgElement !== null);
            console.log("Nodes container found:", nodesContainer !== null);
            
            if (!svgElement || !nodesContainer) {
                console.error("Missing constellation elements");
                return;
            }
            
            // Clear previous constellation
            svgElement.innerHTML = '';
            nodesContainer.innerHTML = '';
            
            // Generate coordinates for nodes
            const coords = [];
            const centerX = 250;
            const centerY = 250;
            const radius = 180;
            
            skills.forEach((skill, index) => {
                const angle = (index / skills.length) * Math.PI * 2;
                // Adjust radius based on skill level
                const adjustedRadius = radius * (0.5 + (skill.level / 200));
                const x = centerX + Math.cos(angle) * adjustedRadius;
                const y = centerY + Math.sin(angle) * adjustedRadius;
                
                coords.push({
                    ...skill,
                    x,
                    y,
                    size: 10 + (skill.level / 10)
                });
            });
            
            // Draw connecting lines
            coords.forEach((coord, i) => {
                coords.forEach((otherCoord, j) => {
                    // Only connect some nodes to avoid too many lines
                    if (i < j && (i + j) % 3 === 0) {
                        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                        line.setAttribute('x1', coord.x);
                        line.setAttribute('y1', coord.y);
                        line.setAttribute('x2', otherCoord.x);
                        line.setAttribute('y2', otherCoord.y);
                        line.setAttribute('stroke', 'rgba(91, 192, 190, 0.2)');
                        line.setAttribute('stroke-width', '1');
                        line.classList.add('skill-line');
                        svgElement.appendChild(line);
                    }
                });
            });
            
            // Create skill nodes
            coords.forEach((coord, index) => {
                const node = document.createElement('div');
                node.classList.add('skill-node');
                node.style.left = `${coord.x}px`;
                node.style.top = `${coord.y}px`;
                node.style.width = `${coord.size}px`;
                node.style.height = `${coord.size}px`;
                node.style.backgroundColor = `rgba(91, 192, 190, ${coord.level / 100})`;
                
                const tooltip = document.createElement('span');
                tooltip.classList.add('skill-tooltip');
                tooltip.textContent = `${coord.name} - ${coord.level}%`;
                node.appendChild(tooltip);
                
                nodesContainer.appendChild(node);
            });
        }
        
        // Initialize with technical skills
        if (document.querySelector('.constellation') && document.querySelector('.skill-nodes')) {
            console.log("Initializing technical skills constellation");
            generateConstellation('technical');
        }
        
        if (categoryBtns.length > 0 && skillsLists.length > 0 && skillsCategoryTitle) {
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const category = btn.getAttribute('data-category');
                    console.log("Category button clicked:", category);
                    
                    // Update active button
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // Update skills list visibility
                    skillsLists.forEach(list => {
                        if (list.id === `${category}-skills`) {
                            list.classList.remove('hidden');
                        } else {
                            list.classList.add('hidden');
                        }
                    });
                    
                    // Update category title
                    skillsCategoryTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Skills`;
                    
                    // Generate new constellation
                    generateConstellation(category);
                    
                    // Animate skill progress bars
                    const progressBars = document.querySelectorAll(`#${category}-skills .skill-progress`);
                    console.log("Progress bars found:", progressBars.length);
                    progressBars.forEach(bar => {
                        bar.style.transform = 'scaleX(1)';
                    });
                });
            });
        }
        
        // Contact section functionality
        console.log("Setting up contact cards");
        const contactCards = document.querySelectorAll('.contact-card');
        console.log("Contact cards found:", contactCards.length);
        
        if (contactCards.length > 0) {
            contactCards.forEach(card => {
                card.addEventListener('click', () => {
                    const type = card.querySelector('h3').textContent.toLowerCase();
                    console.log("Contact card clicked:", type);
                    
                    switch (type) {
                        case 'email':
                            window.location.href = 'mailto:saqib.sherwani@example.com';
                            break;
                        case 'phone':
                            window.location.href = 'tel:+919876543210';
                            break;
                        case 'linkedin':
                            window.open('https://www.linkedin.com/in/saqibsherwani/', '_blank');
                            break;
                        case 'location':
                            window.open('https://maps.google.com/?q=South+Delhi,+Delhi,+India', '_blank');
                            break;
                    }
                });
            });
        }
        
        // Resume download functionality
        console.log("Setting up resume download");
        const downloadBtn = document.querySelector('.download-resume-btn');
        console.log("Download button found:", downloadBtn !== null);
        
        if (downloadBtn) {
            downloadBtn.addEventListener('click', (e) => {
                console.log("Download button clicked");
                // Prevent default to ensure our custom handling works
                e.preventDefault();
                
                // Create a link to the resume file
                const link = document.createElement('a');
                link.href = 'Saqib_Sherwani_Resume.pdf';
                link.download = 'Saqib_Sherwani_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        }
        
        // Set current year in footer
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    } catch (error) {
        console.error("Error in main script execution:", error);
    }
});

// Initialize animations after preloader
function initAnimations() {
    console.log("Initializing animations");
    try {
        // Hero section animations
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelect
(Content truncated due to size limit. Use line ranges to read in chunks)