# Beat

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

---

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

---

## Index.html and main.ts

- **main.ts**: Bootstraps the Angular application by initializing the root module (`AppModule`).
- **index.html**: Provides the base HTML structure and serves as the host for the Angular application, with the root component (`<app-root>`) as the entry point for rendering.

---

## About App Component

### app.module.ts:
- The root module of the Angular application.
- Declares all components (`AppComponent`, `HeaderComponent`, `DashboardComponent`, etc.).
- Imports essential modules like `BrowserModule` and `HttpClientModule`.
- Bootstraps the `AppComponent` as the root component.

### app.component.ts:
- The root component of the application.
- Contains the main structure of the app and serves as the entry point for rendering child components.

### app.component.html:
- Defines the layout of the root component.
- Includes the header (`<app-header>`), a heading section, and the dashboard (`<app-dashboard>`).

### app.component.scss:
- Styles for the root component.
- Includes styling for the container, sticky header, and heading text with hover effects.

### app.service.ts:
- Provides a service for making HTTP requests.
- Contains a `getData()` method to fetch trending playlist data from an API.

---

## About Dashboard Component

The **Dashboard Component** (`DashboardComponent`) is responsible for managing and displaying the main content of the application. 

### Key Features:
1. **Loader**:
   - Displays a transparent overlay with a spinning loader while data is being fetched from the API.

2. **Explore Section**:
   - Contains a heading ("Explore Beats") and a refresh button to reload the data.

3. **Filters**:
   - Provides multiple filter buttons (e.g., "Trending Beats," "Wave under ₹999") to filter the displayed beats.
   - Highlights the active filter and applies hover effects for better interactivity.

4. **View Toggle**:
   - Allows users to switch between list view (`<app-record-list>`) and grid view (`<app-record-grid>`).

5. **Data Fetching**:
   - Fetches beats data from the API using the `AppService`.
   - Maps the API response to display relevant details such as title, artist, BPM, genre, and price.

6. **Responsive Design**:
   - Ensures the layout adapts to different screen sizes for a seamless user experience.

This component serves as the core of the application, providing functionality to explore, filter, and view beats in different formats.

---

## About Header Component

The **Header Component** (`HeaderComponent`) is responsible for rendering the top navigation bar of the application.

### Key Features:
1. **Logo Section**:
   - Displays the application logo with a clickable area for navigation.

2. **Search Area**:
   - Contains a search input field for users to search beats.
   - Includes a dropdown menu with options like "General," "Beat," "Tag," "Mood," "Genre," etc., to filter the search.

3. **Authentication Buttons**:
   - Provides a "Sign In" button with a hover effect.
   - Includes a "Start Selling" button styled with a gradient background for emphasis.

4. **Responsive Design**:
   - The search area is hidden on smaller screens (`max-width: 768px`) for better responsiveness.

This component serves as the primary navigation and search interface for the application.

---

## About Record Grid and Record List Components

### Record List Component:
- **Purpose**: Displays a list of records in a vertical layout.

### Key Features:
1. Each record includes a play button, image, title, genre, BPM, key, tags, price, and a three-dot menu for additional options (Share, Download, Favorite).
2. Uses `*ngFor` to dynamically render records from the `data` input.
3. Implements a dropdown menu for the three-dot options, which toggles visibility when clicked.
4. Includes a `@HostListener` to close the dropdown when clicking outside.

---

### Record Grid Component:
- **Purpose**: Displays records in a grid layout with a focus on visual presentation.

### Key Features:
1. Each record includes an image, play button, title, genre, BPM, price, and a three-dot menu for additional options (Share, Favorite).
2. Uses `*ngFor` to dynamically render records from the `data` input.
3. Implements a dropdown menu for the three-dot options, which toggles visibility when clicked.
4. Includes a `@HostListener` to close the dropdown when clicking outside.

---

### Similarities Between Record List and Record Grid Components:

1. **Data Handling**:
   - Both components use the `@Input` decorator to receive the `data` array dynamically.
   - Each record in the `data` array is rendered using `*ngFor`.

2. **Dropdown Menu**:
   - Both components include a three-dot menu for additional options.
   - The dropdown menu toggles visibility using the `toggleOptions` method.
   - A `@HostListener` is implemented in both components to close the dropdown when clicking outside.

3. **Interactivity**:
   - Both components include a play button for each record.
   - The dropdown menu provides actions like Share, Download (in Record List), and Favorite.

4. **Styling**:
   - Both components use CSS for hover effects, dropdown styling, and responsive design.

5. **Reusability**:
   - Both components are designed to be reusable and can display records in different layouts (list or grid) based on the parent component's requirements.

---

## About Search and Filters Component

The **Search and Filters Component** (`SearchAndFiltersComponent`) provides functionality for searching and filtering beats, as well as toggling between list and grid views.

### Key Features:
1. **Search Bar**:
   - Includes an input field for users to search beats.
   - Displays a search icon for better visual representation.

2. **View Toggle**:
   - Allows users to switch between list view and grid view using toggle buttons.
   - Emits an event (`viewChange`) to notify the parent component of the selected view.

3. **Filters**:
   - Provides dropdown menus for various filter categories (e.g., Beat Types, Moods, Tempo, Genre, Keys, Instruments, Price).
   - Each dropdown includes a search input and checkboxes for selecting filter options.

4. **Sort Options**:
   - Allows users to sort beats by options like "For you" or "Latest."
   - Displays a dropdown menu for selecting the sort option.

5. **Dropdown Management**:
   - Uses `toggleDropdown` and `toggleSortDropdown` methods to manage the visibility of filter and sort dropdowns.
   - Implements a `@HostListener` to close dropdowns when clicking outside.

6. **Responsive Design**:
   - Ensures the layout adapts to different screen sizes for a seamless user experience.

This component serves as a central interface for refining search results and customizing the display of beats, making it an essential part of the application's user experience.
