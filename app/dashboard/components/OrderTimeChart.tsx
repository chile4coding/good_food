import { Box, Button, Card, Flex, Text } from "@mantine/core";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useState } from "react";

const data = [
  {
    name: "Afternoon",
    value: 40,
    time: "1pm - 4pm",
    orders: 1890,
    color: "#3D45CF",
  },
  {
    name: "Evening",
    value: 32,
    time: "5pm - 8pm",
    orders: 1520,
    color: "#8F9AFF",
  },
  {
    name: "Morning",
    value: 28,
    time: "9am - 12pm",
    orders: 1330,
    color: "#DDE1FF",
  },
];

const COLORS = ["#3D45CF", "#8F9AFF", "#DDE1FF"];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ payload: (typeof data)[0] }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <Box
        p="sm"
        style={{
          backgroundColor: "#2D3748",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        }}>
        <Text size="sm" c="white" fw={600} mb={4}>
          {data.name}
        </Text>
        <Text size="xs" c="gray.3">
          {data.time}
        </Text>
        <Text size="sm" c="white" fw={700} mt={4}>
          {data.orders.toLocaleString()} orders
        </Text>
      </Box>
    );
  }
  return null;
};

export default function OrderTimeChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <Card
      p="lg"
      withBorder={false}
      style={{
        borderColor: "#F1F3F5",
        backgroundColor: "#FFFFFF",
      }}>
      {/* Header */}
      <Flex justify="space-between" align="flex-start" mb="md">
        <Box>
          <Text size="sm" c="gray.6" mb={4}>
            Order Time
          </Text>
          <Text size="xs" c="gray.5">
            From 1-6 Dec, 2020
          </Text>
        </Box>
        <Button
          size="sm"
          c="#5063F0"
          variant="outline"
          styles={{
            root: {
              borderColor: "#E9ECEF",
              "&:hover": {
                backgroundColor: "#F8F9FA",
              },
            },
          }}>
          View Report
        </Button>
      </Flex>

      {/* Chart */}
      <Flex justify="center" align="center" direction="column" mt="lg">
        <Box style={{ width: "100%", height: 280, position: "relative" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={110}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                strokeWidth={0}>
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    style={{
                      filter:
                        activeIndex === index ? "brightness(1.1)" : "none",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Label (Tooltip when hovering) */}
          {/* {activeIndex !== null && (
            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                pointerEvents: "none",
                backgroundColor: "#2D3748",
                padding: "12px 16px",
                borderRadius: "8px",
                minWidth: "120px",
              }}>
              <Text size="sm" c="white" fw={600}>
                {data[activeIndex].name}
              </Text>
              <Text size="xs" c="gray.3" mb={4}>
                {data[activeIndex].time}
              </Text>
              <Text size="lg" c="white" fw={700}>
                {data[activeIndex].orders.toLocaleString()} orders
              </Text>
            </Box>
          )} */}
        </Box>

        {/* Legend */}
        <Flex
          gap="sm"
          mt="xl"
          w="100%"
          justify="space-between"
          direction="row"
          wrap="wrap">
          {data.map((item, index) => (
            <Box
              key={item.name}
              //   justify="space-between"
              //   align="center"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{ cursor: "pointer" }}>
              <Flex align="center" gap={6}>
                <Box
                  w={12}
                  h={12}
                  style={{
                    borderRadius: "50%",
                    backgroundColor: COLORS[index],
                  }}
                />
                <Text size="sm" c="gray.7" fw={500}>
                  {item.name}
                </Text>
              </Flex>

              <Text ml={16} size="sm" c="gray.6" fw={600}>
                {item.value}%
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}
