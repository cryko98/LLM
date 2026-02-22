# 🦞 Large Lobster Model — $LLM

> Solana memecoin website with Gemini-powered AI Agent + Vibe Coder

---

## Project Structure

```
LLM/
├── public/
│   └── index.html        ← Full website (HTML/CSS/JS)
├── vite.config.js        ← Injects VITE_API_KEY at build time
├── package.json
├── vercel.json           ← Vercel build config
└── .gitignore
```

---

## How the API Key works

```
VITE_API_KEY (set in Vercel dashboard)
        │
        ▼
vite build  →  __VITE_API_KEY__ injected into JS bundle
        │
        ▼
Browser calls Gemini API directly with the key
```

> ⚠️ Note: The API key will be visible in the built JS bundle — this is standard for
> client-side Gemini apps. Google's recommended approach is to restrict the API key
> to specific referrer domains (your Vercel URL) in Google Cloud Console.
> Go to: console.cloud.google.com → APIs → Credentials → your key → "Application restrictions"

---

## Setup: GitHub → Vercel

### Step 1: Upload to GitHub (https://github.com/cryko98/LLM)

**Option A — Browser (no terminal needed):**
1. Go to github.com/cryko98/LLM
2. Click **"Add file"** → **"Upload files"**
3. Upload ALL files maintaining the folder structure:
   - `public/index.html`
   - `vite.config.js`
   - `package.json`
   - `vercel.json`
   - `.gitignore`
   - `README.md`
4. Commit message: `feat: Gemini AI agent + Vibe Coder 🦞`
5. Click **"Commit changes"**

**Option B — Terminal:**
```bash
# Clone your empty repo
git clone https://github.com/cryko98/LLM.git
cd LLM

# Copy all project files here, then:
git add .
git commit -m "feat: Gemini AI agent + Vibe Coder 🦞"
git push origin main
```

---

### Step 2: Get Gemini API Key

1. Go to **aistudio.google.com**
2. Click **"Get API key"** → **"Create API key"**
3. Copy the key (starts with `AIza...`)
4. *(Recommended)* Go to console.cloud.google.com → APIs & Services → Credentials
   → Edit your key → Add HTTP referrer restriction: `https://your-vercel-url.vercel.app/*`

---

### Step 3: Deploy on Vercel

1. Go to **vercel.com** → Log in → **"Add New Project"**
2. Import from GitHub → select **cryko98/LLM**
3. Vercel auto-detects settings from `vercel.json` — don't change anything
4. Before clicking Deploy → go to **"Environment Variables"**:
   - **Name:** `VITE_API_KEY`
   - **Value:** `AIza...` (your Gemini key)
   - Check: ✅ Production ✅ Preview ✅ Development
5. Click **"Deploy"** — ~45 seconds → live! 🦞

---

### Step 4: After deploy — restrict your API key

In Google Cloud Console:
1. APIs & Services → Credentials → your Gemini API key
2. Application restrictions → HTTP referrers
3. Add: `https://YOUR-PROJECT.vercel.app/*`
4. Save — this prevents others from abusing your key

---

## Local development

```bash
npm install

# Create .env.local with your key:
echo "VITE_API_KEY=AIza..." > .env.local

npm run dev
# → http://localhost:5173
```

---

## Models used

| Feature | Model | Why |
|---------|-------|-----|
| Chat Agent | `gemini-2.0-flash` | Fast, real-time responses + Google Search grounding |
| Vibe Coder | `gemini-2.5-pro` | Best code quality, longer context for HTML generation |

---

*🦞 "The lobster deploys. Others merely push to main."*
