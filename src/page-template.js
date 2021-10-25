/*
Define a super function that will be responsible for generating the html based on the selections the user chose during initialization
Dynamically generate certain sections (specifically the cards) to ensure that should any one specific class be chosen, the html will reflect such a decision
*/

function generateHtml (data) {
    // Once again establish a blank array in which the entirety of the html will be stored after all the needed number of cards have been formed
    let htmlArr = [];

    // Start with the basic header information that sets up bootstrap and font awesome
    // This is primarily done as the header information is primarily independent of user choice
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

        <section class="container row">`;

    // We push the contents of the header into the blank array first so as not to conflict with any additional html elements that are about to be created
    htmlArr.push(header);

    // Establish a for loop that will begin the process of generating the card information based in the decisions and inputs from the user
    for (i = 0; i < data.length; i++){
        // We start with the basic information that is shared across all employee subclasses (name, id, and email)
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

        // We then establish an if condition that looks to see if any particular index data contains an office number
        // As managers are the only ones with office numbers, this will add the provided information as the last piece of the manager card
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
        // We then establish an additional condition in which we look to see if any particular index data contains a github username
        // As engineers are the only ones with github usernames, this will add the provided information as the last piece for the engineer card
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
        // The last condition to be established is the one that looks to see if any particular index data contains school information
        // As interns are the only ones with school information, this will add the provided information as the last piece for the intern card
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

        // At the conclusion of the for loop and all desired subclasses have been added, we push each card information into the blank array containing the header information
        htmlArr.push(employeeCard)
    };

    // The last information to be added to the array is the footer section that simply adds the tail of the html to finalize our document
    let footer = 
        `</section>
    </body>
    </html>
    `;
    htmlArr.push(footer);

    // We then return the information from the array joined to form our one singular html
    return htmlArr.join("");
}

// Export this function to be called upon as needed from other documents
module.exports = generateHtml;