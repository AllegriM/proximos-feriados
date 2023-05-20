import {DIAS, today} from "../App";

export const diasFaltantes = (fecha: Date): number => {
  return +((fecha?.getTime() - today.getTime()) / DIAS).toFixed() + 1;
};
