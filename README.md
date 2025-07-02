# Gulp Front-End Project

This is a modern front-end development boilerplate powered by Gulp. It's designed to streamline your workflow with automated tasks for Sass compilation, CSS post-processing, Pug templating, and live browser reloading.

## Features

*   **Sass Compilation**: Compile SCSS files into CSS with error handling.
*   **CSS Post-processing**:
    *   **Autoprefixing**: Automatically add vendor prefixes to CSS rules for broader browser support.
    *   **CSS Minification**: Minify CSS files for production, reducing file sizes.
    *   **CSS Comb**: Format CSS/SCSS files based on a predefined configuration (`.csscomb.json`).
*   **Pug Templating**: Compile Pug (formerly Jade) files into HTML.
*   **Live Reloading**: Instant browser synchronization and live reloading across devices with BrowserSync.
*   **File Watching**: Automatically recompile assets and refresh the browser on file changes.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

*   [Node.js](https://nodejs.org/en/download/) (includes npm)

### Installation

1.  **Clone the repository** (if applicable, otherwise navigate to your project directory):

    ```bash
    # If you have a git repository
    git clone <your-repository-url>
    cd <your-project-folder>
    ```

2.  **Install dependencies**:
    Navigate to the root of your project and install all necessary Node.js packages:

    ```bash
    npm install
    ```

## Available Gulp Commands

This project uses Gulp to automate various development tasks. You can run these commands from your terminal in the project root directory.

*   **`npm run scss`**: Compiles `style.scss` into `style.css` in `assets/css/`, applies autoprefixing and media query packing, and streams changes to BrowserSync.
*   **`npm run min`**: Compiles `style.scss` into a minified `style.min.css` in `assets/css/`, applying autoprefixing, media query packing, and CSS minification.
*   **`npm run watch`**: Starts a development server with BrowserSync, watches for changes in SCSS, HTML, and JavaScript files, and automatically recompiles/reloads the browser. This is the primary command for development.
*   **`npm run comb`**: Formats all SCSS files in `assets/scss/` based on the rules defined in `.csscomb.json`.

## Project Structure

```
.
├── .csscomb.json           # CSScomb configuration for consistent CSS/SCSS formatting
├── README.md               # This file
├── package.json            # Project metadata and dependencies
├── gulpfile.js             # Gulp task definitions
├── index.html              # Main HTML file
├── assets/
│   ├── scss/               # Source SCSS files
│   │   └── style.scss      # Main SCSS file
│   ├── js/                 # JavaScript files
│   │   └── main.js         # Main JavaScript file
│   └── css/                # Compiled CSS files
│       ├── style.css       # Compiled and post-processed CSS
│       └── style.min.css   # Minified CSS (for production)
├── .gitignore              # Specifies intentionally untracked files to ignore
└── .editorconfig           # Editor configuration for consistent coding styles
```

## Technologies Used

*   **Gulp.js**: Task runner for automating development workflows.
*   **Sass**: CSS pre-processor for writing maintainable and scalable stylesheets.
*   **PostCSS**: A tool for transforming CSS with JavaScript plugins, including:
    *   **Autoprefixer**: Automatically adds vendor prefixes.
    *   **css-mqpacker**: Combines and sorts CSS media queries.
    *   **cssnano**: Minifies CSS.
*   **Pug**: High-performance template engine for Node.js and browsers.
*   **BrowserSync**: Synchronized browser testing and live reloading.
*   **gulp-csscomb**: Gulp plugin for CSScomb.
*   **gulp-rename**: Gulp plugin to rename files.
*   **gulp-sass**: Gulp plugin for compiling Sass.
*   **gulp-postcss**: Gulp plugin for PostCSS.
*   **gulp-pug**: Gulp plugin for compiling Pug templates.

---
