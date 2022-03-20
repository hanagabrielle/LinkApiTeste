import buscarUsuarios from "./buscarUsuarios";
import buscarEnderecos from "./buscarEnderecos";
import buscarContatos from "./buscarContatos";

class RetornaUsuarios {
    async buscandoUsuarios(){
        const users = await buscarUsuarios.show();

        let array = []

        for await (let iterador of users){
            const buscaEndereco = await buscarEnderecos.show(iterador.id)
            const buscaContato = await buscarContatos.show(iterador.id)

            let novoObjAddress;
            let novoAddress = []
            for await (let endereco of buscaEndereco){
                novoObjAddress = {
                    addressId: endereco.id,
                    address: endereco.street + ',' + endereco.number,
                    country: endereco.country,
                    city: endereco.city,
                    state: endereco.state,
                    zipcode: endereco.zipcode,
                }
                novoAddress.push(novoObjAddress)
            }
            let novoObjContacts;
            let novoContacts = []
            for await (let contato of buscaContato){
                novoObjContacts = {
                    conctactId: contato.id,
                    name: contato.name,
                    phoneNumber: contato.phoneNumber,
                    email: contato.email,
                }
                novoContacts.push(novoObjContacts)
            }
            const novoUser = {
                id: iterador.id,
                createdAt: iterador.createdAt,
                fullName: iterador.firstName + ' ' + iterador.lastName,
                email: iterador.email,
                address: novoAddress,
                contacts: novoContacts 
            }
            array.push(novoUser)
        }

        return array;
    }
}
export default new RetornaUsuarios();