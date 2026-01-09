# Food Dashboard - Project Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Technology Stack](#technology-stack)
4. [Setup & Installation](#setup--installation)
5. [Running the Project](#running-the-project)
6. [Components Guide](#components-guide)
7. [Theme & Styling](#theme--styling)
8. [Color Palette](#color-palette)
9. [File Structure](#file-structure)
10. [Key Features](#key-features)

---

## Project Overview

**Food Dashboard** is a modern, responsive restaurant/food business analytics dashboard built with Next.js 16 and React 19. It provides real-time insights into business metrics including revenue, orders, ratings, and customer behavior through interactive charts and visualizations.

### Purpose

- Monitor restaurant business performance
- Track revenue trends and order patterns
- Display customer satisfaction ratings
- Visualize most popular menu items

---

## Project Structure

```
food_dashboard/
├── app/
│   ├── config/
│   │   └── theme.ts                 # Mantine theme configuration
│   ├── dashboard/
│   │   └── components/
│   │       ├── SideBar.tsx           # Main navigation sidebar
│   │       ├── NavBar.tsx            # Top navigation bar
│   │       ├── RevenueCahrt.tsx      # Revenue bar chart
│   │       ├── OrderTimeChart.tsx    # Order timing pie chart
│   │       ├── RatingChart.tsx       # Customer ratings visualization
│   │       ├── MostOrderedFood.tsx   # Popular food items table
│   │       └── Orders.tsx            # Orders line chart
│   ├── hooks/                        # Custom React hooks
│   ├── layout.tsx                    # Root layout with Mantine provider
│   ├── page.tsx                      # Main dashboard page
│   ├── not-found.tsx                 # 404 error page
│   ├── loading.tsx                   # Loading skeleton component
│   ├── globals.css                   # Global styles
│   └── favicon.ico
├── public/                           # Static assets
├── node_modules/                     # Dependencies
├── package.json                      # Project dependencies
├── package-lock.json                 # Lock file
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.mjs                # PostCSS configuration
├── eslint.config.mjs                 # ESLint configuration
└── README.md                         # Project README

```

---

## Technology Stack

### Core Framework

- **Next.js**: ^16.1.1 - React metaframework for production
- **React**: 19.2.3 - UI library
- **React DOM**: 19.2.3 - React package for working with the DOM

### UI & Component Library

- **Mantine Core**: ^8.3.11 - React components library with built-in styling
- **Mantine Hooks**: ^8.3.11 - Custom hooks for Mantine

### Data Visualization

- **Recharts**: ^3.6.0 - Composable charting library for React

### Icons

- **Lucide React** - Modern SVG icon library

### Styling

- **Tailwind CSS**: ^4 - Utility-first CSS framework
- **PostCSS**: ^8.5.6 - CSS transformation tool
- **PostCSS Preset Mantine**: ^1.18.0 - PostCSS plugin for Mantine
- **PostCSS Simple Vars**: ^7.0.1 - PostCSS plugin for CSS variables

### Development Tools

- **TypeScript**: ^5 - JavaScript with static typing
- **ESLint**: ^9 - JavaScript linter
- **Node.js**: ^20

---

## Setup & Installation

### Prerequisites

- Node.js 18+ and npm installed
- Git for version control

### Installation Steps

```bash
# 1. Clone or navigate to the project directory
cd food_dashboard

# 2. Install dependencies
npm install

# 3. Verify installation
npm list next react recharts @mantine/core
```

### Environment Setup (if needed)

Create a `.env.local` file in the root directory (currently not required for this project):

```env
# Add any environment variables here
```

---

## Running the Project

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
```

Compiles the project for production.

### Production Server

```bash
npm start
```

Runs the production-built application.

### Linting

```bash
npm run lint
```

Checks code for linting errors and warnings.

---

## Components Guide

### 1. **SideBar Component** (`app/dashboard/components/SideBar.tsx`)

**Purpose**: Main navigation sidebar for the dashboard.

**Features**:

- Logo section with "GOODFOOD" branding
- Two navigation sections: "Menu" and "Others"
- Active route highlighting
- Hover effects for better UX
- Responsive design with mobile support

**Menu Items**:

- Dashboard - Main dashboard view
- Food Order - Order management
- Manage Menu - Menu administration
- Customer Review - Review management
- Settings - App settings
- Payment - Payment management
- Accounts - Account management
- Help - Help section

**Technical Details**:

- Uses `usePathname()` from Next.js for active route detection
- Uses `useLayoutEffect` with mounted state to prevent hydration mismatches
- Implements hover state for menu items
- Color scheme: Primary (#5063F0), Secondary (#868E96)

**Key Props**: None (self-contained)

---

### 2. **NavBar Component** (`app/dashboard/components/NavBar.tsx`)

**Purpose**: Top navigation bar with search, user menu, and notifications.

**Features**:

- Search input with icon
- User profile menu dropdown
- Notification bell with badge indicator
- Settings and logout options
- Responsive layout

**Key Elements**:

- **Search Box**: Placeholder "Search" with search icon
- **User Menu**:
  - Displays "Delicious Burger" restaurant name
  - Dropdown with Settings and Logout options
  - Custom burger SVG icon
- **Notification Bell**: With red badge indicator

**Colors**:

- Background: White
- Icons: #868E96 (gray)
- Primary action: #5063F0 (blue)

**Technical Details**:

- Uses Mantine's Menu component for dropdown
- SVG burger icon embedded inline
- Hover states on menu trigger button
- Fixed sticky positioning on main page

---

### 3. **RevenueChart Component** (`app/dashboard/components/RevenueCahrt.tsx`)

**Purpose**: Displays revenue trends over time.

**Chart Type**: Bar Chart (Recharts library)

**Data Displayed**:

- Sales from December 1-12, 2020
- Two data series:
  - Last Week (gray bars)
  - Last 6 Days (blue bars)
- Total Revenue: IDR 7.852.000
- Trend: +2.1% vs last week (green indicator)

**Features**:

- Comparative bar chart
- Custom legend showing both data series
- Tooltip on hover
- View Report button
- Responsive container

**Colors**:

- Last Week bars: #5A6ACF (light blue)
- Last 6 Days bars: #E9ECEF (light gray)
- Positive trend: #20C997 (green)

**Data Structure**:

```typescript
{
  day: string,        // "01" to "12"
  lastWeek: number,   // Revenue value
  last6Days: number   // Revenue value
}
```

---

### 4. **OrderTimeChart Component** (`app/dashboard/components/OrderTimeChart.tsx`)

**Purpose**: Shows distribution of orders by time of day.

**Chart Type**: Donut/Ring Pie Chart

**Data Displayed**:

- **Afternoon**: 40% (1:00 PM - 4:00 PM, 1890 orders)
- **Evening**: 32% (5:00 PM - 8:00 PM, 1520 orders)
- **Morning**: 28% (9:00 AM - 12:00 PM, 1330 orders)

**Features**:

- Interactive donut chart
- Custom tooltip showing time period and order count
- Interactive legend that highlights chart segments on hover
- Brightness effect on hover
- Date range display

**Colors**:

- Afternoon: #3D45CF (dark blue)
- Evening: #8F9AFF (light blue)
- Morning: #DDE1FF (very light blue)

**Custom Tooltip**:

- Dark background (#2D3748)
- Shows period name, time range, and order count
- Appears on pie slice hover

---

### 5. **RatingChart Component** (`app/dashboard/components/RatingChart.tsx`)

**Purpose**: Displays customer satisfaction ratings across different dimensions.

**Rating Dimensions**:

- **Hygiene**: 85% - Blue (#8F9AFF)
- **Food Taste**: 85% - Orange (#FFA94D)
- **Packaging**: 92% - Cyan (#22B8CF)

**Features**:

- Three animated progress circles with labels
- Hover effects (scale 1.05, enhanced shadow)
- Percentage display inside circles
- Responsive positioning on canvas
- Color-coded categories

**Technical Details**:

- Uses SVG for progress ring visualization
- SVG circles with stroke-dasharray for progress
- Absolute positioning for layout
- Color-specific box shadows
- Smooth transition animations (1s ease)

**Component Structure**:

- `RatingCircle`: Subcomponent for individual rating circles
- Supports responsive scaling (commented out)
- CSS transition effects on hover

---

### 6. **MostOrderedFood Component** (`app/dashboard/components/MostOrderedFood.tsx`)

**Purpose**: Displays the most popular food items ordered.

**Data Displayed**:

1. Fresh Salad Bowl - IDR 45.000
2. Chicken Noodles - IDR 75.000
3. Smoothie Fruits - IDR 45.000
4. Hot Chicken Wings - IDR 45.000

**Features**:

- Table layout with images and prices
- Avatar images from Unsplash
- Clean, minimalist design
- Border separators between items
- Right-aligned pricing

**Table Structure**:

- Left column: Food image (Avatar) + Name
- Right column: Price (right-aligned)

**Styling**:

- Borders: #F1F3F5 (light gray)
- Text color: #868E96 (secondary gray)
- Padding: 12px vertical
- Box shadow on images: subtle (rgba 0.05)

---

### 7. **Orders Component** (`app/dashboard/components/Orders.tsx`)

**Purpose**: Displays order trends comparison.

**Chart Type**: Line Chart (Recharts library)

**Data Displayed**:

- Orders from December 1-6, 2020
- Two data series:
  - Last Week (gray line)
  - Last 6 Days (blue line)
- Total Orders: 2.568
- Trend: -2.1% vs last week (red indicator - downward)

**Features**:

- Sharp linear lines (not smooth curves)
- Interactive tooltip
- Custom legend
- View Report button
- Responsive container

**Colors**:

- Last 6 Days line: #5063F0 (primary blue)
- Last Week line: #E9ECEF (light gray)
- Negative trend: #FF5252 (red)

**Chart Configuration**:

- Type: "linear" (creates sharp angles)
- Stroke width: 3px
- Dot radius: 4px
- Active dot radius: 6px

---

## Theme & Styling

### Mantine Theme Configuration (`app/config/theme.ts`)

The dashboard uses a custom Mantine theme with the following settings:

#### Primary Colors

```typescript
blue: [
  "#EEF0FF",
  "#DDE1FF",
  "#B8BFFF",
  "#8F9AFF",
  "#6B7AFF",
  "#5063F0",
  "#4855E8",
  "#3D45CF",
  "#353CB8",
  "#2D33A1",
];
```

#### Additional Color Palettes

- **Orange**: Warm accent colors
- **Cyan**: Cool accent colors
- **Green**: Success/positive indicators
- **Red**: Error/negative indicators
- **Violet**: Alternative primary colors
- **Gray**: Neutral colors for text and backgrounds

#### Typography

- **Font Family**: Inter (with system fallbacks)
- **Font Sizes**:
  - xs: 11px
  - sm: 13px
  - md: 14px (default)
  - lg: 16px
  - xl: 18px

#### Spacing Scale

- xs: 8px
- sm: 12px
- md: 16px
- lg: 24px
- xl: 32px

#### Border Radius Scale

- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 20px

#### Component Defaults

- **Card**: Light border, white background, subtle shadow
- **Button**: Medium radius, medium font weight
- **Input**: Light gray background, focus state with blue border
- **NavLink**: Border radius 8px, active state with purple background

---

## Color Palette

### Primary Colors

| Color           | Hex     | Usage                                |
| --------------- | ------- | ------------------------------------ |
| Primary Blue    | #5063F0 | Main action color, links, highlights |
| Dark Blue       | #3D45CF | Charts, emphasis                     |
| Light Blue      | #8F9AFF | Secondary elements                   |
| Very Light Blue | #DDE1FF | Backgrounds, borders                 |

### Status Colors

| Color            | Hex     | Usage                           |
| ---------------- | ------- | ------------------------------- |
| Success (Green)  | #20C997 | Positive trends, success states |
| Danger (Red)     | #FF5252 | Negative trends, errors         |
| Warning (Orange) | #FFA94D | Warnings, attention needed      |
| Info (Cyan)      | #22B8CF | Information, secondary data     |

### Neutral Colors

| Color       | Hex     | Usage             |
| ----------- | ------- | ----------------- |
| Background  | #F8F9FA | Light backgrounds |
| Light Gray  | #E9ECEF | Borders, dividers |
| Medium Gray | #ADB5BD | Secondary text    |
| Dark Gray   | #495057 | Primary text      |

---

## File Structure Details

### `app/layout.tsx` - Root Layout

- Configures Mantine Provider with custom theme
- Sets up global fonts (Geist Sans/Mono)
- Handles HTML language and meta configuration
- Suppresses hydration warnings

### `app/page.tsx` - Main Dashboard

- AppShell layout with responsive sidebar
- Grid-based component layout
- Sticky navbar implementation
- Responsive breakpoints: mobile, tablet (md), desktop

### `app/not-found.tsx` - 404 Page

- Clean error page design
- Centered layout with large 404 text
- Blue primary color scheme
- Button to return to dashboard

### `app/loading.tsx` - Loading Skeleton

- Skeleton loaders matching all dashboard components
- Uses Mantine Skeleton component
- Shows loading state for each chart and section
- Responsive grid layout matching main page

### `app/globals.css` - Global Styles

- Base styles for the entire application
- CSS variables and custom properties

---

## Key Features

### 1. **Responsive Design**

- Mobile-first approach
- Breakpoints: sm (640px), md (1024px)
- Flexible grid layout
- Sidebar collapses on mobile

### 2. **Interactive Charts**

- Four different chart types: Bar, Line, Pie, Progress
- Hover interactions with tooltip and highlighting
- Custom legends with interactive elements
- Smooth animations and transitions

### 3. **Data Visualization**

- Multiple metrics: Revenue, Orders, Time Distribution, Ratings
- Color-coded data series for easy comparison
- Trend indicators (up/down percentages)
- Product-specific data (food items with images)

### 4. **User Experience**

- Sticky navbar for persistent access
- Consistent color scheme throughout
- Clear information hierarchy
- Professional design aesthetic

### 5. **Navigation**

- Eight main navigation items
- Clear menu categories
- Active state highlighting
- User menu dropdown

### 6. **Performance**

- Server-side rendering with Next.js
- Code splitting and lazy loading
- Responsive image handling
- Optimized bundle size

### 7. **Type Safety**

- Full TypeScript implementation
- Typed component props
- Typed data structures
- Strict ESLint configuration

---

## Troubleshooting

### Build Issues

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run build
```

### Port Already in Use

```bash
# Change port for dev server
npm run dev -- -p 3000
```

### TypeScript Errors

```bash
# Rebuild TypeScript
npm run build
```

---

## Conclusion

The Food Dashboard is a modern, feature-rich analytics dashboard suitable for restaurant management. It demonstrates best practices in React development, responsive design, and data visualization. The codebase is well-structured, typed, and ready for further development and customization.
