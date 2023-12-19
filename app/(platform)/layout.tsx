import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

function PlatformLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <Toaster />
      {children}
    </ClerkProvider>
  );
}

export default PlatformLayout;
