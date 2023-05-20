import {diasFaltantes} from "../utils/remainDays";

export const HolidayCard = ({
  fecha,
  nombre,
  tipo,
}: {
  fecha: Holiday["fecha"];
  nombre: Holiday["nombre"];
  tipo: Holiday["tipo"];
}) => {
  return (
    <li className="flex flex-col bg-yellow-50 px-4 py-2 max-w-sm w-full min-h-[88px] rounded-lg text-black">
      <p className="font-bold flex justify-between">
        {fecha.toLocaleDateString()}
        <span
          className={`rounded-lg text-sm px-1 ml-2 mr-auto ${
            tipo === "puente"
              ? "bg-green-300"
              : tipo === "inamovible"
              ? "bg-red-200"
              : "bg-yellow-200"
          }`}
        >
          {tipo}
        </span>
        <span className="text-right font-normal text-sm ml-2">
          {diasFaltantes(fecha)} dias restantes
        </span>
      </p>
      <p className="font-mono">{nombre}.</p>
    </li>
  );
};
