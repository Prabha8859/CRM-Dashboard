const Button = ({ children, variant = "primary", onClick, icon: Icon, className = "" }) => {
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50",
    ghost: "text-slate-600 hover:bg-slate-100",
  };
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
};

export default Button;


