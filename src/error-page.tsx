import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center h-screen gap-3"
    >
      <h1 className="text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>404</p>
      <Link to={`/`}>
        <button type="button" className="btn btn-outline">
          Return Home
        </button>
      </Link>
    </div>
  );
}
