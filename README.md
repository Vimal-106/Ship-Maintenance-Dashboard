# Ship Maintenance Dashboard

## Overview
A web-based **Ship Maintenance Dashboard** built with **React** that helps manage ships, their components, and maintenance jobs. It supports multiple user roles (**Admin**, **Inspector**, **Engineer**) with role-based access control, a calendar view for maintenance jobs, and in-app notifications.

## Features
- **User Authentication** (Simulated with hardcoded users)
- **Role-Based Access Control** for Admin, Inspector, and Engineer
- **Ships Management:** List, create, edit, delete ships
- **Components & Maintenance Jobs Management**
- **Maintenance Calendar** showing scheduled jobs
- **In-App Notification Center**
- **Responsive design** for mobile, tablet, and desktop
- **State persistence** using localStorage (no backend)

## Tech Stack
- React (Functional components, React Router v6)
- Context API for state management
- Material-UI for UI components and styling
- localStorage for data persistence
- JavaScript (no TypeScript)

## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vimal-106/Ship-Maintenance-Dashboard.git
   cd ship-maintenance-dashboard
2. **Install project dependencies**
   ```bash
   npm install
3. **Start the development server**
   ```bash
   npm start
4. **Open the application in your browser**
   ```bash
   http://localhost:3000
5. **Login with hardcoded user credentials**

   | Role      | Email              | Password     |
   |-----------|--------------------|--------------|
   | Admin     | admin@entnt.in     | admin123     |
   | Inspector | inspector@entnt.in | inspect123   |
   | Engineer  | engineer@entnt.in  | engineer123  |

   ## 🌐 Live Demo

   You can try the live deployed version here:  
   👉 [Live App Link](http://ship-maintenance-dashboard-sigma.vercel.app/)


