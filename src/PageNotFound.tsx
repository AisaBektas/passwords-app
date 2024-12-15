const PageNotFound = () => {
  return (
    <div className="flex min-h-screen justify-center items-center p-2">
      <div className="max-w-lg flex-col space-y-5 lg:space-y-10 text-center">
        <p className="text-3xl lg:text-6xl text-purple-800 font-bold">
          Ooops! Looks like you are lost in the digital void...
        </p>
        <p className="text-3xl lg:text-6xl text-gray-600">But do not panic</p>
        <button className="border-2 hover:bg-purple-800 hover:text-white text-gray-600 border-purple-800 bg-transparent px-4 py-2 text-md lg:text-lg font-bold rounded-md">
          Go back to the homepage
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
