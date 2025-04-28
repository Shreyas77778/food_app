const Loader = ({ size = 6 }) => {
    return (
      <div className="flex justify-center items-center">
        <div
          className={`loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-${size} w-${size}`}
          style={{ borderTopColor: '#ea580c' }}
        ></div>
      </div>
    );
  };
  
  export default Loader;