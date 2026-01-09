import { Box, Container, Text, Button, Center, Stack } from "@mantine/core";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}>
      <Container size="sm" py="xl">
        <Center>
          <Stack gap="lg" align="center">
            <Box
              style={{
                fontSize: "120px",
                fontWeight: 700,
                color: "#5063F0",
                lineHeight: 1,
              }}>
              404
            </Box>
            <Text size="xl" fw={600} ta="center" c="dark">
              Page Not Found
            </Text>
            <Text size="sm" c="gray.6" ta="center">
              Sorry, the page you&apos;re looking for doesn&apos;t exist. It
              might have been moved or deleted.
            </Text>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                size="md"
                style={{
                  backgroundColor: "#5063F0",
                  color: "#FFFFFF",
                  marginTop: "12px",
                }}>
                Back to Dashboard
              </Button>
            </Link>
          </Stack>
        </Center>
      </Container>
    </Box>
  );
}
