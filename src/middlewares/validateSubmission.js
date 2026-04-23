const validateSubmission = (req, res, next) => {
  const {
    nombreCompleto,
    edad,
    barrioComuna,
    profesionActividad,
    contacto,
    contactoFuturo,
  } = req.body;

  if (!nombreCompleto || nombreCompleto.trim() === "") {
    return res.status(400).json({
      ok: false,
      message: "El nombre completo es obligatorio",
    });
  }

  if (!contacto || contacto.trim() === "") {
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

  const opcionesValidas = ["si", "no", "prefiero pensarlo"];
  if (!opcionesValidas.includes(contactoFuturo)) {
    return res.status(400).json({
      ok: false,
      message: "La opción de contacto futuro no es válida",
    });
  }

  req.body = {
    nombreCompleto: nombreCompleto.trim(),
    edad: edad === "" || edad === undefined || edad === null ? null : Number(edad),
    barrioComuna: barrioComuna ? barrioComuna.trim() : null,
    profesionActividad: profesionActividad ? profesionActividad.trim() : null,
    contacto: contacto.trim(),
    contactoFuturo,
  };

  next();
};

module.exports = validateSubmission;