# Personal Developer Portfolio - Bhavana Reddy

A premium, fully responsive, space-themed developer portfolio website designed for **Chinnaobaiahgari Bhavana Reddy**.

## ✨ Features
- **Centralized Configuration**: All details (name, bio, projects, goals, strengths, social URLs) are loaded dynamically from a single configuration file `portfolio-data.js`. No need to touch HTML!
- **Interactive Space Canvas**: Smooth, performant canvas-based floating star particle animation running in the background.
- **Glassmorphism Design**: Sleek dark mode visual aesthetic with blurred transparent cards, smooth gradients, and vibrant accent colors.
- **Responsive Layout**: Designed for all device screens (Desktop, Tablet, Mobile) with a mobile navigation drawer toggle.
- **Dynamic Contact Form**: Works instantly out of the box using [FormSubmit.co](https://formsubmit.co)'s AJAX API, delivering submissions directly to your email (`bhavanareddy2328@gmail.com`).

---

## 📁 File Structure
```text
portfolio/
│
├── index.html          # Main page layout & SEO metadata structure
├── styles.css          # Core CSS variables, typography, layout & animations
├── script.js           # Starfield canvas animation, sticky nav, drawer toggle, and render logic
├── portfolio-data.js   # CENTRAL DATA STORE - Edit this file to update details!
│
├── assets/
│   └── profile.jpeg    # Your portfolio profile picture
│
└── README.md           # Instructions on how to manage and customize
```

---

## 🔧 How to Customize

### 1. Update Personal & Professional Info
Open [portfolio-data.js](file:///c:/Users/bhava/OneDrive/Desktop/portfolio/portfolio-data.js) in your text editor. It contains structured JavaScript objects representing the sections of your website. You can edit any value in quotes (`""`) to update details:
- **`personal`**: Change your name, subtitle, email, and social links (GitHub, LinkedIn).
- **`about`**: Edit the bio paragraphs.
- **`skills`**: Add, remove, or modify skills in the categorized lists.
- **`goals`**: List your career goals (using emojis for bullet styling).
- **`strengths`**: List your core strengths.
- **`projects`**: Add new projects with a title, description, tech stack, source code link, and demo URL.

### 2. Replace Your Profile Photo
Simply replace the file `assets/profile.jpeg` with your new photo. Ensure the file name matches exactly, or update the `profileImage` path inside `portfolio-data.js`.

### 3. Add Your Resume
1. Upload your resume (PDF format) to Google Drive.
2. Ensure the link sharing permissions are set to "Anyone with the link can view".
3. Copy the link and paste it into the `resumeLink` field in `portfolio-data.js`:
   ```javascript
   resumeLink: "https://drive.google.com/file/d/.../view?usp=sharing"
   ```

---

## 🚀 How to Host/Deploy (GitHub Pages)

Since this is a static website, you can host it for free on **GitHub Pages**:
1. Create a repository on GitHub named `portfolio`.
2. Push all the files inside this directory to your new repository.
3. On GitHub, go to your repository **Settings** -> **Pages**.
4. Under **Build and deployment**, set the source to **Deploy from a branch**.
5. Select the `main` or `master` branch and the `/ (root)` folder, then click **Save**.
6. After a few minutes, your portfolio will be live at `https://Bhavana-1228.github.io/portfolio/`!
