import {useEffect, useState} from "react";

import {fetchData} from "../utils/fetchAPI";

export default function useHolidays() {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getHolidays = async () => {
    try {
      setLoading(true);
      const holidays = await fetchData();

      setHolidays(holidays);
    } catch (error) {
      throw new Error("Error al obtener los datos de la API");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHolidays();
  }, []);

  return {holidays, loading};
}
