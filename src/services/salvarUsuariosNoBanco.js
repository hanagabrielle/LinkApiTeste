import dadosUsuarios from "./unirDadosUsuarios.service";
import users from "../models/users.model"

class salvarUsuarios{
    async salvandoUsuarios(){
        const buscaUsuarios = await dadosUsuarios.buscandoUsuarios();
        const retorno = [];
        for(let iterador of buscaUsuarios){
            const splitStreetNumber = iterador.address[0].address.split(',');
            const novoObjUsuario = {
                fullName: iterador.fullName,
                email: iterador.email,
                address: splitStreetNumber[0],
                addressNumber: splitStreetNumber[1],
                phoneNumber: iterador.contacts[0].phoneNumber
            }
            try {
                const usuario = await users.findOne({email: novoObjUsuario.email});
                if(!usuario){
                    await users.create(novoObjUsuario)
                    console.log({ message: 'Pessoa inserida no sistema com sucesso!', novoObjUsuario })
                    retorno.push(({ message: 'Pessoa inserida no sistema com sucesso!', novoObjUsuario })) 
                }else{
                    console.log({message: "Pessoa já existe no banco!", usuario})
                    retorno.push({message: "Pessoa já existe no banco!", usuario})
                }
              } catch (error) {
                console.log({ erro: error })
              }
        }
        return retorno;
    }
}
export default new salvarUsuarios();
