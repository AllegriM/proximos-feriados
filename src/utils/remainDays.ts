import {DIAS, today} from "../App";

export const diasFaltantes = (fecha: Date) => {
  return ((fecha?.getTime() - today.getTime()) / DIAS).toFixed();
};
