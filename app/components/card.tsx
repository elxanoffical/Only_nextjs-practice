export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="p-[100px] m-[10px] shadow-xl border border-[#ddd] flex gap-4
     items-center justify-center"
    >
      {children}
    </div>
  );
}
