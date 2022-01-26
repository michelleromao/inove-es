// Cria a conexao com o banco de dados
const db = require("../db/db") // Localiza o arquivo do banco
const DB = db.Connection() // Chama a funçao de conexao

//Adiciona um Projeto a tabela projetos
//|===========================| Adiciona |===========================|
exports.AddProjeto = function (nome,descriçao,dataInicio,dataFim){

    //Verifica se já existe um projeto com o mesmo nome
    let SQL = "SELECT * FROM projeto WHERE nome = ?";
    DB.query(SQL,[nome],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            //Caso Não exista, ele adiciona normamente
            if(result.length == 0){
                DB.query("INSERT INTO projeto (nome,descriçao,dataInicio,dataFim) VALUES (?,?,?,?)",[nome,descriçao,dataInicio,dataFim])
                console.log("Adicionado Com Sucesso");
            //Caso exista, ela manda uma menssagem avisando que já existe um projeto com o mesmo nome
            }else{
                console.log("Nome Do Projeto Já Existe");
            }
        }
    })
}
//Seleciona tudo sobre todos os Projetos da tabela projetos
//|===========================| Buscar Todos |===========================|
exports.SelectAll = function (){
    let SQL = "SELECT * FROM projeto"

    DB.query(SQL,(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log(result);
        }    
    });
}
//Atualiza um projeto pelo id dele
//|===========================| Atualizar Todos |===========================|
exports.Update = function (id,nome,descriçao,dataInicio,dataFim){
    let SQL = "UPDATE projeto SET nome = ?, descriçao = ?, dataInicio = ?, dataFim = ? WHERE idProjeto = ?"
    DB.query(SQL,[nome,descriçao,dataInicio,dataFim,id],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log("Atualizado Com Sucesso");
        }
    });
}
//Remove um projeto pelo id dele
//|===========================| Remover Todos |===========================|
exports.Delete = function (id){
    let SQL = "DELETE FROM projeto WHERE idProjeto = ?"
    let SQL_Aux = "DELETE FROM destaque WHERE idProjetoDestaque = ?"
    DB.query(SQL_Aux,[id],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            DB.query(SQL,[id])
            console.log("Deletado Com Sucesso");
        }
    });
}