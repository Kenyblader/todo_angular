// Récupérer la langue du navigateur
const browserLanguage = navigator.language.split('-')[0]; // ex: "fr" ou "en"

// Fonction pour charger la langue actuelle de l'utilisateur ou utiliser la langue du navigateur
async function setLanguage(userId) {
  try {
    // Vérifier la langue préférée de l'utilisateur via une requête API
    const response = await fetch(`/api/users/${userId}`, {
      method: 'GET',
    });
    const user = await response.json();

    const preferredLanguage = user.language || browserLanguage;
    applyLanguage(preferredLanguage);

    // Mettre à jour le sélecteur de langue (si présent)
    document.getElementById('languageSelect').value = preferredLanguage;
  } catch (error) {
    console.error('Erreur lors de la récupération de la langue:', error);
    applyLanguage(browserLanguage); // Fallback sur la langue du navigateur
  }
}

// Appliquer la langue à l'interface
function applyLanguage(language) {
  const translations = {
    fr: {
      welcome: 'Bienvenue sur Phoenix',
      tasks: 'Tâches',
      completed: 'Terminé',
    },
    en: {
      welcome: 'Welcome to Phoenix',
      tasks: 'Tasks',
      completed: 'Completed',
    },
  };

  const texts = translations[language] || translations['fr']; // Français par défaut
  document.getElementById('welcome').textContent = texts.welcome;
  document.getElementById('tasks-label').textContent = texts.tasks;
  document.getElementById('completed-label').textContent = texts.completed;
}

// Écouter le changement de langue via un sélecteur
document.getElementById('languageSelect').addEventListener('change', async (event) => {
  const newLanguage = event.target.value;
  const userId = 1; // Remplacez par l'ID réel de l'utilisateur connecté

  // Mettre à jour la langue côté serveur
  await fetch(`/api/users/${userId}/language`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ language: newLanguage }),
  });

  applyLanguage(newLanguage);
});

// Initialisation (supposons un utilisateur avec ID 1)
setLanguage(1);