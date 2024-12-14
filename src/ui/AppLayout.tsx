import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  //   const navigation = useNavigation();
  //   const isLoading = navigation.state === "loading";

  return (
    <div className="flex h-screen w-full justify-between overflow-x-hidden border-red-500 bg-dark-blue p-[1.5rem]">
      <Navbar />
      <div className="basis-[92.5%]">
        <Outlet />
      </div>
    </div>
  );
}
