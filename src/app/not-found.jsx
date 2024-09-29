import Link from "next/link";


const NotFoundPage = () => {
    return (
      <div className="flex flex-col gap-y-10 items-center justify-center h-screen bg-gray-900 text-white text-center p-5">
        <h1 className="text-6xl md:text-8xl font-bold animate-fade-in mb-4">404 - why ? isnt a about me page enough</h1>
        <Link
        href="/" 
        className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xl py-4 px-6 rounded transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    );
  };
  
  export default NotFoundPage;
  