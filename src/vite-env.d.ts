/// <reference types="vite/client" />

type TipoFeriado = "inamovible" | "trasladable" | "puente";

interface DATA_DB {
  motivo: string;
  dia: number;
  mes: number;
  id: string;
  tipo: TipoFeriado;
  info: string;
}

interface Holiday {
  nombre: string;
  fecha: Date;
  info: string;
  id: string;
  tipo: TipoFeriado;
}
