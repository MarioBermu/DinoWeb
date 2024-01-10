const Mensaje = require('./foro.dao');

exports.createMensaje = (req, res) => {
  const newMensaje = {
    name: req.body.name,
    mensaje: req.body.mensaje,
  }

  Mensaje.create(newMensaje, (err, mensaje) => {

    if (err && err.code === 11000)
     return res.status(409).send('name already exists');
    if (err)
    return res.status(500).send('Server error');

    res.send({ newMensaje });
  });
}

exports.getMensajes = async (req, res) => {
  try {
    const mensaje = await Mensaje.find();
    res.json(mensaje);
  } catch (err) {
    res.json({ message: 'estoy triste' });
  }
}
