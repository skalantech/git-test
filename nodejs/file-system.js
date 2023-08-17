const fs = require('fs');

// Read the contents of thefile.txt
fs.readFile('thefile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Print the contents to the console
    console.log('File contents:');
    console.log(data);
});
