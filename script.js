// Typewriter effect
const typewriterText = "webfishes projects";
const typewriterElement = document.getElementById('typewriter');
const bioContainer = document.getElementById('bioContainer');
const buttonsContainer = document.getElementById('buttonsContainer');
const bioTextElement = document.getElementById('bioText');

const bioText = "My name's sage, i'm a 14 year old coder, i work on stuff, like discord and whatever, i sell roblox accounts, i make roblox scripts, and code in my free time. i love games, yea its fun. anyway have a good day/night.!";

let charIndex = 0;
let bioCharIndex = 0;

// Typewriter function
function typeWriter() {
    if (charIndex < typewriterText.length) {
        typewriterElement.textContent += typewriterText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust speed here (milliseconds per character)
    } else {
        // Remove cursor and lift up
        setTimeout(() => {
            typewriterElement.classList.add('typing-complete');
            liftUpTypewriter();
        }, 500);
    }
}

// Lift up typewriter
function liftUpTypewriter() {
    typewriterElement.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    typewriterElement.style.transform = 'translateY(-20px)';
    
    // Show bio after lift
    setTimeout(() => {
        showBio();
    }, 400);
}

// Bio typewriter effect
function showBio() {
    bioContainer.classList.add('show');
    
    function typeBio() {
        if (bioCharIndex < bioText.length) {
            bioTextElement.textContent += bioText.charAt(bioCharIndex);
            bioCharIndex++;
            setTimeout(typeBio, 20); // Faster typing for bio
        } else {
            // Show buttons after bio is complete
            setTimeout(() => {
                showButtons();
            }, 300);
        }
    }
    
    // Small delay before starting bio typing
    setTimeout(typeBio, 200);
}

// Show buttons
function showButtons() {
    buttonsContainer.classList.add('show');
}

// Start typewriter effect after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter();
    }, 1200); // Initial delay before typing starts
});

// Add spinning animation to icons on hover
const telegramBtn = document.getElementById('telegramBtn');
const discordBtn = document.getElementById('discordBtn');

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to profile picture
const profilePic = document.getElementById('profilePic');
if (profilePic) {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        profilePic.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Cashapp Modal functionality
const cashappBtn = document.getElementById('cashappBtn');
const cashappModal = document.getElementById('cashappModal');
const closeModal = document.getElementById('closeModal');

if (cashappBtn && cashappModal) {
    cashappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cashappModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeModal.addEventListener('click', () => {
        cashappModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside
    cashappModal.addEventListener('click', (e) => {
        if (e.target === cashappModal) {
            cashappModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cashappModal.classList.contains('active')) {
            cashappModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Settings Modal functionality
const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeSettings = document.getElementById('closeSettings');

if (settingsBtn && settingsModal) {
    settingsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        settingsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeSettings.addEventListener('click', () => {
        settingsModal.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside
    settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) {
            settingsModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Theme Switching
const savedTheme = localStorage.getItem('siteTheme') || 'default';
document.body.setAttribute('data-theme', savedTheme);

document.querySelectorAll('.theme-btn').forEach(btn => {
    if (btn.dataset.theme === savedTheme) {
        btn.classList.add('active');
    }
    
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('siteTheme', theme);
        
        document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
