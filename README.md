# Spotify Clone

Este projeto é um clone do **Spotify** desenvolvido com **React**, **Chakra UI**, **TypeScript**, **Yup** e **React Icons**. Ele simula a funcionalidade básica do Spotify, incluindo tela de login, busca de músicas/artistas, e um player de música simples.


## 📌 Tecnologias Utilizadas

- **React**: Usado para construir a interface de usuário, pois é uma das bibliotecas mais populares e eficientes para criar aplicações dinâmicas.

- **TypeScript**: Escolhido para adicionar tipagem estática ao código, ajudando a evitar erros e tornando o desenvolvimento mais seguro.

- **Chakra UI**: Framework de UI utilizado para criar interfaces bonitas e responsivas com facilidade. Foi escolhida pois já tenho experiência em utilizá-la em projetos anteriores.

- **Yup**: Biblioteca para validação de formulários, tornando mais simples verificar se os dados inseridos pelo usuário estão corretos.

- **React Icons**: Usado para ícones, proporcionando uma forma simples e leve de adicionar ícones personalizados à aplicação.



## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o Repositório
```sh
 git clone https://github.com/seu-usuario/seu-repositorio.git
 cd seu-repositorio
```

### 2️⃣ Instalar as Dependências
```sh
 npm install  # ou yarn install
```

### 3️⃣ Executar o Projeto
```sh
 npm run dev  # ou yarn dev
```

A aplicação será iniciada em [http://localhost:3000](http://localhost:5173/) .
Tambem e possivel acessar o deploy [aqui](https://spotify-clone-rust-omega.vercel.app/)

## 📂 Estrutura do Projeto

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

## 📸 Capturas de Tela

### Tela de Login
![Tela de Login 1](https://github.com/user-attachments/assets/c64f0a0b-ee8c-4359-bf05-ff99a154e38c)
![Tela de Login 2](https://github.com/user-attachments/assets/13b49173-e121-4c3c-b28d-62abee933caf)

### Tela Inicial
![Tela Inicial 1](https://github.com/user-attachments/assets/5d94e8dd-b86e-46a5-988b-602102f06404)
![Tela Inicial 2](https://github.com/user-attachments/assets/227f04c8-5cf3-49c7-8bd4-e02a05b5a1d7)

### Logout do Usuário
![Logout do Usuário](https://github.com/user-attachments/assets/442da7db-7da5-4973-ac1f-bb8c18c01726)

### Modal de Busca
![Modal de Busca](https://github.com/user-attachments/assets/c431f577-562e-4b51-9820-a0e3e27f7c5c)

### Tela em Mobile
![Tela em Mobile](https://github.com/user-attachments/assets/96f66248-06c6-43d9-86c8-648abe9d0b76)

## 🔍 Funcionalidades

- ✅ Login
- ✅ Pesquisa de músicas e artistas
- ✅ Player de música
