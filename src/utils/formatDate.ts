export const formatDate = (numero: number) => {
  return String(numero).length != 1 ? numero : `0${numero}`;
};
