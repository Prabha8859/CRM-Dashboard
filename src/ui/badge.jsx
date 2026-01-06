const Badge = ({ text, variant, pulse }) => {
  const styles = {
    success: "bg-green-100 text-green-700 border-green-200",
    danger: "bg-red-100 text-red-700 border-red-200",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border ${styles[variant]}`}>
      {pulse && <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>}
      {text}
    </span>
  );
};

export default Badge;