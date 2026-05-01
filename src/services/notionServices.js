const notion = require("../config/notion");

const createContactInNotion = async (data) => {
  const contacto = data.contacto || "";

  let telefono = "-";
  let mail = "-";

  const emailMatch = contacto.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i);
  if (emailMatch) {
    mail = emailMatch[0];
  }

  const telefonoMatch = contacto.match(/(\+?\d[\d\s-]{6,}\d)/);
  if (telefonoMatch) {
    telefono = telefonoMatch[0].replace(/[^\d+]/g, "");
  }

  return await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID,
    },
    properties: {
      ID: {
        number: data.id || null,
      },
      Nombre: {
        title: [
          {
            text: {
              content: data.nombreCompleto,
            },
          },
        ],
      },
      Edad: {
        number: data.edad || null,
      },
      "Barrio / Comuna": {
        rich_text: [
          {
            text: {
              content: data.barrioComuna || "",
            },
          },
        ],
      },
      Profesión: {
        rich_text: [
          {
            text: {
              content: data.profesionActividad || "",
            },
          },
        ],
      },
      "Nro de telefono": {
        rich_text: [
          {
            text: {
              content: telefono,
            },
          },
        ],
      },
      Mail: {
        rich_text: [
          {
            text: {
              content: mail,
            },
          },
        ],
      },
      "Contacto futuro": {
        select: {
          name: data.contactoFuturo,
        },
      },
      "Fecha de registro": {
        date: {
          start: new Date().toISOString(),
        },
      },
    },
  });
};

module.exports = { createContactInNotion };