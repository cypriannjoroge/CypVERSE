document.addEventListener('DOMContentLoaded', function() {
  // Animate skills on scroll
  const animateOnScroll = () => {
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;

    const skills = document.querySelectorAll('.skills .progress-bar');
    const skillValues = [100, 100, 90, 100, 100, 70]; // Match these with your skill percentages
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate progress bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              skill.style.width = skillValues[index] + '%';
            }, index * 150); // Stagger the animations
          });
          
          // Animate skill items
          const skillItems = document.querySelectorAll('.skills-animation .progress');
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, index * 100);
          });
          
          // Disconnect observer after animation
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(skillsSection);
  };

  // Initialize the animation
  animateOnScroll();
});
