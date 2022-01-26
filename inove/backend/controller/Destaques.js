// Cria a conexao com o banco de dados
const db = require("../db/db") // Localiza o arquivo do banco
const DB = db.Connection() // Chama a funçao de conexao

//Adiciona um Projeto Em Destaque a tabela Destaque
//|===========================| Adiciona |===========================|
exports.AddDestaque = function (idProjeto,dataFim){

    DB.query("INSERT INTO destaque (idProjetoDestaque,dataFim) VALUES (?,?)",[idProjeto,dataFim])
    console.log("Destaque Adicionado Com Sucesso");

}
//Seleciona tudo sobre todos os Projetos Em Destaque da tabela Destaque
//|===========================| Buscar Todos |===========================|
exports.SelectAll = function (){
    let SQL = "SELECT * FROM destaque"

    DB.query(SQL,(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log(result);
        }    
    });
}
//Atualiza um Projeto Em Destaque pelo id dele
//|===========================| Atualizar Pelo ID |===========================|
exports.Update = function (id,idProjeto,dataFim,){
    let SQL = "UPDATE destaque SET idProjetoDestaque = ?, dataFim = ? WHERE idDestaque = ?"
    DB.query(SQL,[idProjeto,dataFim,id],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log("Destaque Atualizado Com Sucesso");
        }
    });
}
//Remove um Projeto Em Destaque pelo id dele
//|===========================| Remover Pelo ID |===========================|
exports.Delete = function (id){
    let SQL = "DELETE FROM destaque WHERE idDestaque = ?"
    DB.query(SQL,[id],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log("Destaque Deletado Com Sucesso");
        }
    });
}