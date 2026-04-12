<div align="center">

<br/>

```
 ██████╗██╗  ██╗ █████╗ ████████╗    █████╗ ██████╗ ██████╗ 
██╔════╝██║  ██║██╔══██╗╚══██╔══╝   ██╔══██╗██╔══██╗██╔══██╗
██║     ███████║███████║   ██║      ███████║██████╔╝██████╔╝
██║     ██╔══██║██╔══██║   ██║      ██╔══██║██╔═══╝ ██╔═══╝ 
╚██████╗██║  ██║██║  ██║   ██║      ██║  ██║██║     ██║     
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝      ╚═╝  ╚═╝╚═╝     ╚═╝     
```

### *Real-time chat. Beautifully fast. Thoughtfully built.*

<br/>

[![Made with Love](https://img.shields.io/badge/Made%20with-❤️-ff6b6b?style=for-the-badge)](https://github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-22d3ee?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-a78bfa?style=for-the-badge)](CONTRIBUTING.md)
[![Status](https://img.shields.io/badge/Status-Active-4ade80?style=for-the-badge)]()

<br/>

</div>

---

## 📌 Overview

**Charchalu** is a production-ready, full-stack real-time chat application built with the MERN stack. It features custom JWT-based authentication, live presence indicators, typing sounds, image sharing, welcome emails, and a sleek responsive UI — all without relying on third-party auth providers.

> ✨ Built as a deep dive into real-time systems, API design, and modern full-stack architecture.

---

## ⚡ Features at a Glance

| Feature | Description |
|---|---|
| 🔐 **Custom JWT Auth** | Fully hand-rolled authentication — no Firebase, no Auth0 |
| ⚡ **Real-time Messaging** | Instant bi-directional communication via Socket.io |
| 🟢 **Presence Indicators** | Live online/offline status for every user |
| 🔔 **Sound Notifications** | Notification & typing sounds with a toggle switch |
| 📨 **Welcome Emails** | Automated onboarding emails via Resend on signup |
| 🗂️ **Image Uploads** | Cloud image storage and delivery via Cloudinary |
| 🚦 **Rate Limiting** | API protection powered by Arcjet |
| 🎨 **Beautiful UI** | Responsive, accessible UI with Tailwind CSS & DaisyUI |
| 🧠 **State Management** | Lightweight and efficient global state via Zustand |
| 🧑‍💻 **Git Workflow** | Structured branching, PRs, and merge strategy |

---

## 🛠️ Tech Stack

<div align="center">

### Frontend

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Zustand](https://img.shields.io/badge/Zustand-433E38?style=for-the-badge&logo=react&logoColor=white)](https://zustand-demo.pmnd.rs/)

### Backend

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)](https://socket.io/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

### Services & DevOps

[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=minutemailer&logoColor=white)](https://resend.com/)
[![Arcjet](https://img.shields.io/badge/Arcjet-FF4500?style=for-the-badge&logo=shield&logoColor=white)](https://arcjet.com/)
[![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/)

</div>

---

## 🗂️ Project Structure

```
chatapp/
├── 📁 client/                  # React + Vite frontend
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable UI components
│   │   ├── 📁 pages/           # Route-level page components
│   │   ├── 📁 store/           # Zustand state stores
│   │   ├── 📁 hooks/           # Custom React hooks
│   │   ├── 📁 lib/             # Axios instance, utils
│   │   └── 📁 assets/          # Sounds, icons, images
│   └── 📄 vite.config.js
│
├── 📁 server/                  # Node.js + Express backend
│   ├── 📁 controllers/         # Route handler logic
│   ├── 📁 models/              # Mongoose schemas
│   ├── 📁 routes/              # Express route definitions
│   ├── 📁 middleware/          # Auth, rate-limit, error handlers
│   ├── 📁 lib/                 # Socket.io, Cloudinary, Resend setup
│   └── 📄 index.js             # Server entry point
│
├── 📄 .env.example             # Environment variable template
└── 📄 README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** `v18+`
- **npm** or **yarn**
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/chatapp.git
cd chatapp
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env
```

Fill in your `.env` file:

```env
# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Resend (Email)
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=hello@yourdomain.com

# Arcjet (Rate Limiting)
ARCJET_KEY=your_arcjet_key
```

### 3. Install Dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 4. Run the App

```bash
# In /server
npm run dev

# In /client (new terminal)
npm run dev
```

> 🌐 Frontend runs on `http://localhost:5173`  
> 🔌 Backend runs on `http://localhost:5000`

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                   React Client (Vite)                │
│         Zustand Store │ Socket.io Client             │
└────────────┬──────────────────────┬─────────────────┘
             │ REST API             │ WebSocket
             ▼                      ▼
┌─────────────────────────────────────────────────────┐
│               Express.js Server                      │
│  Auth MW │ Rate Limiter (Arcjet) │ Error Handler     │
│                                                      │
│   /api/auth    /api/users    /api/messages           │
└───────┬───────────────────────────────┬─────────────┘
        │                               │
        ▼                               ▼
┌──────────────┐              ┌──────────────────────┐
│   MongoDB    │              │  External Services   │
│  (Mongoose)  │              │  Cloudinary │ Resend │
└──────────────┘              └──────────────────────┘
```

---

## 🔐 Authentication Flow

```
User Signup ──► Validate Input ──► Hash Password (bcrypt)
     │
     ▼
Save to MongoDB ──► Send Welcome Email (Resend) ──► Issue JWT
     │
     ▼
JWT stored in HTTP-only cookie ──► Protected routes validated via middleware
```

---

## 🔄 Real-time Messaging Flow

```
Sender types message
     │
     ▼
Socket.io emits "sendMessage" event
     │
     ▼
Server broadcasts to room / recipient
     │
     ▼
Receiver's client picks up event ──► UI updates instantly
     │
     ▼
Message persisted to MongoDB (async)
```

---

## 📡 API Reference

### Auth Routes — `/api/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `POST` | `/signup` | Register a new user | ❌ |
| `POST` | `/login` | Log in and receive JWT | ❌ |
| `POST` | `/logout` | Clear auth cookie | ✅ |
| `GET` | `/me` | Get current user profile | ✅ |

### User Routes — `/api/users`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/` | Get all users (sidebar) | ✅ |
| `PUT` | `/profile` | Update profile + avatar | ✅ |

### Message Routes — `/api/messages`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|:---:|
| `GET` | `/:userId` | Get chat history with a user | ✅ |
| `POST` | `/send/:userId` | Send a text/image message | ✅ |

---

## 🧠 State Management (Zustand)

```js
// Example: useAuthStore
const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  checkAuth: async () => { ... },
  login: async (data) => { ... },
  logout: async () => { ... },
}));
```

Stores are split by concern:
- `useAuthStore` — auth state & user session
- `useChatStore` — messages, selected user, socket events
- `useUIStore` — theme, sound toggle, notification prefs

---

## 🌿 Git Workflow

```
main
 └── develop
      ├── feature/auth-system
      ├── feature/realtime-socket
      ├── feature/image-upload
      └── feature/rate-limiting
```

- `main` → production-ready code only
- `develop` → integration branch
- `feature/*` → individual feature branches
- All merges happen via **Pull Requests** with meaningful descriptions

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

```bash
# Fork the repo, then:
git checkout -b feature/your-feature-name
git commit -m "feat: add your feature"
git push origin feature/your-feature-name
# Open a PR against 'develop'
```

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) spec for commit messages.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

Made with ☕ + 💻 by **[Shanmukh](https://github.com/yourusername)**

⭐ *Star this repo if you found it helpful!*

</div>
