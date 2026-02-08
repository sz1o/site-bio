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
