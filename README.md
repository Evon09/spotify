# Spotify Clone

This project is a **Spotify** clone built with **React**, **Chakra UI**, **TypeScript**, **Yup**, and **React Icons**. It simulates basic Spotify functionality, including login screen, music/artist search, and a simple music player.

## 📌 Technologies Used

- **React**: Used to build the user interface, as it is one of the most popular and efficient libraries for creating dynamic applications.

- **TypeScript**: Chosen to add static typing to the code, helping to avoid errors and making the development process safer.

- **Chakra UI**: A UI framework used to create beautiful and responsive interfaces easily. It was chosen because of my experience using it in previous projects.

- **Yup**: A library for form validation, making it easier to check if the data entered by the user is correct.

- **React Icons**: Used for icons, providing a simple and lightweight way to add custom icons to the application.


## 🚀 How to Run the Project

### 1️⃣ Clone the Repository

```sh
 git clone https://github.com/Evon09/spotify.git
 cd spotify
```

### 2️⃣ Install the Dependencies

```sh
 npm install  # or yarn install
```

### 3️⃣ Run the Project

```sh
 npm run dev  # or yarn dev
```

The application will start at [http://localhost:3000](http://localhost:5173/).
You can also access the deployed version [here](https://spotify-clone-rust-omega.vercel.app/)

## 📂 Project Structure

```
/src
  ├── assets             # Static files such as images, fonts, and icons
  │   ├── Fonts
  │   ├── Icons
  ├── auth               # Authentication logic (login, logout, etc.)
  ├── components         # Reusable components across the app
  │   ├── login          # Components related to the login screen
  │   │   ├── loginForm.tsx
  │   │   ...
  │   ├── home           # Components for the home screen (e.g., Search button)
  │   │   ├── playListCards.tsx
  │   │   ...
  │   ├── common         # Common components (e.g., Header, Footer)
  │   │   ├── header.tsx
  │   │   ...
  ├── mocks              # Mock data for development
  │   ├── searchResults.ts
  │   ├── user.ts
  │   ...
  ├── pages              # Main pages/screens of the app
  │   ├── home.tsx
  │   ├── login.tsx
  ├── style              # Styling files (CSS, Styled Components, etc.)
  ├── App.tsx            # Main app file
  ├── main.tsx           # Entry point for the app

```

## 📸 Screenshots

### Login Screen
![Login Screen 1](https://github.com/user-attachments/assets/c64f0a0b-ee8c-4359-bf05-ff99a154e38c)
![Login Screen 2](https://github.com/user-attachments/assets/13b49173-e121-4c3c-b28d-62abee933caf)

### Home Screen
![Home Screen 1](https://github.com/user-attachments/assets/5d94e8dd-b86e-46a5-988b-602102f06404)
![Home Screen 2](https://github.com/user-attachments/assets/227f04c8-5cf3-49c7-8bd4-e02a05b5a1d7)

### User Logout
![User Logout](https://github.com/user-attachments/assets/442da7db-7da5-4973-ac1f-bb8c18c01726)

### Search Modal
![Search Modal](https://github.com/user-attachments/assets/c431f577-562e-4b51-9820-a0e3e27f7c5c)

### Mobile Screen
![Mobile Screen](https://github.com/user-attachments/assets/96f66248-06c6-43d9-86c8-648abe9d0b76)

## 🔍 Features

- ✅ Login
- ✅ Music and artist search
- ✅ Music player
- ✅ Dark and Light mode
- ✅ Responsiveness
