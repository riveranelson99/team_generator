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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    <body>
    
        <header>
            <Section class="row">
                <h1 class="col-12 text-center bg-danger py-5 display-4 text-white">My Team</h1>
            </Section>
        </header>
        `;

    htmlArr.push(header);

    for (i = 0; i < data.length; i++){
        let employeeCard =
        `
        <section class="col-4">
            <div class="card mx-5 border-dark mb-4">
                <section class="card-header text-center bg-primary">
                    <p class="h4 text-white">${data[i].name}</p>
                    <p class="${data[i].role} h4 text-white">${data[i].role}</p>
                </section>

                <section id="table">
                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <th scope="row">ID: ${data[i].id}</th>
                            </tr>
                            <tr>
                                <th scope="row">Email: <a target="_blank" href="mailto:${data[i].email}">${data[i].email}</a></th>
                            </tr>`;

        if (data[i].officeNumber) {
            employeeCard += 
        `
                            <tr>
                                <th scope="row">Office Number: ${data[i].officeNumber}</th>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </section>
        `;
        } else if (data[i].github) {
            employeeCard += 
        `
                            <tr>
                                <th scope="row">GitHub: <a target="_blank" href="https://github.com/${data[i].github}">${data[i].github}</a></th>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </section>
        `;
        } else if (data[i].school) {
            employeeCard += 
        `
                            <tr>
                                <th scope="row">School: ${data[i].school}</th>
                            </tr>
                        </tbody>
                    </table>
                </section>
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