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
    { file: "Baldi_s-Basics-Plus.html", title: "Baldis Basics Plus" },
    { file: "Granny.html", title: "Granny" },
    { file: "Gunspin.html", title: "Gunspin" },
    { file: "OvO.html", title: "OvO" },
    { file: "Raldi_s-Crackhouse.html", title: "Raldis Crackhouse" },
    { file: "Undertale-Yellow.html", title: "Undertale Yellow" },
    { file: "Vex-6.html", title: "Vex 6" },
    { file: "Web-Fishing.html", title: "Web Fishing" },
    { file: "Retro-Bowl.html", title: "Retro Bowl" },
    { file: "Geometry-Dash-Lite.html", title: "Geometry Dash Lite" },
    { file: "Friday-Night-Funkin.html", title: "Friday Night Funkin" },
    { file: "Five-Nights-at-Freddy_s.html", title: "Five Nights at Freddys" },
    { file: "Slope.html", title: "Slope" },
    { file: "Duck-Life.html", title: "Duck Life" },
    { file: "Basketball-Stars.html", title: "Basketball Stars" },
    { file: "Bad-Time-Simulator.html", title: "Bad Time Simulator" },
    { file: "Minecraft-1_12_2.html", title: "Minecraft 1.12.2" },
    { file: "Terraria.html", title: "Terraria" }
];

// Favorites management
let favorites = JSON.parse(localStorage.getItem('gameFavorites')) || [];
let showOnlyFavorites = false;

// Game history management
let gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];

function addToHistory(gameTitle, gameFile) {
    const historyItem = {
        title: gameTitle,
        file: gameFile,
        timestamp: new Date().toISOString()
    };
    
    // Remove if already exists
    gameHistory = gameHistory.filter(item => item.title !== gameTitle);
    
    // Add to beginning
    gameHistory.unshift(historyItem);
    
    // Keep only last 10
    gameHistory = gameHistory.slice(0, 10);
    
    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    
    if (gameHistory.length === 0) {
        historyList.innerHTML = '<p class="history-empty">No games played yet!</p>';
        return;
    }
    
    historyList.innerHTML = gameHistory.map(item => {
        const date = new Date(item.timestamp);
        const timeAgo = getTimeAgo(date);
        
        return `
            <div class="history-item" onclick="window.location.href='games/${item.file}'">
                <div>
                    <div class="history-item-title">${item.title}</div>
                    <div class="history-item-time">${timeAgo}</div>
                </div>
            </div>
        `;
    }).join('');
}

function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
}

// Online counter (simulated)
function updateOnlineCount() {
    const baseCount = 42; // Base number
    const variance = Math.floor(Math.random() * 15); // Random 0-14
    const count = baseCount + variance;
    
    const onlineCountEl = document.getElementById('onlineCount');
    if (onlineCountEl) {
        onlineCountEl.textContent = count;
    }
}

// Update online count every 5 seconds
setInterval(updateOnlineCount, 5000);
updateOnlineCount(); // Initial call


function toggleFavorite(gameTitle, event) {
    event.stopPropagation();
    
    if (favorites.includes(gameTitle)) {
        favorites = favorites.filter(fav => fav !== gameTitle);
    } else {
        favorites.push(gameTitle);
    }
    
    localStorage.setItem('gameFavorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-star').forEach(star => {
        const gameTitle = star.dataset.gameTitle;
        if (favorites.includes(gameTitle)) {
            star.classList.add('favorited');
            star.textContent = '⭐';
        } else {
            star.classList.remove('favorited');
            star.textContent = '☆';
        }
    });
}

// Search functionality
function searchGames(query) {
    const cards = document.querySelectorAll('.game-card:not(.discord-card):not(.random-card)');
    const searchTerm = query.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const matches = title.includes(searchTerm);
        
        if (matches) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Filter favorites
function filterFavorites() {
    const cards = document.querySelectorAll('.game-card:not(.discord-card):not(.random-card)');
    const filterBtn = document.getElementById('favFilter');
    
    showOnlyFavorites = !showOnlyFavorites;
    
    if (showOnlyFavorites) {
        filterBtn.classList.add('active');
        filterBtn.innerHTML = '<span class="star">⭐</span> Show All Games';
        
        cards.forEach(card => {
            const gameTitle = card.querySelector('h3').textContent;
            if (favorites.includes(gameTitle)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    } else {
        filterBtn.classList.remove('active');
        filterBtn.innerHTML = '<span class="star">⭐</span> Show Favorites Only';
        
        cards.forEach(card => {
            card.classList.remove('hidden');
        });
        
        // Re-apply search if active
        const searchBar = document.getElementById('searchBar');
        if (searchBar.value) {
            searchGames(searchBar.value);
        }
    }
}

// Random game
function openRandomGame() {
    const randomIndex = Math.floor(Math.random() * gameFiles.length);
    const randomGame = gameFiles[randomIndex];
    window.location.href = `games/${randomGame.file}`;
}

// Function to create and add game cards
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');
    
    gameFiles.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.style.animationDelay = `${(index + 3) * 0.1}s`; // +3 for Discord and Random cards
        
        const favoriteBtn = document.createElement('button');
        favoriteBtn.className = 'favorite-star';
        favoriteBtn.dataset.gameTitle = game.title;
        favoriteBtn.textContent = favorites.includes(game.title) ? '⭐' : '☆';
        if (favorites.includes(game.title)) {
            favoriteBtn.classList.add('favorited');
        }
        favoriteBtn.onclick = (e) => toggleFavorite(game.title, e);
        
        gameCard.innerHTML = `
            <h3>${game.title}</h3>
            <p>Click to play</p>
        `;
        
        gameCard.insertBefore(favoriteBtn, gameCard.firstChild);
        
        gameCard.onclick = () => {
            addToHistory(game.title, game.file);
            window.location.href = `games/${game.file}`;
        };
        
        gamesGrid.appendChild(gameCard);
    });
    
    updateFavoriteButtons();
}

// Event listeners
window.addEventListener('load', () => {
    loadGames();
    updateHistoryDisplay();
    
    // Search bar
    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', (e) => {
        if (!showOnlyFavorites) {
            searchGames(e.target.value);
        }
    });
    
    // Favorite filter button
    const favFilterBtn = document.getElementById('favFilter');
    favFilterBtn.addEventListener('click', filterFavorites);
    
    // Random game button (in controls)
    const randomBtn = document.getElementById('randomGame');
    randomBtn.addEventListener('click', openRandomGame);
    
    // Random game card
    const randomCard = document.getElementById('randomGameCard');
    randomCard.addEventListener('click', openRandomGame);
    
    // History toggle
    const historyToggle = document.getElementById('historyToggle');
    const gameHistoryPanel = document.getElementById('gameHistory');
    const historyClose = document.getElementById('historyClose');
    
    historyToggle.addEventListener('click', () => {
        gameHistoryPanel.classList.toggle('active');
    });
    
    historyClose.addEventListener('click', () => {
        gameHistoryPanel.classList.remove('active');
    });
    
    // Settings modal
    const settingsBtnGames = document.getElementById('settingsBtnGames');
    const settingsModal = document.getElementById('settingsModal');
    const closeSettings = document.getElementById('closeSettings');
    
    if (settingsBtnGames && settingsModal) {
        settingsBtnGames.addEventListener('click', (e) => {
            e.preventDefault();
            settingsModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeSettings.addEventListener('click', () => {
            settingsModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Theme switching
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
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';
