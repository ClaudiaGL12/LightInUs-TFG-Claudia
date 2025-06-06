# Proyecto Fin de Grado – Aplicación Web sobre Psicología y Salud Mental

## Índice

1. [Descripción del Proyecto](#1-descripción-del-proyecto)  
   1.1. [Justificación del Proyecto](#11-justificación-del-proyecto)  
   1.2. [Alcance del Proyecto](#12-alcance-del-proyecto)  
   1.3. [Valoración de Alternativas Existentes](#13-valoración-de-alternativas-existentes)  
   1.4. [Stack Tecnológico](#14-stack-tecnológico)  
2. [Objetivos](#2-objetivos)  
   2.1. [Requisitos del Sistema](#21-requisitos-del-sistema)  
   2.2. [Descripción de Casos de Uso](#22-descripción-de-casos-de-uso)  
3. [Modelo y Diseño de la Base de Datos](#3-modelo-y-diseño-de-la-base-de-datos)  
4. [Proceso de Autenticación](#4-proceso-de-autenticación)  
5. [Guía de Estilos y Prototipado (Figma)](#5-guía-de-estilos-y-prototipado-figma)  
6. [Mapa de Navegación](#6-mapa-de-navegación)  
7. [Manual de Usuario y Lista de Pantallas](#7-manual-de-usuario-y-lista-de-pantallas)  
8. [Pruebas de Despliegue](#8-pruebas-de-despliegue)  
9. [Evaluación del Resultado Final](#9-evaluación-del-resultado-final)  

---

## 1. Descripción del Proyecto

Este proyecto consiste en el desarrollo de una aplicación web centrada en la psicología y la salud mental. Su objetivo principal es proporcionar información relevante y herramientas sobre diversos trastornos mentales y situaciones de abuso, como depresión, ansiedad, espectro autista y manipulación emocional.

Con lo anterior proporcionado, la plataforma pretende ayudar a los usuarios a identificar patrones, comprenderse mejor a sí mismos y manejar distintas situaciones. Además, se ofrecerá un plan de salud mental personalizado, basado en un cuestionario detallado (en desarrollo). 

Todo el contenido será gratuito gracias a la colaboración de voluntarios profesionales, con la única condición de que los usuarios se registren para acceder a la información completa.

### Secciones de la aplicación:

- **Inicio:** Descripción general de la plataforma, política de cookies, sección de preguntas frecuentes, formulario de dudas y sugerencias, y en el futuro, formulario de donaciones.
- **Login y Sign up:** Registro e inicio de sesión. Se contempla implementar recuperación de contraseña por correo electrónico.
- **Temas:** Información sobre distintos aspectos de la salud mental. Usuarios registrados pueden marcar hasta 10 favoritos. Se incluye un chatbot de ayuda.
- **Profesionales:** Perfiles de los voluntarios que aportan contenido. Ellos mismos pueden editar su perfil.
- **Planes (en desarrollo):** Formularios que generan planes personalizados con IA. Gratuito las 3 primeras veces.
- **Perfil:** Ventana emergente para usuarios registrados con datos y botón de cerrar sesión.
- **Foro (idea en desarrollo):** Espacio para interacción entre usuarios. Habrá chat exclusivo para administradores y profesionales.
- **Gestión:** Solo para administradores. Gestión de profesionales, temas y tipos de temas.
- **Política de Cookies:** Accesible desde el pie de página y ventana emergente.

---

## 1.1. Justificación del Proyecto

Elegí este tema porque muchas personas no tienen acceso a terapia por razones económicas o geográficas. Además, muchas veces no saben cómo pedir ayuda, o temen ser juzgados.

Esta aplicación busca ofrecer información verificada por profesionales y herramientas prácticas para la autogestión emocional. También incluye redes sociales de apoyo y un número de WhatsApp en el pie de página.

---

## 1.2. Alcance del Proyecto

### Funcionalidades:

- Autenticación: Registro e inicio de sesión.
- Roles: Administrador, Profesional y Usuario registrado.
- Base de datos: Temas, tipos de temas, usuarios y profesionales.
- IA: Chatbot para recomendaciones y planes personalizados.
- Interfaz responsive e intuitiva.

---

## 1.3. Valoración de Alternativas Existentes

Existen muchos recursos, pero carecen de personalización, autenticación o una visión integral. Esta aplicación ofrece:

- Contenido centralizado y validado.
- Perfil de los autores.
- Planes personalizados mediante IA.

---

## 1.4. Stack Tecnológico

- **Frontend:** Angular 19 (HTML, CSS, Bootstrap, TypeScript, JavaScript)
- **Backend:** Laravel 12 (API RESTful)
- **Base de Datos:** MySQL
- **Despliegue:** XAMPP

---

## 2. Objetivos

- Ofrecer contenido validado.
- Incluir teléfonos de emergencia y contactos útiles.
- Experiencia personalizada para usuarios registrados.
- Interfaz accesible y adaptable.
- Privacidad y seguridad de datos.

---

## 2.1. Requisitos del Sistema

### Funcionales:

- Autenticación con roles.
- Gestión de contenido por administradores y profesionales.
- Favoritos (máximo 10).
- Planes personalizados (3 gratuitos).
- Formularios de sugerencias y donaciones.
- Foros según tipo de usuario.

### No Funcionales:

- Seguridad en el tratamiento de datos.
- Responsive y accesible en todos los dispositivos.

### Interfaz:

- Colores adecuados, fuentes legibles.
- Menú estructurado con accesos rápidos.
- Sección de favoritos visible.

---

## 2.2. Descripción de Casos de Uso

- **Navegación sin sesión:** Solo se puede ver Inicio, Login, Registro y Política de Cookies.
- **Registro e inicio de sesión:** Acceso al contenido tras autenticación.
- **Favoritos:** Marcado de hasta 10 temas favoritos.
- **Profesionales:** Edición de su propio perfil.
- **Administrador:** Gestión completa del contenido desde sección "Gestión".

---

## 3. Modelo y Diseño de la Base de Datos

*(Ver esquema o archivo asociado en la carpeta del proyecto)*

---

## 4. Proceso de Autenticación

Repositorio GitHub: `proyecto claudia`  
Incluye autenticación mediante Laravel y control de roles.

---

## 5. Guía de Estilos y Prototipado (Figma)

Diseño responsivo y accesible disponible en Figma:  
**Proyecto Figma:** `proyecto claudia`

---

## 6. Mapa de Navegación

### Usuarios sin sesión:

- Inicio
- Login
- Registro
- Política de Cookies

Acceso a otras secciones restringido.

### Usuarios registrados:

- **Temas:** Visualización y favoritos.
- **Profesionales:** Visualización y edición (si es profesional).
- **Foro (próximamente):** Públicos y privados.
- **Planes:** Formularios y planes propios.
- **Perfil:** Datos y cerrar sesión.
- **Gestión (admin):** Administración completa.

---

## 7. Manual de Usuario y Lista de Pantallas

Se incluye en una presentación adjunta:  
**Archivo:** `Manual de usuario`

---

## 8. Pruebas de Despliegue

- **Máquina virtual:** 1574
- Clonado del repositorio
- Laravel:
  - `.env`
  - `composer install`
- Angular:
  - `npm install`
  - `Set-ExecutionPolicy Unrestricted` en PowerShell
- Despliegue local con vercel para el frontend y render para el backend

---

## 9. Evaluación del Resultado Final

**URL de despliegue:** [ligthinus.com](http://ligthinus.com)

Este proyecto ha sido un gran reto de aprendizaje. Las mayores dificultades han sido:

- Integrar una IA funcional sin coste.
- Aprender Angular 19 desde cero.

### Mejoras futuras:

- Notificaciones de cambios en perfiles.
- Sistema de donaciones.
- Mejora de los formularios y calidad de los planes.
- Implementación del foro completo.
- Envío de formularios a administradores.
