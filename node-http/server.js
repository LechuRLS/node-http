console.log("funciona")
const http = require("http");
const pageData = require("./data");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>${pageData.title}</title>
    </head>
    <body>
      <header>
        <h1>${pageData.title}</h1>
        <h2>${pageData.subtitle}</h2>
      </header>
      <main>
        <p>${pageData.description}</p>
        <p>Autor: ${pageData.author}</p>
        <p>Año: ${pageData.year}</p>
      </main>
    </body>
    </html>
  `;

  res.end(htmlContent);
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
