"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const catdonaciones_controllers_1 = require("../controllers/catdonaciones.controllers");
const verificarToken_1 = require("../libs/verificarToken");
const enrutadorCatdon = express_1.Router();
let catdonacionesController = new catdonaciones_controllers_1.CatdonacionesController();
enrutadorCatdon.route('/categoria_donaciones').get(verificarToken_1.validarToken, catdonacionesController.listarCatdonaciones);
enrutadorCatdon.route('/categoria_donaciones-public').get(catdonacionesController.listarCatdonaciones);
enrutadorCatdon.route('/categoria_donaciones').post(catdonacionesController.crearCatdonaciones);
enrutadorCatdon.route('/categoria_donaciones/:id').delete(catdonacionesController.eliminarCatdonaciones);
enrutadorCatdon.route('/categoria_donaciones/:id').put(catdonacionesController.actualizarCatdonaciones);
enrutadorCatdon.route('/categoria_donaciones/:id').get(catdonacionesController.obtenerCatdonaciones);
exports.default = enrutadorCatdon;
