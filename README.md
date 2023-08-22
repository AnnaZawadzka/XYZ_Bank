# Project Bank XYZ

This repository contains end-to-end tests for the XYZ Bank application using the Cypress framework.

## Technologies Used

- **Node.js**: Provides the runtime environment for executing JavaScript outside of a browser.
- **Cypress**: An end-to-end testing framework designed for modern web applications.
- **Docker**: The Docker image provided by Cypress ensures a consistent testing environment.
- **GitHub Actions**: Enables continuous integration by running tests automatically on push to the main branch.

## Installation & Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/AnnaZawadzka/XYZ_Bank
    cd XYZ_BANK
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

## Testing

### Running Cypress tests interactively:

```bash
npm run cypress:open
```
### Or run in headless mode:
```
cypress run
```

## GitHub Actions

In this project, we utilize GitHub Actions to automatically run Cypress tests every time code is pushed to the master branch. This ensures that any changes to the codebase maintain the application's integrity. You can check the test status in the "Actions" tab of the GitHub repository.
