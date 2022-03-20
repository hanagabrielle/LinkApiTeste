import mock from '../../config/init'

class buscaUsuarios{
    async show() {
        let response;
        try {
          response = await mock.get(
            `users?page=1&limit=5`,
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
            }
          );
          return response.data;
        } catch (e) {
          throw e.response.data.error;
        }
      }
}
export default new buscaUsuarios();