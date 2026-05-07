import Navbar from "./Navbar";

export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto p-4">
        {children}
      </div>

    </div>
  );
}
