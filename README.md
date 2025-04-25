# ROSY LENS 🥀 🌹 

**Rosy Lens uplifts people who need a boost of happiness and encouragement with a positive affirmation, bible verse, or peaceful lofi song.**

## Table of Contents
- [Prerequisites](#what-youll-need)
- [Installation Instructions](#installation-instructions)
- [Features](#features)
- [Demo](#demo)

# What You'll Need 
Prior to running this project, here are the pre-reqs you'll need. Please make sure you've got these installed on your computer:

* **Node.js:** This runs the app (you'll want version 16 or later)
* **npm** Node Package Manager
* **PostgreSQL** This is where we'll keep all our user's mood data. Make sure it's up and running! Mock data is provided in my db.sql file to get you started ✅
* **Vitest** For running unit tests _(cd into client and use the command **npm test** to run test files)_

# Installation Instructions
Below is a step-by-step to run my project locally ⭐️

## Part One

**Clone my repo**
```bash
git clone https://github.com/courjimen/Rosy-Lens-Final.git
```

**Install dependencies in directories**

1. Cd into client and run the following commands:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

```bash
npm install react-router-dom @mui/material @emotion/react @emotion/styled
```
<br/>

2. Cd into server and run the following command:
```bash
npm install pg cors express nodemon node-fetch && npm init -y
```

3. Return to the root directory and run this command:
```bash
npm init -y && npm install concurrently
```

## Part Two 

**Set up database**

You'll need to use `psql` to create your tables locally. Sign in _(make sure postgres is installed!)_ with the following command:

```bash
psql postgres
```

Next, cd into server and follow the steps in my `db.sql` file. Copy/paste the code into your terminal.

**Insert database credentials** 

Cd into server and open `db.js` and input your database connection details (username, password, etc.) _**use `/conninfo` to find your database credentials if you are unsure**_


**Let's run it**

# Features

# Demo


