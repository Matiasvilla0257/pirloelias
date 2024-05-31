import { Router } from "express";
import rutaUsuario from "./routes.usuario.js";
// import rutapersonas from "./routes.personas.js";

const ruta = Router();

ruta.use("/api", rutaUsuario);
// ruta.use("/api", rutapersonas);

export default ruta;