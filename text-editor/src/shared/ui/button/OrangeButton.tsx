type OrangeButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function OrangeButton({ children, onClick }: OrangeButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-white bg-duck px-4 py-1.5 rounded-xl cursor-pointer"
    >
      {children}
    </button>
  );
}
