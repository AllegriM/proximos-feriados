import {formatDate} from "./formatDate";

export const fetchData = async (): Promise<Holiday[]> => {
  const response = await fetch(import.meta.env.VITE_API_URL as string);
  const data = (await response.json()) as DATA_DB[];

  const formatData = data.map((holiday) => {
    return {
      nombre: holiday.motivo,
      fecha: new Date(`2023/${formatDate(holiday.mes)}/${formatDate(holiday.dia)}`),
      info: holiday.info,
      id: holiday.id,
      tipo: holiday.tipo,
    };
  });

  return formatData;
};
