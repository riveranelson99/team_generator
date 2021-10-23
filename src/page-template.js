function generateHtml (data) {
    let html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data[0].name}</title>
    </head>
    <body>
        <header>
            <h1>${data[1].email}</h1>
        </header>
    </body>
    </html>`

    return html;
}

module.exports = generateHtml;