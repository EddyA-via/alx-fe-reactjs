# GitHub User Search App

A simple React application that allows users to search for GitHub profiles using the GitHub API. Built with Vite, React, and Axios.

## 🚀 Features

- Search GitHub users by username
- View basic user information
- Direct link to user GitHub profiles
- Modern React + Vite setup
- Organized project structure

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- GitHub REST API

## 📁 Project Structure

```
github-user-search/
├── public/
├── src/
│   ├── components/     # Reusable UI components
│   ├── services/       # API logic (Axios calls)
│   ├── App.jsx         # Main application layout
│   └── main.jsx        # React entry point
├── .env                # Environment variables (e.g. GitHub API Key)
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
└── index.html          # Entry HTML file
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/alx-fe-reactjs.git
cd alx-fe-reactjs/github-user-search
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables (Optional)

If you're using a GitHub API key, add it to the `.env` file:

```env
VITE_APP_GITHUB_API_KEY=your_api_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

The app will be available at: [http://localhost:5173](http://localhost:5173)

---

## 🧪 Future Improvements

- Add search results display
- Include user followers, repos, etc.
- Handle loading and error states
- Deploy to Netlify or Vercel

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
