type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-4 hover:opacity-80 duration-300 transition-all font-bold tracking-wider text-xl w-max rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}
