// Game files configuration
const gameFiles = [
    { file: "Half-Life.html", title: "Half-Life" },
    { file: "Steal-A-Brainrot.html", title: "Steal A Brainrot" },
    { file: "Riddle-School-3.html", title: "Riddle School 3" },
    { file: "Riddle-School-2.html", title: "Riddle School 2" },
    { file: "Riddle-School.html", title: "Riddle School" },
    { file: "Papa_s-Pizeria.html", title: "Papas Pizzeria" },
    { file: "Moto-X3M.html", title: "Moto X3M" },
    { file: "Moto-X3M-2.html", title: "Moto X3M 2" },
    { file: "Hotline-Miami.html", title: "Hotline Miami" },
    { file: "Cuphead.html", title: "Cuphead" },
    { file: "Bloxorz.html", title: "Bloxorz" },
    { file: "Buckshot-Roulette.html", title: "Buckshot Roulette" },
    { file: "Time-Shooter-2.html", title: "Time Shooter 2" },
    { file: "Super-Mario-64.html", title: "Super Mario 64" },
    { file: "Soundboard.html", title: "Soundboard" },
    { file: "Sonic_EXE.html", title: "Sonic EXE" },
    { file: "Sonic-Mania.html", title: "Sonic Mania" },
    { file: "Rooftop-Snipers.html", title: "Rooftop Snipers" },
    { file: "Gorilla-Tag.html", title: "Gorilla Tag" },
    { file: "Bank-Robbery-2.html", title: "Bank Robbery 2" },
    { file: "Basket-Bros.html", title: "Basket Bros" },
    { file: "Baldis-Basics-Plus.html", title: "Baldis Basics Plus" },
    { file: "Granny.html", title: "Granny" },
];

// Function to create and add game cards
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    
    gameFiles.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.style.animationDelay = `${(index + 2) * 0.1}s`; // +2 to account for Discord card
        
        gameCard.innerHTML = `
            <h3>${game.title}</h3>
            <p>Click to play</p>
        `;
        
        gameCard.onclick = () => {
            window.location.href = `games/${game.file}`;
        };
        
        gamesGrid.appendChild(gameCard);
    });
}

// Load games when page loads
window.addEventListener('load', loadGames);

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
