<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Lista Coduri</title>
</head>
<body>
    <div class="container" id="first">
        <div class="row">
            <div class="col-12">
                <input type="text" placeholder="Cauta" id="input">
                <div class="row">
                    <div class="col-8">
                        <ul id="resultsName"></ul>
                    </div>
                    <div class="col-4">
                        <ul id="resultsCode"></ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container" id="second">
        <div class="row">
            <div class="col-8">
                <ul id="name"></ul>
            </div>
            <div class="col-4">
                <ul id="code"></ul>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
