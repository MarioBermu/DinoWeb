const Cromo = require('./cromos.dao');


exports.getCromo = async (req, res) => {
  try {
    const cromo = await Cromo.find();
    res.json(cromo);
  } catch (err) {
    res.json({ message: 'estoy triste' });
  }
}
