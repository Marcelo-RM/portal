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

    //CABECALHO
    var tileTop = document.createElement("div");
    tileTop.className = "tileTop";

    //TITULO
    var title = document.createElement("div");
    title.className = "tileTitle";
    title.innerText = app.header;

    //SUBTITULO
    var subTitle = document.createElement("div");
    subTitle.className = "tileSubTitle";
    subTitle.innerText = app.subHeader;

    //CONTEUDO
    var tileContent = document.createElement("div");
    tileContent.className = "tileContent";

    //ICONE
    var icon = document.createElement("i");
    icon.className = app.icon + " tileImage";

    //RODAPE
    var tileFooter = document.createElement("div");
    tileFooter.className = "tileFooter";
    tileFooter.innerText = app.type;

    // ADICIONANDO ITENS AO CABECALHO DA TILE
    tileTop.appendChild(title);
    tileTop.appendChild(subTitle);

    // ADICIONANDO ITENS AO CENTEUDO DA TILE
    tileContent.appendChild(icon);

    // ADICIONANDO TODOS OS ITENS À TILE
    tile.appendChild(tileTop);
    tile.appendChild(tileContent);
    tile.appendChild(tileFooter);

    //TODO: Criar container para tiles.
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(tile);
}