const express = require('express');
const app = express();

const PORT = 3090;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    const data = { 
        title: 'Home Page', 
        message: 'Welcome to EJS Example!' 
    };
    res.render('sample', data); // Render the 'sample.ejs' template
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


<!DOCTYPE htm]>
<html>
    <head>
        <title><%= title %></title>
    </head>

    <body>

        <hl><%= messagc %></hl>

        <p>This page is rendered using the <b>EJS</b> templating engine.</p>
    </body>

</html>
