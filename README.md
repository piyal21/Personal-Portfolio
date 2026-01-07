# Portfolio Website - MD Piyal Ahmmed

A modern, dark-themed personal portfolio website showcasing my work experience, projects, technical skills, and research as a Junior AI Engineer.

## Features

- **Modern Dark Theme Design**: Professional dark UI with smooth animations and transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Single-Page Application**: Smooth scrolling navigation between sections
- **Interactive Elements**: 3D card effects, hover animations, and scroll-triggered animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Pure HTML/CSS/JavaScript with no heavy frameworks

## Sections

1. **Home/Hero**: Introduction with name, title, and social links
2. **About**: Brief overview of background and expertise
3. **Education**: Academic qualifications
4. **Experience**: Working experience and research publications
5. **Projects**: Featured projects with descriptions and links
6. **Skills**: Technical skills organized by categories
7. **Contact**: Multiple ways to get in touch

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons

## Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   ```

2. Navigate to the project directory:
   ```bash
   cd YOUR_REPO_NAME
   ```

3. Open `index.html` in your browser:
   - Double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js http-server
     npx http-server
     ```

4. Visit `http://localhost:8000` in your browser

## Deploying to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right and select "New repository"
   - Name your repository (e.g., `portfolio` or `YOUR_USERNAME.github.io`)
   - Choose "Public"
   - Click "Create repository"

2. **Upload Your Files**:
   - Click "uploading an existing file"
   - Drag and drop all your files (`index.html`, `styles.css`, `script.js`, `README.md`)
   - Commit the files

3. **Enable GitHub Pages**:
   - Go to your repository's "Settings"
   - Scroll down to "Pages" section in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Select branch: `main` (or `master`)
   - Select folder: `/ (root)`
   - Click "Save"

4. **Access Your Website**:
   - Wait 1-2 minutes for GitHub to build your site
   - Your site will be available at: `https://YOUR_USERNAME.github.io/REPO_NAME/`
   - If you named your repo `YOUR_USERNAME.github.io`, it will be at: `https://YOUR_USERNAME.github.io/`

### Method 2: Using Git Command Line

1. **Initialize Git Repository** (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Add portfolio website"
   ```

2. **Create GitHub Repository** and link it:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages** (follow step 3 from Method 1)

### Method 3: Using GitHub CLI

1. **Install GitHub CLI** (if not installed):
   - Visit: https://cli.github.com/

2. **Create and push repository**:
   ```bash
   gh auth login
   gh repo create YOUR_REPO_NAME --public --source=. --remote=origin
   git add .
   git commit -m "Initial commit: Add portfolio website"
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   ```bash
   gh repo edit --enable-pages --pages-branch=main
   ```

## Customization Guide

### Update Personal Information

1. **Contact Information** (`index.html`):
   - Search for email, phone, LinkedIn, and GitHub links
   - Replace with your own information

2. **Content**:
   - Update the About section with your own bio
   - Modify Experience section with your work history
   - Add/remove projects as needed
   - Update skills based on your expertise

### Change Color Scheme

Edit the CSS variables in `styles.css` (lines 2-15):

```css
:root {
    --primary-color: #00E278;      /* Main accent color */
    --secondary-color: #0E5484;    /* Secondary accent */
    --bg-dark: #0a0e27;            /* Main background */
    --bg-darker: #060816;          /* Alternate background */
    --bg-card: #0f1628;            /* Card background */
    /* ... modify other colors as needed */
}
```

### Add New Sections

1. Add HTML section in `index.html`
2. Add corresponding styles in `styles.css`
3. Update navigation menu with new link

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

- Minimized CSS and JavaScript
- Optimized animations for 60fps
- Lazy loading for scroll animations
- No external dependencies except Font Awesome CDN

## Troubleshooting

### Website not updating after push
- Clear browser cache (Ctrl + Shift + R / Cmd + Shift + R)
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check GitHub Actions tab for build status

### Styles not loading
- Ensure file paths are correct (relative paths)
- Check browser console for errors (F12)
- Verify all CSS and JS files are committed

### Mobile menu not working
- Check if JavaScript file is loaded
- Verify Font Awesome CDN is accessible
- Check browser console for JavaScript errors

## License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## Contact

- **Email**: piyalahmmed01@gmail.com
- **LinkedIn**: [MD Piyal Ahmmed](https://www.linkedin.com/in/md-piyal-ahmmed-bb1033205/)
- **GitHub**: [@piyal21](https://github.com/piyal21)

---

Built with ❤️ by MD Piyal Ahmmed
