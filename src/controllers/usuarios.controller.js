import unirDadosUsuariosService from "../services/unirDadosUsuarios.service";
import salvarUsuariosNoBancoService from "../services/salvarUsuariosNoBanco";

class usuariosController{
    async buscar(req, res){
        try{
            const buscaUsuarios =  await unirDadosUsuariosService.buscandoUsuarios();
            console.log('buscaUsuarios: ', buscaUsuarios)
            if(buscaUsuarios.length !== 0){
                res.json(buscaUsuarios);
            }else{
                res.status(400).json('Deu erro ao buscar usuários');
            }
        }catch(error){
            return res.status(500).json({
                mensagem: 'Erro interno de conexão.'
            })
        }
    }
    async salvarUsuarios(req, res){
        try{
            const salvarUsuarios =  await salvarUsuariosNoBancoService.salvandoUsuarios();
            console.log('salvarUsuarios: ', salvarUsuarios)
            if(salvarUsuarios.lenght !== 0){
                res.status(200).json({message: 'Usuários inseridos com sucesso!', salvarUsuarios})
            }
        }catch(error){
            return res.status(500).json({
                mensagem: 'Erro interno de conexão.'
            })
        }
    }
}
export default new usuariosController();