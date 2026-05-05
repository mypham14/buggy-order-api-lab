const app = require('./app');

// BUG #5: Port is hardcoded and there's no fallback from environment variable
const PORT = 3000;

// BUG #6: No graceful shutdown handling
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
