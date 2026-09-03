# SpendWise Dashboard Shell

## Project Overview

SpendWise is a responsive finance dashboard shell designed to provide users with a clear visual overview of their monthly spending and savings.

The project focuses on creating a professional dashboard layout using **HTML and CSS**, with CSS Grid and Flexbox used to organize the interface.

## Features

* Responsive dashboard layout
* Sidebar navigation menu
* Dashboard header with user profile
* Expense overview section
* Six spending categories:

  * Food
  * Transport
  * Rent
  * Entertainment
  * Savings
  * Utilities
* Progress bars for spending categories
* Hover and keyboard focus micro-interactions
* Responsive layout for screens below 768px
* Dark theme support using CSS custom properties
* Google Fonts integration using Inter

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* Media Queries
* Google Fonts

## Project Structure

```text
SpendWise/
│
├── index.html
├── style.css
└── README.md
```

## Layout

The dashboard uses **CSS Grid** for the main page structure.

The layout contains:

1. Sidebar
2. Main content area
3. Header
4. Expense overview
5. Category cards

Flexbox is used inside the sidebar, header, navigation items, and category cards.

## Responsive Design

The dashboard becomes a single-column layout on screens smaller than **768px**.

A CSS media query is used:

```css
@media (max-width: 767px) {
    .dashboard {
        grid-template-columns: 1fr;
    }

    .category-grid {
        grid-template-columns: 1fr;
    }
}
```

The layout can be tested using Chrome DevTools Device Toolbar.

## Micro-Interactions

The category cards include a subtle hover and keyboard focus animation.

```css
.category-card {
    transition: transform 200ms ease, box-shadow 200ms ease;
}

.category-card:hover,
.category-card:focus {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.12);
}
```

The animation lasts **200ms**, keeping it below the required 250ms limit.

## Theme Variables

The project uses CSS custom properties to control the main theme colors.

```css
:root {
    --brand-color: #2563eb;
    --accent-color: #14b8a6;
    --surface-color: #ffffff;
    --background-color: #f5f7fb;
    --primary-text: #1e293b;
    --secondary-text: #64748b;
}
```

A dark theme can also be applied using:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --brand-color: #60a5fa;
        --accent-color: #2dd4bf;
        --surface-color: #1e293b;
        --background-color: #0f172a;
        --primary-text: #f8fafc;
        --secondary-text: #94a3b8;
    }
}
```

## Purpose

The purpose of this project is to demonstrate practical use of **CSS Grid, Flexbox, responsive design, CSS variables, and interactive styling** while creating a realistic finance dashboard interface.

## Conclusion

SpendWise provides a clean and responsive dashboard shell that can later be connected to real financial data and JavaScript functionality.
