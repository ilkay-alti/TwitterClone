export default function Icon({ children, ...props }) {
  return (
    <button
      className={`${props.css} border border-white bg-white rounded-full flex items-center justify-center min-w-[300px] min-h-[40px] text-black text-[15px]  py-[2px] px-[10px]`}
      {...props}
    >
      {children}
    </button>
  );
}
