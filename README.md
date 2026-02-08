# webfishes projects - Static Website

A modern, smooth black & white static website for GitHub Pages featuring typewriter effects and smooth animations.

## 🎨 Features

- **Typewriter Effect**: Smooth typewriter animation for the main title
- **Profile Picture**: Your cat picture with hover effects and parallax movement
- **Smooth Animations**: CSS-based animations with staggered reveals
- **Responsive Design**: Works on all devices
- **Black & White Theme**: Modern monochrome aesthetic with grain texture
- **Icon Spin**: Telegram and Discord icons spin slowly on hover
- **Dynamic Games Grid**: Automatically populated from game files

## 📁 File Structure

```
your-repo/
├── index.html          # Main landing page
├── classwork.html      # Games page
├── styles.css          # All styles and animations
├── script.js           # Main page JavaScript
├── games.js            # Games page JavaScript
├── profile.jpg         # Your profile picture (ADD THIS)
└── games/              # Game HTML files folder (CREATE THIS)
    ├── Half-Life.html
    ├── Steal-A-Brainrot.html
    ├── Riddle-School-3.html
    ├── Riddle-School-2.html
    ├── Riddle-School.html
    ├── Papa_s-Pizeria.html
    ├── Moto-X3M.html
    ├── Moto-X3M-2.html
    ├── Hotline-Miami.html
    ├── Cuphead.html
    ├── Bloxorz.html
    ├── Buckshot-Roulette.html
    ├── Time-Shooter-2.html
    ├── Super-Mario-64.html
    ├── Soundboard.html
    ├── Sonic_EXE.html
    ├── Sonic-Mania.html
    ├── Rooftop-Snipers.html
    └── Gorilla-Tag.html
```

## 🚀 Setup Instructions

### 1. Add Your Profile Picture
- Save your cat profile picture as `profile.jpg` in the root directory
- The image will automatically be displayed with a circular crop and grayscale filter

### 2. Organize Game Files
- Create a folder named `games` in your repository root
- Move all your game HTML files into the `games` folder
- The games will automatically appear on the classwork page

### 3. Deploy to GitHub Pages
1. Push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Select the branch (usually `main` or `master`)
4. Select root folder as source
5. Save and wait for deployment

### 4. Adding New Games
To add new games to the site:

1. Add the game HTML file to the `games` folder
2. Open `games.js`
3. Add a new entry to the `gameFiles` array:
```javascript
{ file: "Your-Game.html", title: "Your Game Title" }
```

The game will automatically appear on the classwork page!

## ⚙️ Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --bg-color: #000000;        /* Background color */
    --text-color: #ffffff;      /* Text color */
    --accent-color: #ffffff;    /* Accent color */
}
```

### Adjusting Animation Speed
In `script.js`, modify these values:
```javascript
setTimeout(typeWriter, 100);  // Typewriter speed (lower = faster)
setTimeout(typeBio, 20);      // Bio typing speed
```

### Changing Typography
The site uses:
- **Space Mono** for headings and buttons
- **Courier Prime** for body text

To change fonts, update the Google Fonts import in `styles.css`.

## 🎯 Links

- **Telegram**: t.me/webfishh
- **Discord**: discord.gg/jewz

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## ✨ Animation Details

- Profile picture fades in on load
- Title types character by character
- Title lifts up smoothly after completion
- Bio text types out smoothly
- Buttons fade in with smooth transitions
- Game cards stagger their entrance
- Hover effects on all interactive elements
- Icons spin on hover
- Parallax effect on profile picture

## 🔧 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Opera

## 📝 Notes

- All animations use CSS for optimal performance
- JavaScript is used only for typewriter effects and dynamic content
- No external dependencies except Google Fonts
- Optimized for fast loading on GitHub Pages

Enjoy your new website! 🎮
