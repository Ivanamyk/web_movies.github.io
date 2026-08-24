web_movies.github.io
🎬 Web Movies
A modern React application for browsing and discovering movies powered by The Movie Database (TMDB) API.

✨ Features
Browse Movies: Explore top-rated and popular movies
Movie Details: View detailed information about each movie including synopsis, ratings, and release date
Search: Find movies by title
Carousel Navigation: Browse through collections with smooth navigation
Responsive Design: Works seamlessly on desktop and mobile devices
Fast Performance: Built with React and optimized for production
🛠️ Tech Stack
Frontend: React 18, TypeScript
Styling: CSS, Bootstrap, React Bootstrap Icons
API: TMDB API v3/v4
Routing: React Router DOM
HTTP Client: Axios
Build Tool: Create React App with Webpack
Package Manager: npm
📋 Prerequisites
Node.js 20 or newer
npm 9 or newer
TMDB API credentials
🚀 Quick Start
1. Clone and Install
git clone <repository-url>
cd web-movies
npm install
2. Configure API Key
Create a .env file in the project root with your TMDB API credentials:

Option A: Using TMDB v3 API Key

REACT_APP_TMDB_API_KEY=your_tmdb_v3_api_key
Option B: Using TMDB v4 Read Access Token

REACT_APP_TMDB_READ_ACCESS_TOKEN=your_tmdb_v4_read_access_token
⚠️ Note: The existing credential was revoked and must be replaced with your own from your TMDB account.

3. Start Development Server
npm start
The app will open at http://localhost:3000 and hot-reload on code changes.

📦 Available Scripts
Command	Description
npm start	Runs development server on http://localhost:3000
npm run build	Creates optimized production build in /build
npm test	Launches test runner in watch mode
npm run eject	Ejects Create React App configuration (irreversible)
📁 Project Structure
src/
├── api/              # API calls and services
│   ├── api.ts       # API configuration
│   └── movies.ts    # Movie-related API functions
├── components/       # Reusable React components
│   ├── Cards/       # Movie card component
│   ├── Layout/      # Layout wrapper with Header, Footer, Main
│   │   └── components/
│   │       ├── Header/
│   │       │   └── NavBar/
│   │       ├── Footer/
│   │       └── Main/
│   └── Paginator/   # Pagination component
├── screens/         # Page components
│   ├── Home/       # Homepage with sliders
│   ├── Details/    # Movie detail page
│   ├── Popular/    # Popular movies
│   ├── NewMovies/  # New movies
│   └── Search/     # Search results
├── types/           # TypeScript type definitions
├── assets/          # Images and static files
├── App.tsx          # Main App component
└── index.tsx        # React entry point
🌐 API Integration
The app integrates with TMDB API to fetch:

Top-rated movies
Popular movies
New releases
Movie details and metadata
Search results
🔧 Configuration
Environment Variables
Create a .env file with:

# Required: TMDB API Credentials (choose one)
REACT_APP_TMDB_API_KEY=your_key_here
# or
REACT_APP_TMDB_READ_ACCESS_TOKEN=your_token_here
📱 Browser Support
Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)
🚢 Deployment
Build for Production
npm run build
This creates an optimized production build in the /build directory.

Deploy to Netlify (included Procfile for Heroku)
The project includes a Procfile for Heroku deployment:

git push heroku main
Ensure your REACT_APP_TMDB_API_KEY or REACT_APP_TMDB_READ_ACCESS_TOKEN is set as a config var in Heroku.

📝 Notes
Restart the development server after modifying .env files
The build is optimized for production performance
Ensure your TMDB API credentials have the necessary permissions
API rate limits apply; check TMDB documentation for limits
📜 License
This project was bootstrapped with Create React App.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.
