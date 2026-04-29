const notion = require("../config/notion");

const createContactInNotion = async (data) => {
  return await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID,
    },
    properties: {
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
      Contacto: {
        rich_text: [
          {
            text: {
              content: data.contacto,
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