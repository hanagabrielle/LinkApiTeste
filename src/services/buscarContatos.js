import mock from '../../config/init'

class buscaUsuarios{
    async show(userId) {
        let response;
        try {
          response = await mock.get(
            `users/${userId}/contacts`
          );
          return response.data;
        } catch (e) {
          throw e.response.data.error;
        }
      }
}
export default new buscaUsuarios();