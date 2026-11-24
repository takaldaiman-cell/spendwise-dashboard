# SpendWise — Personal Budget & Expense Manager

## Project Description
SpendWise is an interactive personal budgeting web application built with HTML, CSS, and vanilla JavaScript. Users can switch between dedicated workspace views (**Overview**, **Monthly Budget**, **Add Expense**, and **Expense History**), set a monthly spending limit, log and filter expenses by category, and monitor real-time budget feedback and category breakdowns.

## Technologies Used
* **Frontend:** HTML5, CSS3, Vanilla JavaScript
* **Version Control:** Git & GitHub
* **Hosting & CI/CD:** Netlify

## GitHub Repository Information
* **Repository URL:** [https://github.com](https://github.com)
* **Visibility:** Public
* **Branch:** `main`

## Live Netlify Website URL
* **Live Application:** [https://netlify.app](https://netlify.app)

## Deployment Process Summary
1. **Deployment Readiness:** Checked that `index.html`, `style.css`, and `script.js` were organized in the root folder with relative paths.
2. **GitHub Repository:** Created a public GitHub repository (`spendwise-app`) and uploaded the project files.
3. **Netlify Hosting & Custom Domain:** Connected the GitHub repository to Netlify, deployed the website, and renamed the subdomain to `spendwise-apptracker.netlify.app`.
4. **Continuous Deployment Test:** Edited `index.html` on GitHub and confirmed Netlify automatically updated the live website.
5. **Final Testing:** Tested all buttons, budget calculations, and category filters on the live link.

## Challenges Encountered During Deployment
* **Connecting GitHub for Auto-Deploy:** Initially explored preview mode before linking the GitHub repository directly so every change pushed to `main` deploys automatically.
* **Managing State Across Views:** Used JavaScript arrays, `event.preventDefault()`, and event delegation so forms and delete buttons work smoothly without reloading the page.

## Lessons Learned
* Learned how to publish a local web project to the internet using GitHub and Netlify.
* Understood how continuous deployment automatically updates a live website whenever changes are saved to GitHub.
