import Navbar from "../components/Navbar";
import Main from "../components/Main";  

export default function Homepage() {
  return (
    <div className="bg-dark-blue h-screen w-full p-[1.5rem] flex gap-[2.2rem]">
      <Navbar />
      <Main />
    </div>
  );
}
