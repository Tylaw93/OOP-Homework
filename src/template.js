let cards = ""

function constructHtml(data) {
    for(i=0; i<data.length; i++){
    Name = data[i].name;
    Title = data[i].title;
    ID = data[i].ID;
    OfficeNum = data[i].officeNumber;
    Git = data[i].github;
    School = data[i].school;
    Email = data[i].email

    switch (data[i].title) {
        case "Manager":
        cards = cards.concat(`<div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h4 class="card-title text white">${Name}</h4>
            <h5 class="card-text text-white">${Title}</h5>
        </div>
            <ul class="list-group list-group-flush">
          <li class="list-group-item"> ID: ${ID}</li>
          <li class="list-group-item"> Office Number:${OfficeNum}</li>
          
        </ul>
        <div class="card-body">
          <a href=mailto:${Email} class="card-link"> Email: ${Email}</a>
        </div>
    </div>`);
        break;


    case "Engineer":
        cards = cards.concat(`<div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h4 class="card-title text white">${Name}</h4>
            <h5 class="card-text text-white">${Title}</h5>
        </div>
            <ul class="list-group list-group-flush">
          <li class="list-group-item"> ID: ${ID}</li>
          
        </ul>
        <div class="card-body">
          <a href=mailto:${Email} class="card-link">Email: ${Email}</a>
          <a href="https://github.com/${Git}" class="card-link">GitHub</a>
        </div>
    </div>`);
        
        break;


    case "Intern":
        cards = cards.concat(`<div class="card" style="width: 18rem;">
        <div class="card-body bg-primary">
            <h4 class="card-title text white">${Name}</h4>
            <h5 class="card-text text-white">${Title}</h5>
        </div>
            <ul class="list-group list-group-flush">
          <li class="list-group-item"> ID: ${ID}</li>
          
        </ul>
        <div class="card-body">
          <a href=mailto:${Email} class="card-link"> Email: ${Email}</a>
          <br>School: ${School}<br></br>        
          </div>
    </div>`);
        
    }
}       
     
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
        <title>Group Cards</title>
    </head>
    <body>
      <div class="jumbotron bg-secondary">
      <h1 class="display-4 text-center">Team Members</h1>
    </div>
    <div class ="container">
    <div class="row justify-content-around">
        ${cards}   
    </div>   
    </div>    
          
    </body>
    </html>
            `;
        }
module.exports = constructHtml;