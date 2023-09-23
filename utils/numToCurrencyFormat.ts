export const numToCurrencyFormat = (num: number) => {
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};