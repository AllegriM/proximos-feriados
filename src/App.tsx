import {HolidayCard} from "./components/HolidayCard";
import useHolidays from "./hooks/useHolidays";
import {diasFaltantes} from "./utils/remainDays";

export const DIAS = 1000 * 60 * 60 * 24;
export const today = new Date();

function App() {
  const {holidays, loading} = useHolidays();

  const nearestHoliday = holidays?.find((holiday) => holiday.fecha > today) || {
    ...holidays[0],
    date: new Date(
      holidays[0]?.fecha.getFullYear() + 1,
      holidays[0]?.fecha.getMonth(),
      holidays[0]?.fecha.getDay() + 1,
    ),
  };
  const daysNearestHoliday = diasFaltantes(nearestHoliday.fecha);

  const nextHolidays = holidays.filter((holiday) => holiday.fecha > today && holiday).slice(1);

  return (
    <main className="h-screen font-mono px-6">
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <p className="text-4xl text-white">Cargando...</p>
        </div>
      ) : (
        <div>
          <header className="flex flex-col justify-center gap-4 text-center h-full md:h-96 py-14">
            <h1 className="text-9xl text-yellow-400">{daysNearestHoliday}</h1>
            <p className="text-xl">
              dias hasta {nearestHoliday.nombre} {daysNearestHoliday > 15 ? "😩" : "😎"}
            </p>
            <span className="inline-block underline underline-offset-4">
              Fecha: {nearestHoliday.fecha?.toLocaleDateString()}
            </span>
          </header>
          <footer className="w-fit mx-auto pb-4">
            <h4 className="font-bold text-xl mb-4">Proximos feriados: </h4>
            <ul className="flex flex-col md:grid md:grid-cols-3 gap-3">
              {nextHolidays.map((holiday) => {
                return (
                  <HolidayCard
                    key={String(holiday.fecha)}
                    fecha={holiday.fecha}
                    nombre={holiday.nombre}
                    tipo={holiday.tipo}
                  />
                );
              })}
            </ul>
          </footer>
        </div>
      )}
    </main>
  );
}

export default App;
