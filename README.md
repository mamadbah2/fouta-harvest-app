# 🌾 Fouta Harvest - Smart Agricultural Management Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-98.8%25-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

**A comprehensive web application for managing agricultural plots in the Fouta region of Senegal**

**Bachelor's Thesis Project - Computer Science & Business Management**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Architecture](#-architecture) • [Getting Started](#-getting-started) • [Project Context](#-project-context)

</div>

---

## 📋 About The Project

**Fouta Harvest** is a complete agricultural management system developed as a bachelor's thesis project combining **Computer Science** and **Business Management**. The application enables farmers in Senegal's Fouta region to efficiently manage their agricultural plots, monitor crop health through IoT sensors, track cultivation history, and optimize their farming operations.

### 🎯 Project Objectives

This thesis project demonstrates:

- ✅ **Full-Stack Development**: Modern web application with Next.js and TypeScript
- ✅ **Business Process Management**: Complete agricultural workflow automation
- ✅ **Data Visualization**: Real-time monitoring dashboards and analytics
- ✅ **IoT Integration**: Sensor data management for precision agriculture
- ✅ **User Experience**: Intuitive interface for farmers with varying technical skills
- ✅ **Enterprise Architecture**: Scalable, maintainable codebase

### 🌍 Regional Focus: Fouta, Senegal

The application is specifically designed for the Fouta region, covering areas such as:
- **Matam** - Rice cultivation
- **Podor** - Millet farming
- **Bakel** - Corn production

---

## ✨ Features

### 🗺️ Plot Management (Parcelles)

- **Plot Overview**: View all agricultural plots with key metrics
  - Surface area tracking
  - Real-time status monitoring
  - Location-based organization
  
- **Detailed Plot Information**:
  - Crop type and variety
  - Planting dates and growth stages
  - IoT sensor integration (temperature, humidity, pH, growth)
  - Interactive map view with geolocation

### 📊 Real-Time Monitoring

- **Environmental Data**:
  - 🌡️ **Temperature**: Real-time temperature monitoring
  - 💧 **Humidity**: Soil moisture levels
  - 🌱 **Growth Rate**: Crop development tracking
  - 🧪 **pH Levels**: Soil acidity monitoring

- **Health Indicators**:
  - Plant health percentage
  - Irrigation requirements
  - Growth readiness alerts

### 📈 Crop History & Analytics

- **Historical Data**:
  - Complete cultivation history by plot
  - Crop rotation tracking
  - Yield performance over time
  
- **Culture Records**:
  - Rice (Nerica L-19, Nerica L-41)
  - Corn (Obatampa)
  - Millet (Souna 3)
  - Onions (Violet de Galmi)
  - Tomatoes (Roma VF)

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
  - Protected routes with middleware
  - User authentication persistence

---

## 🛠️ Tech Stack

### Frontend Technologies

| Technology | Version | Purpose |
|------------|---------|---------|
| ![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js) | 15.2.4 | React framework with SSR |
| ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react) | 19 | UI library |
| ![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178C6?logo=typescript) | Latest | Type-safe development (98.8%) |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind-Latest-38B2AC?logo=tailwind-css) | Latest | Utility-first CSS (1.1%) |

### UI Component Library

**Radix UI** - Accessible, unstyled component primitives:
```json
{
  "accordion", "alert-dialog", "avatar", "checkbox", "dialog",
  "dropdown-menu", "label", "popover", "select", "tabs",
  "toast", "tooltip", "and more..."
}
```

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

```json
{
  "js-cookie": "^3.0.5",
  "next-themes": "^0.4.4",
  "sonner": "^1.7.1",
  "lucide-react": "^0.454.0"
}
```

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
  nom: string;                    // e.g., "Champ Riz Nord"
  surface: string;                // e.g., "3.2 ha"
  statut: string;                 // Growth status
  temperature: number;            // °C
  humidite: number;              // %
  sante: number;                 // Health %
  emplacement: string;           // Location in Senegal
  typeCulture: string;           // Crop type
  dateDebut: string;             // Start date
  capteurs: {
    nombre: number;
    types: string[];
  };
  donnees: {
    temperature: number;
    humidite: number;
    croissance: number;
    ph: number;
  };
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

---

## 🎓 Project Context

### Bachelor's Thesis Information

