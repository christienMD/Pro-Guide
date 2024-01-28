import Navbar from "@/app/Navbar";
import BlueSection from "@/app/components/ActionSection";
import QuizStarterCard from "@/app/components/QuizStarterCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <BlueSection />
      <div className="container mx-auto md:px-16 mt-16 pb-5 ">
        <div className="mt-6">
          <QuizStarterCard />
        </div>
      </div>
    </>
  );
};

export default Home;

export const dynamic = "force-dynamic";
