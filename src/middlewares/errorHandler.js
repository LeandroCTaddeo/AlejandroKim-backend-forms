const errorHandler = (err, req, res, next) => {
  console.error("ERROR:", err);

  res.status(500).json({
    ok: false,
    message: "Error interno del servidor",
  });
};

module.exports = errorHandler;