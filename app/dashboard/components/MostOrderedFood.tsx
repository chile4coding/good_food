import { Box, Card, Text, Table, Avatar, Flex } from "@mantine/core";

const foodData = [
  {
    id: 1,
    name: "Fresh Salad Bowl",
    price: "IDR 45.000",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Chicken Noodles",
    price: "IDR 75.000",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Smoothie Fruits",
    price: "IDR 45.000",
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Hot Chicken Wings",
    price: "IDR 45.000",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=100&h=100&fit=crop",
  },
];

export default function MostOrderedFood() {
  return (
    <Card
      p="lg"
      radius="md"
      withBorder={false}
      style={{
        borderColor: "#F1F3F5",
        backgroundColor: "#FFFFFF",
      }}>
      {/* Header */}
      <Box mb="md">
        <Text size="md" c="gray.8" fw={600} mb={4}>
          Most Ordered Food
        </Text>
        <Text size="xs" c="gray.5">
          Adipiscing elit, sed do eiusmod tempor
        </Text>
      </Box>

      {/* Table */}
      <Box mt="lg">
        <Table
          verticalSpacing="md"
          horizontalSpacing="md"
          styles={{
            table: {
              borderCollapse: "separate",
              borderSpacing: 0,
            },
          }}>
          <Table.Tbody>
            {foodData.map((food) => (
              <Table.Tr
                key={food.id}
                style={{
                  borderBottom: "1px solid #F1F3F5",
                }}>
                <Table.Td
                  style={{
                    padding: "12px 0",
                    borderBottom: "1px solid #F1F3F5",
                  }}>
                  <Flex align="center" gap="md">
                    <Avatar
                      src={food.image}
                      alt={food.name}
                      size={48}
                      style={{
                        border: "1px solid #F1F3F5",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
                      }}
                    />
                    <Text size="sm" c="gray.8" fw={500}>
                      {food.name}
                    </Text>
                  </Flex>
                </Table.Td>
                <Table.Td
                  style={{
                    textAlign: "right",
                    padding: "12px 0",
                    borderBottom: "1px solid #F1F3F5",
                  }}>
                  <Text size="sm" c="gray.6" fw={500}>
                    {food.price}
                  </Text>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Box>
    </Card>
  );
}
