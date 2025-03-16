import express from 'express';
import User from '../models/user';

const router = express.Router();

// Liste des langues supportées
const SUPPORTED_LANGUAGES = ['fr', 'en', 'es', 'de']; // Ajoute les langues nécessaires

// Mettre à jour la langue de l'utilisateur
router.put('/:id/language', async (req: any, res: any) => {

  try {
    const { language } = req.body; // ex: "fr", "en"
    
    // Validation de l'entrée
    if (!language || typeof language !== 'string' || !SUPPORTED_LANGUAGES.includes(language)) {
      return res.status(400).json({ message: 'Langue invalide. Langues supportées : ' + SUPPORTED_LANGUAGES.join(', ') });
    }

    // Recherche de l'utilisateur
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Mise à jour de la langue
    user.language = language;
    await user.save();

    res.json({ message: 'Langue mise à jour', language: user.language });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de la langue :', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
});

export default router;
