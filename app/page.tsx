import BlueSection from "./components/ActionSection";
import QuizStarterCard from "./components/QuizStarterCard";

export default function Home() {
  return (
    <>
      <BlueSection />
      <div className="container mx-auto md:px-16 mt-16 pb-5 ">
        <div className="mt-6">
          <QuizStarterCard />
        </div>
      </div>

    </>
  );
}
