import { Router } from "express";
import { mostrarpersonas, crearpersonas, actualizarpersonas, eliminarpersonas} from "../controllers/controllers.personas.js";


const rutaUsuario = Router();

rutaUsuario.get("/personas", mostrarpersonas); 
rutaUsuario.get("/personas", crearpersonas);
rutaUsuario.put("/personas",  actualizarpersonas);
rutaUsuario.delete("/personas", eliminarpersonas);

export default rutapersonas;