**Title**: Fouta Harvest - Smart Agricultural Management Platform  
**Field**: Computer Science & Business Management  
**Institution**: [Your University Name]  
**Year**: 2024-2025  
**Author**: Mamadou Bah [@mamadbah2](https://github.com/mamadbah2)

### Thesis Objectives

This project demonstrates the integration of:

1. **Software Engineering**:
   - Full-stack web development
   - Modern JavaScript/TypeScript frameworks
   - Responsive UI/UX design
   - Component-based architecture

2. **Business Management**:
   - Agricultural business process optimization
   - Resource management and planning
   - Data-driven decision making
   - Operational efficiency improvement

3. **Technology Innovation**:
   - IoT sensor integration concepts
   - Real-time data visualization
   - Geolocation services
   - Cloud-ready architecture

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

- 🌡️ **Temperature Sensors**: Monitor ambient and soil temperature
- 💧 **Humidity Sensors**: Track soil moisture levels
- 🧪 **pH Sensors**: Measure soil acidity/alkalinity
- 🌱 **Growth Sensors**: Monitor plant development
- ☀️ **Light Sensors**: Track sunlight exposure

---

## 📱 User Interface

### Dashboard Views

1. **Plot List View**:
   - Overview of all agricultural plots
   - Quick status indicators
   - Temperature, humidity, and health metrics

2. **Plot Detail View**:
   - Comprehensive plot information
   - Real-time sensor data
   - Historical performance charts

3. **Map View**:
   - Geolocation of all plots
   - Regional context (Matam, Podor, Bakel)

4. **History View**:
   - Complete cultivation records
   - Yield analysis over time
   - Crop rotation patterns

5. **Calendar View**:
   - Scheduled agricultural activities
   - Timeline of past events
   - Upcoming tasks and reminders

### Color Scheme

The application uses a nature-inspired color palette:

```css
Primary Green: #114c3a    /* Main brand color */
Light Green: #f0f9f5      /* Background accents */
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

- **Cookie-based sessions**: Secure user authentication
- **Protected routes**: Middleware-based route protection
- **Auto-redirect**: Authenticated users redirected from login
- **Session persistence**: User state maintained across sessions

---

## 📊 Data Visualization

### Charts & Analytics

The application includes various data visualizations:

- **Yield Performance Charts**: Track harvest quantities over time
- **Growth Progression**: Visualize crop development stages
- **Temperature/Humidity Trends**: Monitor environmental conditions
- **Historical Comparisons**: Compare performance across seasons

### Dashboard Metrics

- Total surface area under cultivation
- Number of active plots
- Average crop health percentage
- Upcoming harvest schedule

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

---

## 🎨 Design System

### Component Library

Built with **shadcn/ui** components:
- Fully accessible (ARIA compliant)
- Customizable with Tailwind CSS
- Dark mode ready
- Responsive by default

### Typography

- **Headings**: Bold, hierarchical
- **Body Text**: Clear, readable
- **Data Display**: Monospaced for numbers

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

This project demonstrates proficiency in:

- ✅ **Modern Web Development**: Next.js, React 19, TypeScript
- ✅ **UI/UX Design**: Responsive, accessible interfaces
- ✅ **State Management**: React Context, custom hooks
- ✅ **Data Modeling**: Complex business logic implementation
- ✅ **Authentication**: Secure session management
- ✅ **Business Analysis**: Agricultural domain modeling
- ✅ **Project Management**: Full development lifecycle

---

## 📄 License

This project is developed for educational purposes as part of a bachelor's thesis.

---

## 📧 Contact

**Mamadou Bah**  
GitHub: [@mamadbah2](https://github.com/mamadbah2)

Project Link: [https://github.com/mamadbah2/fouta-harvest-app](https://github.com/mamadbah2/fouta-harvest-app)

---

## 🙏 Acknowledgments

- **Fouta Region Farmers**: For domain expertise and requirements
- **Academic Advisors**: For guidance and support
- **Open Source Community**: For amazing tools and libraries
- **Senegalese Agricultural Research**: For crop data and best practices

---

<div align="center">

**🎓 Bachelor's Thesis Project - Computer Science & Business Management 🎓**

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?logo=next.js&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-98.8%25-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Agriculture](https://img.shields.io/badge/Agriculture-Senegal-success?style=for-the-badge)

**🌾 Empowering Farmers in Senegal with Technology 🌾**

**⭐ If you find this project interesting, please give it a star! ⭐**

</div>
