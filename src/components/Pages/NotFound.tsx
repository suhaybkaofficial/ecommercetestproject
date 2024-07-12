import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <img
            src="https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png"
            width={300}
            height={300}
            alt="404 illustration"
            className="mx-auto"
          />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Oops, page not found!
          </h1>
          <p className="mt-4 text-muted-foreground">
            We're sorry, but the page you were looking for could not be found.
            Please check the URL or try navigating back to the homepage.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
