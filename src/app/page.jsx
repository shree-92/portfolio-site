import Link from "next/link";

const Mainpage = () => {
  return (
    <div className="flex flex-col gap-y-20 items-center justify-center h-screen font-poppins text-5xl">
      <div className="text-center">acchi template nhi mili abtak</div>
      <Link
      className="w-fit bg-red-500 hover:bg-red-400 p-4 rounded-md shadow-lg shadow-black hidden md:block"
      href="https://youtu.be/dQw4w9WgXcQ?si=htvAPDO6PZF1YC_U">
        click me
      </Link>
      <Link
      className="w-fit bg-red-500 hover:bg-red-400 p-4 rounded-md shadow-lg shadow-black block md:hidden"
      href="https://yt.openinapp.co/xam4z">
        click me
      </Link>
    </div>
  );
};

export default Mainpage;
