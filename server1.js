const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/inscription", (req, res) => {
    const { nom, prenom, email, telephone, filiere } = req.body;

    if (!nom || !prenom || !email) {
        return res.status(400).json({ message: "Champs obligatoires manquants" });
    }

    const inscription = {
        nom,
        prenom,
        email,
        telephone,
        filiere
    };

    console.log("Nouvelle inscription :", inscription);

    res.json({ message: "Inscription enregistrée" });
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});