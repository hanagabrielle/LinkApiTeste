import * as express from 'express';
import usuariosController from "../controllers/usuarios.controller"

const router = express.Router();

router.get('/users', usuariosController.buscar)
router.get('/users/salvar', usuariosController.salvarUsuarios)

export default router;