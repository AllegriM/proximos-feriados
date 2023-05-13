export const fetchData = async (): Promise<Holiday[]> => {
  const response = await fetch("/src/data/holidays.json");
  const data = (await response.json()) as {nombre: string; fecha: string}[];

  const formatData = data.map((holiday) => {
    return {
      nombre: holiday.nombre,
      fecha: new Date(holiday.fecha.replace(/-/g, "/")),
    };
  });

  return formatData;
};
