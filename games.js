const gameFiles = [
    {
        file: "Half-Life.html",
        title: "Half-Life",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fa/Half-Life_Cover_Art.jpg"
    },
    {
        file: "Steal-A-Brainrot.html",
        title: "Steal A Brainrot",
        image: "https://placehold.co/600x400/111111/FFFFFF?text=Steal+A+Brainrot"
    },
    {
        file: "Riddle-School-3.html",
        title: "Riddle School 3",
        image: "https://static.wikia.nocookie.net/riddleschool/images/7/70/RiddleSchool3.png"
    },
    {
        file: "Riddle-School-2.html",
        title: "Riddle School 2",
        image: "https://static.wikia.nocookie.net/riddleschool/images/4/49/RiddleSchool2.png"
    },
    {
        file: "Riddle-School.html",
        title: "Riddle School",
        image: "https://static.wikia.nocookie.net/riddleschool/images/5/57/RiddleSchool1.png"
    },
    {
        file: "Papa_s-Pizeria.html",
        title: "Papas Pizzeria",
        image: "https://static.wikia.nocookie.net/papaspizzeria/images/0/06/Papa%27s_Pizzeria.jpg"
    },
    {
        file: "Moto-X3M.html",
        title: "Moto X3M",
        image: "https://images.crazygames.com/games/moto-x3m/cover_16x9-1705392838328.png"
    },
    {
        file: "Moto-X3M-2.html",
        title: "Moto X3M 2",
        image: "https://images.crazygames.com/games/moto-x3m-2/cover-1588253578653.png"
    },
    {
        file: "Hotline-Miami.html",
        title: "Hotline Miami",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a0/Hotline_Miami_cover.png"
    },
    {
        file: "Cuphead.html",
        title: "Cuphead",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Cuphead_%28artwork%29.jpg"
    },
    {
        file: "Bloxorz.html",
        title: "Bloxorz",
        image: "https://images.crazygames.com/games/bloxorz/cover-1653298294880.png"
    },
    {
        file: "Buckshot-Roulette.html",
        title: "Buckshot Roulette",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2835570/header.jpg"
    },
    {
        file: "Time-Shooter-2.html",
        title: "Time Shooter 2",
        image: "https://images.crazygames.com/games/time-shooter-2/cover_16x9-1693298929617.png"
    },
    {
        file: "Super-Mario-64.html",
        title: "Super Mario 64",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6a/Super_Mario_64_box_cover.jpg"
    },
    {
        file: "Soundboard.html",
        title: "Soundboard",
        image: "https://placehold.co/600x400/000000/FFFFFF?text=Soundboard"
    },
    {
        file: "Sonic_EXE.html",
        title: "Sonic EXE",
        image: "https://static.wikia.nocookie.net/sonicexe/images/0/03/SonicEXE.jpg"
    },
    {
        file: "Sonic-Mania.html",
        title: "Sonic Mania",
        image: "https://upload.wikimedia.org/wikipedia/en/3/37/Sonic_Mania_cover.jpg"
    },
    {
        file: "Rooftop-Snipers.html",
        title: "Rooftop Snipers",
        image: "https://images.crazygames.com/games/rooftop-snipers/cover-1588256621917.png"
    },
    {
        file: "Gorilla-Tag.html",
        title: "Gorilla Tag",
        image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1533390/header.jpg"
    },
    {
        file: "Bank-Robbery-2.html",
        title: "Bank Robbery 2",
        image: "https://img.gamedistribution.com/9d4f0e4f8c3f4c0cb1f8f9f2b63d6a93-512x512.jpg"
    },
    {
        file: "Basket-Bros.html",
        title: "Basket Bros",
        image: "https://images.crazygames.com/games/basket-bros/cover-1622040328999.png"
    },
    {
        file: "Baldis-Basics-Plus.html",
        title: "Baldis Basics Plus",
        image: "https://static.wikia.nocookie.net/baldisbasics/images/7/73/BaldisBasicsPlus.jpg"
    },
    {
        file: "Granny.html",
        title: "Granny",
        image: "https://upload.wikimedia.org/wikipedia/en/3/38/Granny_game.jpg"
    },
    {
        file: "Gunspin.html",
        title: "Gunspin",
        image: "https://images.crazygames.com/games/gunspin/cover_16x9-1701163965647.png"
    },
    {
        file: "OvO.html",
        title: "OvO",
        image: "https://images.crazygames.com/games/ovo/cover_16x9-1705411493650.png"
    },
    {
        file: "Raldis-Crackhouse.html",
        title: "Raldis Crackhouse",
        image: "https://placehold.co/600x400/111111/FFFFFF?text=Raldis+Crackhouse"
    },
    {
        file: "Undertale-Yellow.html",
        title: "Undertale Yellow",
        image: "https://static.wikia.nocookie.net/undertaleyellow/images/e/e8/UTYKeyArt.png"
    },
    {
        file: "Vex-6.html",
        title: "Vex 6",
        image: "https://images.crazygames.com/games/vex-6/cover-1594823515300.png"
    },
    {
        file: "Web-Fishing.html",
        title: "Web Fishing",
        image: "https://placehold.co/600x400/000000/FFFFFF?text=Web+Fishing"
    },
    {
        file: "Retro-Bowl.html",
        title: "Retro Bowl",
        image: "https://play-lh.googleusercontent.com/V5Jw4m8R4l0"
    },
    {
        file: "Geometry-Dash-Lite.html",
        title: "Geometry Dash Lite",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4d/Logo_of_Geometry_Dash.svg"
    },
    {
        file: "Friday-Night-Funkin.html",
        title: "Friday Night Funkin",
        image: "https://upload.wikimedia.org/wikipedia/en/3/35/Funkin_cover.png"
    },
    {
        file: "FNAF.html",
        title: "Five Nights at Freddys",
        image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Five_Nights_at_Freddy%27s_cover.jpg"
    },
    {
        file: "Slope.html",
        title: "Slope",
        image: "https://images.crazygames.com/games/slope/cover-1588253631004.png"
    },
    {
        file: "Duck-Life.html",
        title: "Duck Life",
        image: "https://images.crazygames.com/duck-life/20230706120320/duck-life-cover?auto=format,compress&q=75&cs=strip"
    },
    {
        file: "Basketball-Stars.html",
        title: "Basketball Stars",
        image: "https://images.crazygames.com/games/basketball-stars/cover-1588253910002.png"
    },
    {
        file: "Bad-Time-Simulator.html",
        title: "Bad Time Simulator",
        image: "https://images.launchbox-app.com/fb0d7f22-b759-4e18-9071-d647dd9f6f0f.png"
    },
    {
        file: "Minecraft.html",
        title: "Minecraft 1.12.2",
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
    },
    {
        file: "Terraria.html",
        title: "Terraria",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1b/Terraria_Steam_artwork.jpg"
    }
];
