"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexion = void 0;
const promise_mysql_1 = require("promise-mysql");
function conexion() {
    return __awaiter(this, void 0, void 0, function* () {
        const connect = yield promise_mysql_1.createPool({
            host: 'us-cdbr-east-04.cleardb.com',
            user: 'b038b64473ea8c',
            password: '16a24ce2',
            database: 'heroku_d6415f3aee583cb'
        });
        return connect;
    });
}
exports.conexion = conexion;
