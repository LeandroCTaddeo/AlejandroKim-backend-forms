const validateSubmission = (req, res, next) => {
  const {
    nombre,
    edad,
    barrio,
    profesion,
    contacto_info,
    contacto,
  } = req.body;

  if (!nombre || nombre.trim() === "") {
    return res.status(400).json({
      ok: false,
      message: "El nombre completo es obligatorio",
    });
  }

  if (!contacto_info || contacto_info.trim() === "") {
    return res.status(400).json({
      ok: false,
      message: "El contacto es obligatorio",
    });
  }

  if (
    edad !== undefined &&
    edad !== null &&
    edad !== "" &&
    (!Number.isInteger(Number(edad)) || Number(edad) < 0)
  ) {
    return res.status(400).json({
      ok: false,
      message: "La edad debe ser un número válido",
    });
  }

  const opcionesValidas = ["si", "no", "pensar", "prefiero pensarlo"];

  if (!opcionesValidas.includes(contacto)) {
    return res.status(400).json({
      ok: false,
      message: "La opción de contacto futuro no es válida",
    });
  }

  req.body = {
    nombreCompleto: nombre.trim(),
    edad: edad === "" || edad === undefined || edad === null ? null : Number(edad),
    barrioComuna: barrio ? barrio.trim() : null,
    profesionActividad: profesion ? profesion.trim() : null,
    contacto: contacto_info.trim(),
    contactoFuturo: contacto === "pensar" ? "prefiero pensarlo" : contacto,
  };

  next();
};

module.exports = validateSubmission;