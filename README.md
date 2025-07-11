# Lexisg-frontend-intern-test

A simple legal assistant interface (Lexi-style) that allows users to:

- Ask a legal question
- Get an AI-generated answer
- View citations with clickable links
- Open a mock PDF modal with highlighted legal reference

Built using **React.js** and **Tailwind CSS**, simulating a real legal assistant like Lexi.

---

##  Features

###  Query Input
- Users can type a legal query into a chat-style input bar.
- Includes a **loading state animation** on submission.

###  AI Answer Simulation
- Displays a legal answer based on a mock response.
- UI mimics a chatbot (like ChatGPT).

###  Citation Linking
- Citations appear under the answer with clickable text.
- Clicking a citation **opens a modal** with mock PDF content.
- **"Para 7" is highlighted** inside the PDF modal to simulate scroll-to-highlight behavior.

---

##  Tech Stack

- **React.js** (with Next.js App Router)
- **Tailwind CSS** for UI styling
- No real backend — API simulated with `setTimeout`
- Modal and PDF highlight implemented manually

---

## 🚀 How to Run

# Clone the repo
git clone https://github.com/yourusername/lexisg-frontend-intern-test.git
cd lexisg-frontend-intern-test

# Install dependencies
npm install

# Run the dev server
npm run dev
