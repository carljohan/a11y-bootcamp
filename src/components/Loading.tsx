import star from "../assets/star-spinning.gif";
import hole from "../assets/shadow-energy.gif";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <img
        className="h-20 w-20"
        src={Math.round(Math.random()) ? star : hole}
      />
    </div>
  );
}
