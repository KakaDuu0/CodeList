var ulCode = document.getElementById("code");
var ulName = document.getElementById("name");
var ulNameR = document.getElementById("resultsName");
var ulCodeR = document.getElementById("resultsCode");

var nume = ["Apa Minerala 0.5L", "Apa Minerala 1.5L",           "Apa Minerala 2L",        "Apa Minerala 2.5L",  "Apa Plata 0.5L", 
            "Apa Plata 1.5L",    "Apa Plata 6L",                "Apa cu Aroma 1.5L",      "Suc Doza",           "Suc cu Pai",
            "Suc Flacon 0.5L",   "Suc Flacon 1.25L",            "Suc Flacon 2L",          "Suc Flacon 2.5L",    "Suc Flacon 3L", 
            "Bere Doza",         "Bere Sticla",                 "Bere fara Alcool",       "Bere Flacon 0.5L",   "Bere Flacon 1L", 
            "Bere Flacon 1.5L",  "Bere Flacon 2L",              "Bere Flacon 2.5L",       "Paine",              "Pesmet", 
            "Patiserie",         "Paste Finoase",               "Faina",                  "Malai",              "Zahar", 
            "Ulei",              "Fasole",                      "Cacao",                  "Condimente",         "Conservanti", 
            "Cafea",             "Ciocolata",                   "Cornuri",                "Chips",              "Caramele", 
            "Dulciuri",          "Delicat",                     "Coffetta",               "Nuca de cocos",      "Sare", 
            "Bomboane",          "Acadele",                     "Biscuiti",               "Biscuiti Vrac",      "Baton lapte",
            "Fulgi Porumb",      "Budinca",                     "Gem",                    "Guma",               "Glucoza", 
            "Halva",             "Inghetata",                   "Fructe",                 "Legume",             "Congelate", 
            "Compot",            "Esenta",                      "Lavete",                 "Otet",               "Orez", 
            "Mezeluri",          "Mate de Porc",                "Mazare",                 "Miere",              "Musama", 
            "Macaroane Vrac",    "Napolitane",                  "Napolitane Vrac",        "Energizante",        "Otrava", 
            "Butelii",           "Pasta Tomate",                "Pate de Ficat",          "Ceai",               "Ceai Doza", 
            "Ceai Flacon",       "Papetarie",                   "Elastice",               "Perie Frecat",       "Perie Dinti", 
            "Pasta Dinti",       "Adidasi",                     "Piese Bicicleta",        "Lipici",             "Plastice",
            "Pufuleti",          "Prezervative",                "Produse Drogherii",      "Prelungitor",        "Rechizite Scolare", 
            "Pungi Alimentare",  "Saci Menaj",                  "Cesti Cafea",            "Pahare",             "Sampon", 
            "Gel de Dus",        "Sapun",                       "Solutie pentru Curatat", "Detergent vase",     "Detergent rufe", 
            "Sosete",            "Servetele Umede",             "Detatrant",              "Seminte",            "Scutece", 
            "Lactate",           "Tocana de Legume",            "Tigari",                 "Ketchup",            "Maioneza", 
            "Mustar",            "Jucarii",                     "Alcool Sanitar",         "Farfurii",           "Set Cadou", 
            "Deodorant WC",      "Bureti",                      "Baterii",                "Becuri",             "Balsam Rufe", 
            "Balsam Par",        "Brichete",                    "Chibrite",               "Ceas",               "Bautura Alcoolica",
            "Ciorapi",           "Chiloti Femei",               "Chiloti Barbati",        "Chiloti Copii",      "Maieu Femei", 
            "Maieu Barbati",     "Maieu Copii",                 "Trening",                "Papuci",             "Pijama Femei",
            "Pijama Barbati",    "Pijama Copii",                "Tacamuri",               "CD & DVD",           "Incarcari Electronice", 
            "Crema Maini",       "Crema Pantofi",               "Crema Ras",              "Crema Gulas",        "Conserve Carne", 
            "Conserve Peste",    "Conserve Porumb",             "Conserve Fasole",        "Ciuperci",           "Acrituri Borcan", 
            "Intrerupator",      "Lanterne",                    "Lacate",                 "Ulei pentru Ungere", "Hartie Igienica", 
            "Role Bucatarie",    "Conserve Carne pentru Caini", "Vopsea Ulei"]


for(var i=1; i<=163; i++)
{
    var liCode = document.createElement("li");
    var liName = document.createElement("li");
    liName.appendChild(document.createTextNode(nume[i-1]));
    ulName.appendChild(liName);
    liCode.appendChild(document.createTextNode(i));
    ulCode.appendChild(liCode);
}

var input = document.getElementById('input');

function clear(ulName, ulCode)
{
    while (ulName.firstChild) {
        ulName.removeChild(ulName.firstChild);
        ulCode.removeChild(ulCode.firstChild);
    }
}

input.addEventListener('keyup', function(){
    var value = document.getElementById('input').value;
    var results = [];
    if(value.length >= 3) {
        for(var j=0; j<nume.length; j++)
        {
            var obj = {name: nume[j], code: j+1}
            if(nume[j].toLowerCase().includes(value)) {
                clear(ulNameR, ulCodeR);
                results.push(obj);
            } else {
                clear(ulNameR, ulCodeR);
            }
        }
        if(results.length == 0)
            results.push({name: "Niciun Rezultat!", code: "-"})
    } else {
        results=[];
        clear(ulNameR, ulCodeR);
    }
    for(var j=0; j<results.length; j++) {
        var liName = document.createElement("li");
        var liCode = document.createElement("li");
        liName.appendChild(document.createTextNode(results[j].name));
        liCode.appendChild(document.createTextNode(results[j].code));
        ulNameR.appendChild(liName);
        ulCodeR.appendChild(liCode);
    }
})


