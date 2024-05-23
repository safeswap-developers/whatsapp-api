const fs = require('fs');
const path = require('path');

// Path to the JSON file you want to update
const jsonFilePath = path.join(__dirname, 'node_modules', '@whiskeysockets', 'baileys', 'lib', 'Defaults', 'baileys-version.json');

// Read the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    process.exit(1);
  }

  try {
    const jsonData = JSON.parse(data);

    // Update the value in the JSON data
    jsonData.version = [2, 2413, 1];

    // Write the updated JSON back to the file
    fs.writeFile(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to the JSON file:', err);
        process.exit(1);
      }
      console.log('JSON file updated successfully.');
    });
  } catch (parseErr) {
    console.error('Error parsing the JSON file:', parseErr);
    process.exit(1);
  }
});
