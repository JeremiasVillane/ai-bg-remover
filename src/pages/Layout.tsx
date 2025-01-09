import { Footer, Navbar } from "../components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gray-50 py-16">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
