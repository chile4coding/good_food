"use client";
import { Box, Card, Text } from "@mantine/core";
import { useState, useEffect } from "react";

const ratingData = [
  {
    label: "Hygiene",
    percentage: 85,
    color: "#8F9AFF",
    size: 100,
    top: 10,
    left: 100,
    strokeWidth: 4,
  },
  {
    label: "Food Taste",
    percentage: 85,
    color: "#FFA94D",
    size: 160,
    top: 30,
    right: 30,
    strokeWidth: 5,
  },
  {
    label: "Packaging",
    percentage: 92,
    color: "#22B8CF",
    size: 140,
    bottom: 60,
    left: 30,
    strokeWidth: 4,
  },
];

const RatingCircle = ({
  item,
  scale,
}: {
  item: (typeof ratingData)[0];
  scale: number;
}) => {
  const scaledSize = item.size * scale;
  const scaledStrokeWidth = item.strokeWidth * scale;
  const scaledTop = item.top ? item.top * scale : undefined;
  const scaledLeft = item.left ? item.left * scale : undefined;
  const scaledRight = item.right ? item.right * scale : undefined;
  const scaledBottom = item.bottom ? item.bottom * scale : undefined;

  return (
    <Box
      style={{
        position: "absolute",
        width: scaledSize,
        height: scaledSize,
        top: scaledTop,
        left: scaledLeft,
        right: scaledRight,
        bottom: scaledBottom,
      }}>
      {/* Progress Ring */}
      <svg
        width={scaledSize}
        height={scaledSize}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "rotate(-90deg)",
        }}>
        {/* Progress Circle Only */}
        <circle
          cx={scaledSize / 2}
          cy={scaledSize / 2}
          r={(scaledSize - scaledStrokeWidth) / 2}
          fill="none"
          stroke={item.color}
          strokeWidth={scaledStrokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${
            2 * Math.PI * ((scaledSize - scaledStrokeWidth) / 2)
          }`}
          strokeDashoffset={`${
            2 *
            Math.PI *
            ((scaledSize - scaledStrokeWidth) / 2) *
            (1 - item.percentage / 100)
          }`}
          style={{
            transition: "stroke-dashoffset 1s ease",
          }}
        />
      </svg>

      {/* Inner Filled Circle with Content - Transparent Background */}
      <Box
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: scaledSize - scaledStrokeWidth * 3,
          height: scaledSize - scaledStrokeWidth * 3,
          borderRadius: "50%",
          backgroundColor: `${item.color}`,
          opacity: 0.8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 6px 20px ${item.color}40`,
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.05)";
          e.currentTarget.style.boxShadow = `0 8px 24px ${item.color}60`;
          e.currentTarget.style.backgroundColor = item.color;
          e.currentTarget.style.opacity = "0.8";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
          e.currentTarget.style.boxShadow = `0 6px 20px ${item.color}40`;
          e.currentTarget.style.backgroundColor = item.color;
          e.currentTarget.style.opacity = "0.8";
        }}>
        <Text
          c="white"
          fw={700}
          style={{
            fontSize: scaledSize > 180 ? scaledSize * 0.15 : scaledSize * 0.125,
            lineHeight: 1,
            marginBottom: "0.25rem",
          }}>
          {item.percentage}%
        </Text>
        <Text
          c="white"
          fw={400}
          style={{
            fontSize: "1rem",
          }}>
          {item.label}
        </Text>
      </Box>
    </Box>
  );
};

export default function YourRatingChart() {
  const [scale] = useState(1);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (typeof window !== "undefined") {
  //         const width = window.innerWidth;
  //         if (width < 640) {
  //           setScale(0.5);
  //         } else if (width < 1024) {
  //           setScale(0.75);
  //         } else {
  //           setScale(1);
  //         }
  //       }
  //     };

  //     handleResize();
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  return (
    <Card
      p="lg"
      radius="md"
      withBorder={false}
      style={{
        borderColor: "#F1F3F5",
        backgroundColor: "#FFFFFF",
        minHeight: 420,
      }}>
      {/* Header */}
      <Box mb="md">
        <Text size="md" c="gray.8" fw={600} mb={4}>
          Your Rating
        </Text>
        <Text size="xs" c="gray.5">
          Lorem ipsum dolor sit amet, consectetur
        </Text>
      </Box>

      {/* Bubble Chart Container */}
      <Box
        style={{
          position: "relative",
          height: 340,
          width: "100%",
          marginTop: "1rem",
        }}>
        {ratingData.map((item) => (
          <RatingCircle key={item.label} item={item} scale={scale} />
        ))}
      </Box>
    </Card>
  );
}
