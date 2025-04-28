const Button = ({ children, onClick, className = '', type = 'button', disabled = false }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`px-4 py-2 rounded-md font-medium transition-colors ${className} ${
          disabled ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-opacity-90'
        }`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;