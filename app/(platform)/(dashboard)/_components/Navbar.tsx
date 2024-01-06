import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import MobileSidebar from "./MobileSidebar";
import FormPopover from "@/components/form/FormPopover";

function Navbar() {
  return (
    <nav className="fixed z-50 top-0 w-full border-b shadow-sm bg-white">
      <div className="max-w-screen-2xl mx-auto flex items-center px-4 h-14">
        <MobileSidebar />

        <div className="flex items-center gap-x-4">
          <div className="hidden md:flex">
            <Logo />
          </div>
          <FormPopover align="start" side="bottom" sideOffset={18}>
            <Button
              variant="primary"
              size="sm"
              className="rounded-sm hidden md:block h-auto py-1.5 px-2"
            >
              Create
            </Button>
          </FormPopover>
          <FormPopover>
            <Button
              variant="primary"
              size="sm"
              className="rounded-sm block md:hidden"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </FormPopover>
        </div>

        <div className="ml-auto flex items-center gap-x-2">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
