import "./App.scss";
import { Fruits } from "./Fruits";

export const App = () => {
  return (
    <section className="container">
      <div className="title">
        <h2>Fruits menu</h2>
        <div className="underline"></div>
      </div>
      <Fruits />
    </section>
  );
};
