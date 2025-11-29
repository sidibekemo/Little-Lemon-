window.fetchAPI = function(date) {
  // On peut utiliser la date pour un futur filtrage ou logique
  const day = date.getDate(); // juste pour montrer qu'on utilise date
  const result = [];

  // Toutes les demi-heures de 0h à 23h
  for (let i = 0; i < 24; i++) {
    const hour = i.toString().padStart(2, "0");
    result.push(`${hour}:00`);
    result.push(`${hour}:30`);
  }

  // Exemple : si tu veux filtrer selon le jour, tu pourrais faire :
  // result = result.filter((time, index) => index % 2 === day % 2);

  return result;
};

window.submitAPI = function(formData) {
  return true;
};

console.log("API chargée ✔️ fetchAPI & submitAPI disponibles sur window");
