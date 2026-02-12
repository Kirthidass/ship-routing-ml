// Shared types for the Ship Routing App

export interface WeatherInfo {
  position: [number, number];
  weather: {
    wind_speed: number;
    wind_direction: number;
    wave_height: number;
    wave_period: number;
    temperature: number;
    visibility: number;
    weather_condition: string;
    humidity: number;
    pressure: number;
  };
}

export interface RouteOptimizationResult {
  optimized_route: [number, number][];
  total_distance_km: number;
  travel_time_hours: number;
  weather_forecast?: WeatherInfo[];
  route_method: 'ML' | 'Physics-based';
  waypoints_count: number;
  estimated_savings_km: number;
  direct_distance_km: number;
}

export interface ErrorResponse {
  error: string;
}

export interface ModelStatus {
  ml_model_ready: boolean;
  weather_service_ready: boolean;
  fallback_available: boolean;
}

export interface EnhancedLeafletMapProps {
  route: [number, number][] | null;
  weatherForecast?: WeatherInfo[];
  showWeather: boolean;
  startPort: [number, number] | null;
  endPort: [number, number] | null;
  isSelectingLocation: 'start' | 'end' | null;
  onLocationSelect: (location: [number, number]) => void;
  zoomToLocation: [number, number] | null;
  searchResults: [number, number][];
  defaultCenter: [number, number];
  defaultZoom: number;
}
