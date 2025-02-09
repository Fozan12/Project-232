const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files

app.post('/save', (req, res) => {
    const { fileName, fileContent } = req.body;
    const filePath = path.join(__dirname, `${fileName}.txt`);

    fs.writeFile(filePath, fileContent, (err) => {
        if (err) return res.status(500).send("Failed to save file.");

        // Read back the file content
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) return res.status(500).send("Failed to read file.");
            res.send(`File "${fileName}.txt" created with content: \n\n${data}`);
        });
    });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
