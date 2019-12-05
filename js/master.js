window.onload = function (){
    this.fetch("./json/apps.json")
    .then(function(response){
        if(response.status == 200){
            response.json()
            .then(function(apps){
                apps.forEach(function(app) {
                    createTile(app);
                });
            });
        } else {
            alert("Ocorreu um erro na leitura do arquivo");
        }
    })
    .catch(function (err){
        this.alert(err);
    });
};

function createTile(app){
    var tile = document.createElement("div");
    tile.className = "tile";

    //TODO: Criar container para tiles.
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(tile);
}