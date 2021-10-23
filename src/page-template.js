// For each role selected in the array, dynamically generate a card for the selected roles
// This is to avoid cards being generated in a random manner

function generateHtml (data) {
    let htmlArr = [];

    let header = 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>

        <header>
            <h1></h1>
        </header>
        `;

    htmlArr.push(header);

    for (i = 0; i < data.length; i++){
        let employeeCard =
        `
        <section>
            <div>
                <p>${data[i].name}</p>
                <p>${data[i].id}</p>
                <p>${data[i].email}</p>`;

        if (data[i].officeNumber) {
            employeeCard += 
        `
                <p>${data[i].officeNumber}</p>
            </div>
        </section>
        `;
        } else if (data[i].github) {
            employeeCard += 
        `
                <p>${data[i].github}</p>
            </div>
        </section>
        `;
        } else if (data[i].school) {
            employeeCard += 
        `
                <p>${data[i].school}</p>
            </div>
        </section>
        `;
        }

        htmlArr.push(employeeCard)
    };

    let footer = 
    `
    </body>
    </html>
    `;
    htmlArr.push(footer);

    return htmlArr.join("");
}

module.exports = generateHtml;