import { NavLink } from "react-router-dom";

export default function Card({ title, img, id, desc, puntaje, estreno }) {
  return (
    <NavLink to={`/pelicula/${id}`} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </span>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{estreno}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{puntaje}</p>
      </div>
    </NavLink>
  );
}
