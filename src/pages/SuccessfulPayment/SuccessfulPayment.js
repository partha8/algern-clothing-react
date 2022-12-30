import { Footer, Navbar } from "../../components";
import { useGetCart } from "../../hooks";
export const SuccessfulPayment = () => {
  useGetCart();
  return (
    <div>
      <Navbar />
      <div className="main-container">
        <h1>Successfull</h1>
      </div>
      <Footer />
    </div>
  );
};
