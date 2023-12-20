type Props = {
  children: React.ReactNode;
  className: string;
};

export default function Button({ children, className }: Props) {
  return (
    <button
      className={`px-6 py-4 hover:opacity-80 duration-300 transition-all font-bold tracking-wider text-xl rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}
