import { Header } from "../components/Header";
import { Helmet } from "react-helmet-async";
import './NotFoundPage.css';

export function NotFoundPage({ cart }) {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>

      <Header cart={cart} />

      <div className="not-found-message">
        Page not found
      </div>
    </>
  );
}