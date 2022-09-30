`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title Here</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="" />
</head>

<body>

    <main>
        <div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 id="managerName" class="card-title">${mgrName}</h5>
                    <h6 id="managerId " class="card-subtitle mb-2 text-muted">${mgrId}</h6>
                    <p class="card-text">Office number: ${officeNumber}</p>
                    <a href="#" class="card-link">${mgrEmail}</a>
                </div>
            </div>
        </div>
        <div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 id="managerName" class="card-title">${engName}</h5>
                    <h6 id="managerId " class="card-subtitle mb-2 text-muted">${engId}</h6>
                    <p class="card-text">Github: ${engGithub}</p>
                    <a href="#" class="card-link">${engEmail}</a>
                </div>
            </div>
        </div>
        <div>
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 id="managerName" class="card-title">${intName}</h5>
                    <h6 id="managerId " class="card-subtitle mb-2 text-muted">${intId}</h6>
                    <p class="card-text">Office number: ${intSchool}</p>
                    <a href="#" class="card-link">${intEmail}</a>
                </div>
            </div>
        </div>
    </main>

</body>

</html>`