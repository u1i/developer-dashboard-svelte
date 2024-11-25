# Developer Dashboard

A modern, responsive developer dashboard built with Svelte that provides a comprehensive interface for managing API integrations, testing endpoints, and monitoring usage.

## Features

### 🔮 API Playground
- Interactive API testing interface
- Multiple AI model selection (GPT-4, GPT-3.5, Claude-2)
- Adjustable parameters (temperature, max tokens)
- Real-time Python code generation
- Code copying functionality

### 🔑 API Key Management
- Generate API tokens with custom names
- View and manage active tokens
- Secure token revocation
- Copy token functionality

### 📊 Usage Analytics
- Real-time API usage statistics
- Response time metrics
- Success/error rate monitoring
- Interactive charts and graphs
- Daily/weekly/monthly usage breakdown

### 👤 Profile Management
- Account information overview
- Membership details
- Password management
- Billing integration
- Data export options
- Account deletion

### 🎨 User Interface
- Modern, responsive design
- Light/Dark theme toggle
- Tabbed interface for easy navigation
- Consistent styling across components
- Mobile-friendly layout

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd developer-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Development

### Project Structure
```
src/
├── lib/
│   ├── components/
│   │   ├── Analytics.svelte    # Usage analytics dashboard
│   │   ├── ApiPlayground.svelte # API testing interface
│   │   ├── ApiToken.svelte     # Token management
│   │   ├── Navbar.svelte      # Navigation bar with theme toggle
│   │   ├── Profile.svelte     # User profile management
│   │   └── Tabs.svelte        # Tab navigation
│   └── stores/
│       ├── theme.js           # Theme state management
│       └── tabs.js           # Tab state management
├── App.svelte                # Main application component
└── main.js                  # Application entry point
```

### Building for Production

To create a production build:
```bash
npm run build
```

The build output will be in the `dist` directory.

## Customization

### Theme
The application uses CSS variables for theming. You can customize the colors by modifying the variables in `app.css`:

```css
:root[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f8f9fa;
  --text-primary: #212529;
  --text-secondary: #6c757d;
  --accent-primary: #0d6efd;
  ...
}
```

### API Integration
To integrate with your backend API:
1. Replace the mock API calls in each component with your actual API endpoints
2. Add proper authentication
3. Implement real-time data updates for analytics
4. Add proper error handling for API calls

### Adding New Features
The tabbed interface makes it easy to add new features:
1. Create a new component in `src/lib/components/`
2. Add the tab definition in `Tabs.svelte`
3. Add the route in `App.svelte`

## Technologies Used

- Svelte - Frontend framework
- Vite - Build tool and development server
- Chart.js - Interactive charts and graphs
- CSS Variables - Theming system
- CSS Grid/Flexbox - Responsive layout
