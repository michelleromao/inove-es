// Cria a conexao com o banco de dados
const db = require("../db/db") // Localiza o arquivo do banco
const DB = db.Connection() // Chama a funçao de conexao

//Adiciona um Parceiro a tabela parceiro
//|===========================| Adiciona |===========================|
exports.AddParceiro = function (nome,email){

    //Verifica se já existe um parceiro com o mesmo nome
    let SQL = "SELECT * FROM parceiro WHERE nome = ?";
    DB.query(SQL,[nome],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            //Caso Não exista, ele adiciona normamente
            if(result.length == 0){
                DB.query("INSERT INTO parceiro (nome,email) VALUES (?,?)",[nome,email])
                console.log("Parceiro Adicionado Com Sucesso");
            //Caso exista, ela manda uma menssagem avisando que já existe um parceiro com o mesmo nome
            }else{
                console.log("Parceiro Já Existe");
            }
        }
    })
}
//Seleciona tudo sobre todos os Parceiros da tabela parceiros
//|===========================| Buscar Todos |===========================|
exports.SelectAll = function (){
    let SQL = "SELECT * FROM parceiro"

    DB.query(SQL,(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log(result);
        }    
    });
}
//Atualiza um parceiro pelo id dele
//|===========================| Atualizar Pelo ID |===========================|
exports.Update = function (id,nome,email,){
    let SQL = "UPDATE parceiro SET nome = ?, email = ? WHERE idParceiro = ?"
    DB.query(SQL,[nome,email,id],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log("Parceiro Atualizado Com Sucesso");
        }
    });
}
//Remove um parceiro pelo id dele
//|===========================| Remover Pelo ID |===========================|
exports.Delete = function (id){
    let SQL = "DELETE FROM parceiro WHERE idParceiro = ?"
    DB.query(SQL,[id],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log("Parceiro Deletado Com Sucesso");
        }
    });
}