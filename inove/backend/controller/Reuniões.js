// Cria a conexao com o banco de dados
const db = require("../db/db") // Localiza o arquivo do banco
const DB = db.Connection() // Chama a funçao de conexao

//Adiciona uma Reuniao na tabela de Reunieos
//|===========================| Adiciona |===========================|
exports.AddReunião = function (titulo,link,status){

    //Verifica se já existe uma Reuniao na mesma data
    let SQL = "SELECT * FROM reuniao WHERE titulo = ?";
    DB.query(SQL,[titulo],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            //Caso Não exista, ele adiciona normamente
            if(result.length == 0){
                DB.query("INSERT INTO reuniao (titulo,link,status) VALUES (?,?,?)",[titulo,link,status])
                console.log("Reuniao Adicionado Com Sucesso");
            //Caso exista, ela manda uma menssagem avisando que já existe uma Reuniao com o mesmo nome
            }else{
                console.log("Reuniao Já Existe");
            }
        }
    })
}
//Seleciona tudo sobre todas as Reunioes da tabela Reuniao
//|===========================| Buscar Todos |===========================|
exports.SelectAll = function (){
    let SQL = "SELECT * FROM reuniao"

    DB.query(SQL,(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log(result);
        }    
    });
}
//Atualiza uma Reuniao pelo id dela
//|===========================| Atualizar Todos |===========================|
exports.Update = function (id,titulo,link,status){
    let SQL = "UPDATE reuniao SET titulo = ?, link = ?, status = ? WHERE idReunião = ?"
    DB.query(SQL,[titulo,link,status,id],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log("Reunião Atualizada Com Sucesso");
        }
    });
}
//Remove uma Reuniao pelo id dela
//|===========================| Remover Todos |===========================|
exports.Delete = function (id){
    let SQL = "DELETE FROM reuniao WHERE idReunião = ?"
    DB.query(SQL,[id],(err,result) => {
        if(err != null){
            console.log("Erro : " + err);
        }else{
            console.log("Reunião Deletada Com Sucesso");
        }
    });
}