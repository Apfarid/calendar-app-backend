// Rutas de events
// host + /api/events

const { Router } = require("express");
const router = Router();
const { validarJWT } = require("../middlewares/validar-jwt");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  getEventos,
  crearEvento,
  actualizaEvento,
  eliminarEvento,
} = require("../controllers/events");

router.use(validarJWT); // este codigo indica que cada una de las siguientes rutas debe usar el middleware validarJWT

router.get("/", getEventos);

router.post(
  "/",
  [
    check("title", "Titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),

    validarCampos,
  ],
  crearEvento
);

router.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  actualizaEvento
);

router.delete("/:id", eliminarEvento);

module.exports = router;
