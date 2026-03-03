<div align="center">

## Express Hello World Server

Simple Node.js + Express "Hello World" server.

</div>

<p align="center">
  <a href="https://create-a-basic-express-server.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Preview-Create%20Basic%20Express%20Server-red?style=for-the-badge" />
  </a>
</p>

### Tech Stack
- **Runtime**: Node.js
- **Framework**: Express

### Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Run the server**

```bash
npm start
```

3. **Open in browser**

- Visit `http://localhost:3000`
- You should see: **Hello World**

### Project Structure

- `server.js` – main Express server (routes and server startup)
- `package.json` – project metadata, dependencies, and scripts

### Available Scripts

- **`npm start`**: starts the Express server on port `3000`

### Notes

- The server handles `/` and a special `/favicon.ico` route to avoid extra 404 logs.
- Update the `PORT` in `server.js` if you need a different port.
