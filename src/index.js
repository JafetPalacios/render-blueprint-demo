const http = require('http')

// Tomamos el puerto que Render proporciona o usamos 3000 en local
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  // Respondemos con una salida simple para validar el despliegue
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('Render Blueprint funcionando correctamente')
})

server.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})