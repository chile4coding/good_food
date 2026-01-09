import { useState } from "react";

export function useDashboardLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [desktopNavOpen, setDesktopNavOpen] = useState(true);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const toggleDesktopNav = () => setDesktopNavOpen(!desktopNavOpen);

  return {
    mobileNavOpen,
    desktopNavOpen,
    toggleMobileNav,
    toggleDesktopNav,
  };
}
