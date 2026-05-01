const notion = require("../config/notion");

const createContactInNotion = async (data) => {
  const contacto = data.contacto || "";
  const esEmail = contacto.includes("@");

  const telefono = esEmail ? "-" : contacto;
  const mail = esEmail ? contacto : "-";

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