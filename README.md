# OMEX Frontend

A modern web application for code analysis, optimization, and developer productivity. Built with React and Vite, OMEX Frontend offers a suite of tools to beautify code, scan for security issues, generate test cases, and more—all in a clean, user-friendly interface.

## ✨ Features
- **Code Beautifier**: Instantly format and enhance code readability.
- **Security Scanner**: Detect vulnerabilities and improve code safety.
- **Test Case Generator**: Automatically create robust test cases for your code.
- **Code Comparison & Optimization**: Compare code snippets and optimize for performance.
- **Content Summarizer**: Summarize code or documentation for quick understanding.
- **Error Debugger**: Identify and resolve code errors efficiently.
- **Performance Analyzer**: Analyze and improve code performance.
- **Contributor Leaderboard**: Track top contributors and community engagement.
- **FAQ & Feedback**: Comprehensive FAQ and feedback system for users.

## 🛠️ Technology Stack
- **Frontend**: React (Vite)
- **Styling**: Custom CSS (Glassmorphism)
- **Linting**: ESLint
- **Deployment**: Netlify

## 📂 Folder Structure

<details>
<summary>Click to expand</summary>

```
plainText
├── public/                # Static assets
│   ├── bulb.png
│   └── vite.svg
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── BackToTopButton.jsx
│   │   ├── ChatComponent.jsx
│   │   ├── CodeEditor.jsx
│   │   ├── CodeExamples.jsx
│   │   ├── CodeHistory.jsx
│   │   ├── ContributorsLeaderboard.jsx
│   │   ├── Faq.jsx
│   │   ├── FeedbackForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── MediaUploader.jsx
│   │   ├── Nav.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── SummaryDisplay.jsx
│   │   ├── Testimonials.jsx
│   │   ├── TextInput.jsx
│   │   └── YouTubeInput.jsx
│   ├── context/           # Context providers
│   │   └── ThemeContext.jsx
│   ├── pages/             # Application pages
│   │   ├── About.jsx
│   │   ├── CodeBeautifier.jsx
│   │   ├── CodeCompare.jsx
│   │   ├── CodeComplexity.jsx
│   │   ├── CodeGenerator.jsx
│   │   ├── CodeOptimizer.jsx
│   │   ├── CodeTools.jsx
│   │   ├── Contact.jsx
│   │   ├── ContentSummarizer.jsx
│   │   ├── Contribute.jsx
│   │   ├── ContributorGuide.jsx
│   │   ├── ErrorDebugger.jsx
│   │   ├── FAQ.jsx
│   │   ├── Home.jsx
│   │   ├── PerformanceAnalyzer.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── SecurityScanner.jsx
│   │   ├── Team.jsx
│   │   ├── TermsOfService.jsx
│   │   └── TestCaseGenerator.jsx
│   ├── store/             # State management
│   │   └── auth.jsx
│   └── styles/            # Global styles
│       └── glassmorphism.css
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── netlify.toml
├── package-lock.json
├── package.json
└── vite.config.js
```

</details>

## 🚀 Getting Started

Clone the repository:
```bash
git clone https://github.com/Pravehaspa/OMEX_FRONT.git
```

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

## 🤝 Contribution Guidelines
- Fork the repository and create your branch from `main`.
- Follow the existing code style and structure.
- Submit a pull request with a clear description of your changes.

## 📜 License
This project is licensed under the **MIT License**.

---

💡 **Inspiration**: Built to empower developers with smarter tools for productivity and cleaner code.
