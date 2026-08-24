# 🎬 Web Movies

A modern React application for browsing and discovering movies powered by The Movie Database (TMDB) API.

## ✨ Features

- **Browse Movies:** Explore top-rated and popular movies.
- **Movie Details:** View detailed information about each movie including synopsis, ratings, and release date.
- **Search:** Find movies by title.
- **Carousel Navigation:** Browse through collections with smooth navigation.
- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Fast Performance:** Built with React and optimized for production.

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** CSS, Bootstrap, React Bootstrap Icons
- **API:** TMDB API v3/v4
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Build Tool:** Create React App with Webpack
- **Package Manager:** npm

## 📋 Prerequisites

- **Node.js:** 20 or newer
- **npm:** 9 or newer
- **TMDB API Credentials**

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone <repository-url>
cd web-movies
npm install
2. Configure API KeyCreate a .env file in the project root with your TMDB API credentials:Option A: Using TMDB v3 API KeyCode snippetREACT_APP_TMDB_API_KEY=your_tmdb_v3_api_key
Option B: Using TMDB v4 Read Access TokenCode snippetREACT_APP_TMDB_READ_ACCESS_TOKEN=your_tmdb_v4_read_access_token
⚠️ Note: The existing credential was revoked and must be replaced with your own from your TMDB account.3. Start Development ServerBashnpm start
The app will open at http://localhost:3000 and hot-reload on code changes.📦 Available ScriptsCommandDescriptionnpm startRuns development server on http://localhost:3000npm run buildCreates optimized production build in /buildnpm testLaunches interactive test runner in watch modenpm run ejectEjects Create React App configuration (irreversible)📁 Project StructurePlaintextsrc/
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
🌐 API IntegrationThe app integrates with the TMDB API to fetch:Top-rated moviesPopular moviesNew releasesMovie details and metadataSearch results🔧 ConfigurationEnvironment VariablesCreate a .env file with one of the following:Code snippet# Required: TMDB API Credentials (choose one)
REACT_APP_TMDB_API_KEY=your_key_here

# or
REACT_APP_TMDB_READ_ACCESS_TOKEN=your_token_here
📱 Browser SupportChrome (latest)Firefox (latest)Safari (latest)Edge (latest)🚢 DeploymentBuild for ProductionBashnpm run build
This creates an optimized, minified production build in the /build directory with hashed filenames.Deploy to Heroku / NetlifyThe project includes a Procfile for Heroku deployment:Bashgit push heroku main
Note: Ensure your REACT_APP_TMDB_API_KEY or REACT_APP_TMDB_READ_ACCESS_TOKEN is set as a environment/config variable in your deployment platform.📝 Important NotesRestart the development server after modifying .env files.Ensure your TMDB API credentials have the necessary permissions.API rate limits apply; check official TMDB documentation for limits.📜 LicenseThis project was bootstrapped with Create React App.
