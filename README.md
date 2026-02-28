# 🎮 Pile of Shame

### *Frontend repository*

**Backend:** https://github.com/tnjmue/PoS-backend

**Live Demo:** https://pile-of-shame-games.netlify.app/

Icons I used are from here: https://www.flaticon.com/free-icons/pixelated/



## 𖡊 the idea behind the project 

Pile of Shame is a video game logging platform inspired by Goodreads - but make it games!

I also took inspiration (and stole the title) from this (German) YouTube video: https://www.youtube.com/watch?v=XGkXN4L6PlI in which a Gamer who makes journalism-type content laments her count of over 300 unplayed, uninstalled games in her Steam library and what she wants to do about it. She made a whole Excel spreadsheet to help her get an overview of the games she owns and plan out her gaming activity more consciously instead of blindly buying new games on sale. 

Since Excel is not my thing, I thought I'd build something a little more interactive and visually entertaining to essentially do what she sets out to do:
Keep an overview of which games you are playing across platforms and jot down your thoughts about them all in one place without being distracted by other people's thoughts or ratings or GOTY awards or end lists or (potentially misleading) trailers to sway you. 



## ⟳ what it is right now

...a humble draft. You can:

 - make an account that's persistent across sessions
 - browse the sample size database consisting of AI-generated mock data
 - add games to your own library
 - sort games into the stacks "Want to play", "Currently playing", "Played" and "Owned" 
 - add your own star rating, the hours you spent playing the game, on which platform you own/want to play it and your own free-form notes 



## ⌨ built with

- React
- React Router
- Axios
- Vite

---

## ➤ how to get started locally:

### prerequisites
- Node.js installed
- npm or yarn

## installation
1. Clone the repo
```
   git clone https://github.com/tnjmue/PoS-frontend.git
```
2. Navigate to the client folder
```
   cd PoS-frontend/client
```
3. Install dependencies
```
   npm install
```
4. Create a `.env` file in the client folder with:
```
   VITE_BASE_URL="https://pile-of-shame-games.netlify.app"
```
5. Run the development server
```
   npm run dev
```

---

## ✈︎ what's next
- user profile functionalities: delete account, reset password, change username, upload profile picture
- integration with RAWG API for real game data
- enable uploading and saving screenshots via Cloudinary
- smoother and more intuitive UI design
- enable custom tags in addition to the default stacks, such as: cute graphics, great soundtrack etc
- scale for mobile

---


