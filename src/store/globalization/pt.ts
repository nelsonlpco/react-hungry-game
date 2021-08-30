export default {
  next: 'Próximo',
  yes: 'Sim',
  no: 'Não',
  iGuestYourFavoriteFood: 'Vou adivinhar sua comida favorita!',
  winnerMessage: 'Acertei novamente',
  whatsYourFavoriteFood: 'Qual a sua comida favorita?',
  whatsYourFoodIsThatFoodIsNot: (userFood: string, npcFood: string): string =>
    `O que ${userFood} é que ${npcFood} não é?`,
  theFoodIs: (value: string): string => `A comida é ${value}?`,
  favoriteFood: 'Comida favorita',
  foodQuality: 'Qualidade da comida',
};
