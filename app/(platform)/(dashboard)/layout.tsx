import Navbar from "./_components/Navbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default DashboardLayout;
