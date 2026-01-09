"use client";
import { Box, Flex, NavLink, Stack, Text } from "@mantine/core";
import {
  FileText,
  MessageSquare,
  LayoutDashboardIcon,
  ShoppingCartIcon,
  SettingsIcon,
  IdCardIcon,
  User,
  HelpingHand,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
  },
  {
    label: "Food Order",
    icon: ShoppingCartIcon,
    href: "/food-order",
  },
  {
    label: "Manage Menu",
    icon: FileText,
    href: "/manage-menu",
  },
  {
    label: "Customer Review",
    icon: MessageSquare,
    href: "/customer-review",
  },
];

const otherItems = [
  {
    label: "Settings",
    icon: SettingsIcon,
    href: "/settings",
  },
  {
    label: "Payment",
    icon: IdCardIcon,
    href: "/payment",
  },
  {
    label: "Accounts",
    icon: User,
    href: "/accounts",
  },
  {
    label: "Help",
    icon: HelpingHand,
    href: "/help",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredOther, setHoveredOther] = useState<string | null>(null);

  return (
    <Box
      h="100vh"
      bg="#F1F2F7"
      style={{
        display: "flex",
        flexDirection: "column",
      }}>
      {/* Logo Section with bottom border */}
      <Box
        px="lg"
        py="md"
        style={{
          borderBottom: "1px solid #C8CBD9",
        }}>
        <Flex align="center" gap="sm">
          <Box
            w={40}
            h={40}
            style={{
              borderRadius: "50%",
              background: "#5063F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text c="white" fw={700} size="lg">
              G
            </Text>
          </Box>
          <Text fw={600} size="md" c="#495057">
            GOODFOOD
          </Text>
        </Flex>
      </Box>

      {/* Navigation Section */}
      <Box p="lg" style={{ flex: 1, overflowY: "auto" }}>
        <Stack gap="xl">
          {/* Menu Section */}
          <Box>
            <Text
              size="xs"
              fw={600}
              c="gray.5"
              tt="uppercase"
              px={10}
              mb="md"
              style={{ letterSpacing: "0.5px" }}>
              Menu
            </Text>
            <Stack gap="xs">
              {menuItems.map((item) => (
                <NavLink
                  key={item.href}
                  component={Link}
                  href={item.href}
                  label={item.label}
                  leftSection={
                    <item.icon
                      size={18}
                      strokeWidth={1.5}
                      color="currentColor"
                    />
                  }
                  active={pathname === item.href}
                  onMouseEnter={() => setHoveredMenu(item.href)}
                  onMouseLeave={() => setHoveredMenu(null)}
                  styles={{
                    root: {
                      padding: "10px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: hoveredMenu === item.href ? "#5A6ACF" : "#868E96",
                      backgroundColor:
                        hoveredMenu === item.href ? " #E4E7F4" : "transparent",
                      "&[dataActive]": {
                        backgroundColor: "E4E7F4F",
                        color: "#5A6ACF",
                        fontWeight: 600,
                      },
                    },
                    label: {
                      fontSize: "14px",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* Others Section */}
          <Box>
            <Text
              size="xs"
              fw={600}
              c="gray.5"
              tt="uppercase"
              mb="md"
              px={10}
              style={{ letterSpacing: "0.5px" }}>
              Others
            </Text>
            <Stack gap="xs">
              {otherItems.map((item) => (
                <NavLink
                  key={item.href}
                  component={Link}
                  href={item.href}
                  label={item.label}
                  leftSection={
                    <item.icon
                      size={18}
                      strokeWidth={1.5}
                      color="currentColor"
                    />
                  }
                  active={pathname === item.href}
                  onMouseEnter={() => setHoveredOther(item.href)}
                  onMouseLeave={() => setHoveredOther(null)}
                  styles={{
                    root: {
                      padding: "10px",
                      fontSize: "14px",
                      fontWeight: 500,

                      color: hoveredOther === item.href ? "#5A6ACF" : "#868E96",
                      backgroundColor:
                        hoveredOther === item.href ? " #E4E7F4" : "transparent",
                      "&[data-active]": {
                        backgroundColor: "E4E7F4F",
                        color: "#5A6ACF",
                        fontWeight: 600,
                      },
                    },
                    label: {
                      fontSize: "14px",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
