/// <reference types="vite/client" />

interface DATA_DB {
  motivo: string;
  dia: number;
  mes: number;
  id: string;
  tipo: string;
  info: string;
}

interface Holiday {
  nombre: string;
  fecha: Date;
  info: string;
  id: string;
  tipo: string;
}
