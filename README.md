# 🌾 Fouta Harvest - Smart Agricultural Management Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-98.8%25-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)

**A comprehensive agricultural management platform for the Fouta region of Senegal**

[Live Demo](https://fouta-harvest.vercel.app) • [Features](#-features) • [Tech Stack](#-tech-stack) • [Documentation](#-bachelor-thesis-project)

</div>

---

## 📋 About The Project

**Fouta Harvest** is a complete agricultural management system developed as a **bachelor's thesis project** combining **Computer Science** and **Business Management**. The application enables farmers in Senegal's Fouta region to efficiently manage their agricultural plots, monitor crop health through IoT sensors, track cultivation history, and optimize their farming operations.

This web application was successfully presented as a **final year undergraduate project** (Licence en Informatique) focused on **enterprise management** and deployed to production on **Vercel**: [fouta-harvest.vercel.app](https://fouta-harvest.vercel.app)

### 🎯 Project Objectives

This thesis project demonstrates:

- ✅ **Full-Stack Development**: Modern web application with Next.js 15 and TypeScript
- ✅ **Business Process Management**: Complete agricultural workflow automation
- ✅ **Data Visualization**: Real-time monitoring dashboards and analytics
- ✅ **IoT Integration**: Sensor data management for precision agriculture
- ✅ **User Experience**: Intuitive interface for farmers with varying technical skills
- ✅ **Enterprise Architecture**: Scalable, production-ready codebase

### 🌍 Regional Focus: Fouta, Senegal

The application is specifically designed for the Fouta region, covering areas such as:
- **Matam** - Rice cultivation
- **Podor** - Millet farming
- **Bakel** - Corn production

---

## ✨ Features

### 🗺️ Plot Management (Parcelles)

- **Plot Overview**: View all agricultural plots with key metrics
  - Surface area tracking (hectares)
  - Real-time status monitoring
  - Location-based organization (Matam, Podor, Bakel)
  
- **Detailed Plot Information**:
  - Crop type and variety identification
  - Planting dates and growth stages
  - IoT sensor integration (temperature, humidity, pH, growth)
  - Interactive map view with geolocation

### 📊 Real-Time Monitoring

- **Environmental Data**:
  - 🌡️ **Temperature**: Real-time temperature monitoring (°C)
  - 💧 **Humidity**: Soil moisture levels (%)
  - 🌱 **Growth Rate**: Crop development tracking (cm/day)
  - 🧪 **pH Levels**: Soil acidity monitoring (pH scale)

- **Health Indicators**:
  - Plant health percentage
  - Irrigation requirements
  - Growth readiness alerts

### 📈 Crop History & Analytics

- **Historical Data**:
  - Complete cultivation history by plot
  - Crop rotation tracking
  - Yield performance over time (tons/ha)
  
- **Culture Records**:
  - **Rice** (Nerica L-19, Nerica L-41)
  - **Corn** (Obatampa)
  - **Millet** (Souna 3)
  - **Onions** (Violet de Galmi)
  - **Tomatoes** (Roma VF)

### 📅 Agricultural Calendar

- **Event Management**:
  - Planting schedules
  - Irrigation planning
  - Fertilization tracking
  - Phytosanitary treatments
  - Harvest dates

- **Timeline View**:
  - Chronological activity history
  - Upcoming tasks and reminders
  - Seasonal planning

### 🔐 Authentication & Security

- **Secure Login System**:
  - Cookie-based session management
  - Protected routes with Next.js middleware
  - User authentication persistence
  - Auto-redirect for authenticated users

---

## 🛠️ Tech Stack

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js) | 15.2.4 | React framework with App Router |
| ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) | 19 | UI library |
| ![TypeScript](https://img.shields.io/badge/TypeScript-98.8%25-3178C6?logo=typescript) | Latest | Type-safe development |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?logo=tailwind-css) | 3.x | Utility-first CSS |

### UI Component Library

**shadcn/ui** - Accessible, customizable component system:
- **Radix UI Primitives**: 20+ components (Dialog, Dropdown, Select, etc.)
- **Fully Accessible**: ARIA compliant
- **Dark Mode Ready**: Theme support built-in
- **Customizable**: Tailwind CSS integration

### Form Management & Validation

```json
{
  "react-hook-form": "^7.54.1",
  "@hookform/resolvers": "^3.9.1"
}
```

### Data Visualization

```json
{
  "recharts": "latest",
  "date-fns": "4.1.0"
}
```

### State Management & Utilities

- **React Context**: Authentication state
- **Custom Hooks**: `use-toast`, form handling
- **js-cookie**: Session management
- **lucide-react**: Icon library

### Development Tools

- **TypeScript**: Full type safety
- **ESLint**: Code quality
- **PostCSS**: CSS processing
- **Tailwind Animate**: Animation utilities

---

## 🏗️ Project Architecture

### File Structure

```
fouta-harvest-app/
├── app/                          # Next.js App Router
│   ├── parcelles/               # Plot management pages
│   ├── history/                 # Historical data pages
│   ├── calendar/                # Agricultural calendar
│   └── login/                   # Authentication pages
├── components/                   # React Components
│   ├── parcelles/               # Plot-related components
│   │   ├── header.tsx
│   │   ├── parcelles-list.tsx  # Plot listing
│   │   ├── parcelle-detail.tsx # Detailed plot view
│   │   ├── map-view.tsx        # Geolocation map
│   │   └── historique-data.tsx
│   ├── history/                 # History components
│   │   ├── culture-history.tsx # Crop history
│   │   └── history-timeline.tsx
│   ├── calendar/                # Calendar components
│   │   └── calendar-view.tsx
│   ├── dashboard/               # Dashboard components
│   │   └── bottom-navigation.tsx
│   ├── login-form.tsx           # Authentication form
│   └── ui/                      # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ... (20+ components)
├── contexts/                     # React Context providers
│   └── auth-context.tsx         # Authentication context
├── hooks/                        # Custom React hooks
│   └── use-toast.ts
├── lib/                          # Utility functions
│   └── utils.ts
├── styles/                       # Global styles
│   └── globals.css
├── middleware.ts                 # Next.js middleware (auth)
├── tailwind.config.ts           # Tailwind configuration
└── package.json                 # Dependencies
```

### Data Models

#### Plot (Parcelle)

```typescript
interface Parcelle {
  id: number;
  nom: string;                  // Plot name
  lieu: string;                 // Location (Matam, Podor, Bakel)
  culture: string;              // Current crop
  variete: string;              // Crop variety
  surface: string;              // Surface area (ha)
  dateDebut: string;           // Planting date
  statut: string;              // Current status
  temperature: number;          // Real-time temp (°C)
  humidite: number;            // Humidity (%)
  sante: number;               // Health percentage
  croissance: number;          // Growth rate (cm/day)
  ph: number;                  // Soil pH
}
```

#### Culture History

```typescript
interface CultureHistory {
  id: number;
  culture: string;               // Crop name
  variete: string;              // Variety
  parcelle: string;             // Plot name
  surface: string;              // Surface area
  dateDebut: string;           // Start date
  dateFin: string;             // End date
  rendement: number;           // Yield (tons/ha)
  statut: string;              // Status
  yield: Array<{
    name: string;
    valeur: number;
  }>;
}
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** or **pnpm** (recommended)
- Modern web browser

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/mamadbah2/fouta-harvest-app.git
cd fouta-harvest-app
```

#### 2. Install dependencies

```bash
# Using npm
npm install

# Using pnpm (recommended)
pnpm install
```

#### 3. Run the development server

```bash
# Using npm
npm run dev

# Using pnpm
pnpm dev
```

#### 4. Open your browser

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

### Deploy to Vercel

The application is already deployed at: **[fouta-harvest.vercel.app](https://fouta-harvest.vercel.app)**

For your own deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 🎓 Bachelor Thesis Project

### Academic Information

**Title**: Fouta Harvest - Smart Agricultural Management Platform  
**Field**: Computer Science & Business Management (Licence en Informatique)  
**Focus**: Enterprise Management & Agricultural Technology  
**Year**: 2024-2025  
**Author**: Mamadou Bah [@mamadbah2](https://github.com/mamadbah2)  
**Deployment**: [fouta-harvest.vercel.app](https://fouta-harvest.vercel.app)

### Thesis Objectives

This project demonstrates the integration of:

#### 1. Software Engineering

- ✅ Full-stack web development with Next.js 15
- ✅ Modern JavaScript/TypeScript frameworks
- ✅ Responsive UI/UX design
- ✅ Component-based architecture
- ✅ Production deployment on Vercel

#### 2. Business Management

- ✅ Agricultural business process optimization
- ✅ Resource management and planning
- ✅ Data-driven decision making
- ✅ Operational efficiency improvement
- ✅ Crop yield tracking and analytics

#### 3. Technology Innovation

- ✅ IoT sensor integration concepts
- ✅ Real-time data visualization
- ✅ Geolocation services
- ✅ Cloud-ready architecture
- ✅ Modern web standards (React 19, Next.js 15)

### Key Features Demonstrating Business Management

1. **Plot Management**: Centralized tracking of all agricultural assets
2. **Historical Analysis**: Performance tracking for informed decisions
3. **Calendar Planning**: Scheduling and resource allocation
4. **Sensor Monitoring**: Data-driven crop management
5. **Yield Analytics**: ROI and productivity measurement

---

## 🌾 Agricultural Features

### Supported Crops

| Crop | Varieties | Typical Yield | Growing Season |
|------|-----------|---------------|----------------|
| **Rice** | Nerica L-19, Nerica L-41 | 15-20 tons/ha | Mar - Sep |
| **Corn** | Obatampa | 3-5 tons/ha | Jun - Sep |
| **Millet** | Souna 3 | 2-3 tons/ha | May - Aug |
| **Onions** | Violet de Galmi | 15-18 tons/ha | Oct - Jan |
| **Tomatoes** | Roma VF | 12-15 tons/ha | Jan - Apr |

### IoT Sensor Types

- **Temperature Sensors**: Ambient and soil temperature
- **Humidity Sensors**: Soil moisture monitoring
- **pH Sensors**: Soil acidity measurement
- **Growth Sensors**: Plant height and development

---

## 📱 User Interface

### Dashboard Views

1. **Plot List View**:
   - Overview of all agricultural plots
   - Quick status indicators
   - Temperature, humidity, and health metrics at a glance

2. **Plot Detail View**:
   - Comprehensive plot information
   - Real-time sensor data
   - Historical performance charts

3. **Map View**:
   - Geolocation of all plots
   - Regional context (Matam, Podor, Bakel)
   - Interactive navigation

4. **History View**:
   - Complete cultivation records
   - Yield analysis over time
   - Crop rotation patterns

5. **Calendar View**:
   - Scheduled agricultural activities
   - Timeline of past events
   - Upcoming tasks and reminders

### Color Scheme

Nature-inspired palette for agricultural context:

```css
Primary Green: #114c3a    /* Main brand color - represents agriculture */
Light Green: #f0f9f5      /* Background accents - fresh, clean */
Hover Green: #0d3c2d      /* Interactive elements */
```

---

## 🔐 Authentication System

### Login Credentials (Demo)

```typescript
// Default credentials for demonstration
username: "admin"
password: "password"
```

### Security Features

- **Cookie-based sessions**: Secure user authentication with `js-cookie`
- **Protected routes**: Next.js middleware-based route protection
- **Auto-redirect**: Authenticated users automatically redirected from login
- **Session persistence**: User state maintained across browser sessions

### Middleware Protection

```typescript
// Protected routes require authentication
- /parcelles
- /history
- /calendar

// Public routes
- /login
- / (redirects to /parcelles if authenticated)
```

---

## 📊 Data Visualization

### Charts & Analytics

The application includes various data visualizations using **Recharts**:

- **Yield Performance Charts**: Track harvest quantities over time
- **Growth Progression**: Visualize crop development stages
- **Temperature/Humidity Trends**: Monitor environmental conditions
- **Historical Comparisons**: Compare performance across seasons

### Dashboard Metrics

- **Total Surface Area**: Sum of all plots under cultivation
- **Active Plots**: Number of currently active parcels
- **Average Crop Health**: Overall health percentage
- **Upcoming Harvests**: Schedule of expected harvest dates

---

## 🚧 Future Enhancements

### Planned Features

- [ ] 📱 Mobile application (React Native)
- [ ] 🌐 Multi-language support (French, Wolof, Pulaar)
- [ ] 📊 Advanced analytics and AI-powered insights
- [ ] 🤖 Automated irrigation recommendations
- [ ] 📧 Email/SMS notifications for critical events
- [ ] 💰 Financial management and cost tracking
- [ ] 🛒 Marketplace integration for crop sales
- [ ] 🌦️ Weather API integration
- [ ] 📱 Mobile sensor data upload
- [ ] 🗺️ Satellite imagery integration
- [ ] 📈 Predictive yield modeling
- [ ] 🔄 Multi-farm management

---

## 🎨 Design System

### Component Library

Built with **shadcn/ui** components:
- ✅ Fully accessible (ARIA compliant)
- ✅ Customizable with Tailwind CSS
- ✅ Dark mode ready
- ✅ Responsive by default
- ✅ TypeScript support

### Typography

- **Headings**: Bold, hierarchical structure
- **Body Text**: Clear, readable font sizes
- **Data Display**: Monospaced for numbers
- **Forms**: Clear labels and validation messages

### Responsive Design

- **Mobile First**: Optimized for small screens
- **Tablet**: Enhanced layouts for medium screens
- **Desktop**: Full-featured dashboard experience

---

## 🤝 Contributing

This is an academic project, but suggestions and feedback are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📚 Learning Outcomes

This bachelor's thesis project demonstrates proficiency in:

### Technical Skills

- ✅ **Modern Web Development**: Next.js 15, React 19, TypeScript
- ✅ **UI/UX Design**: Responsive, accessible interfaces
- ✅ **State Management**: React Context, custom hooks
- ✅ **Data Modeling**: Complex business logic implementation
- ✅ **Authentication**: Secure session management
- ✅ **Deployment**: Production deployment on Vercel

### Business Skills

- ✅ **Business Analysis**: Agricultural domain modeling
- ✅ **Process Optimization**: Workflow automation
- ✅ **Resource Management**: Plot and crop tracking
- ✅ **Data Analytics**: Performance measurement and reporting
- ✅ **Project Management**: Full development lifecycle

### Academic Achievements

- ✅ Successfully presented as undergraduate thesis project
- ✅ Deployed to production (Vercel)
- ✅ Demonstrated real-world application of computer science
- ✅ Integrated technology with business management principles

---

## 📄 License

This project is developed for educational purposes as part of a bachelor's thesis.

---

## 📧 Contact

**Mamadou Bah** - [@mamadbah2](https://github.com/mamadbah2)

**Project Links:**
- GitHub Repository: [https://github.com/mamadbah2/fouta-harvest-app](https://github.com/mamadbah2/fouta-harvest-app)
- Live Application: [https://fouta-harvest.vercel.app](https://fouta-harvest.vercel.app)

---

## 🙏 Acknowledgments

- **Academic Advisors**: For guidance throughout the thesis process
- **Fouta Region Farmers**: For domain expertise and requirements
- **Next.js Team**: For the powerful React framework
- **Vercel**: For seamless deployment platform
- **shadcn/ui**: For the excellent component library
- **Open Source Community**: For the amazing tools and libraries

---

<div align="center">

**🎓 Developed as a Bachelor's Thesis Project in Computer Science & Business Management 🎓**

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-98.8%25-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel&logoColor=white&style=for-the-badge)

**🌾 Empowering Senegalese Agriculture with Technology 🌾**

**⭐ If this project helped you, please give it a star! ⭐**

</div>
