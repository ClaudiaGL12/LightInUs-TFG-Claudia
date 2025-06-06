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

Este proyecto consiste en el desarrollo de una aplicación web centrada en la psicología y la salud mental. Su objetivo principal es proporcionar información relevante y herramientas sobre diversos trastornos mentales y situaciones de abuso, como depresión, ansiedad, espectro autista y manipulación emocional. Con lo anterior proporcionado, la plataforma pretende ayudar a los usuarios a identificar patrones, comprenderse mejor a sí mismos y manejar distintas situaciones. Además, se ofrecerá un plan de salud mental personalizado, basado en un cuestionario detallado (en desarrollo). Este plan proporcionará herramientas concretas para el bienestar emocional, pero sin sustituir ni reemplazar la consulta profesional, asegurando que no se prescriban medicamentos ni acciones que requieran supervisión médica.

Todo el contenido será gratuito gracias a la colaboración de voluntarios profesionales, con la única condición de que los usuarios se registren para acceder a la información completa.


### Secciones de la aplicación:

- **Inicio:** Descripción general de la plataforma, política de cookies, sección de preguntas frecuentes, formulario de dudas y sugerencias, y en el futuro, formulario de donaciones.
- **Login y Sign up:** Registro e inicio de sesión. Se quiere implementar recuperación de contraseña por correo electrónico en un futuro.
- **Temas:** Información sobre distintos aspectos de la salud mental. Usuarios registrados pueden marcar hasta 10 favoritos. Se incluye un chatbot de ayuda.
- **Profesionales:** Perfiles de los voluntarios que aportan contenido. Ellos mismos pueden editar su propio perfil.
- **Planes (en desarrollo):** Formularios que generan planes personalizados con IA. Gratuito las 3 primeras veces.
- **Perfil:** Ventana emergente para usuarios registrados con datos y botón de cerrar sesión.
- **Foro (idea en desarrollo):** Espacio para interacción entre usuarios. Habrá chat exclusivo para administradores y profesionales.
- **Gestión:** Solo para administradores. Gestión de profesionales, temas y tipos de temas.
- **Política de Cookies:** Accesible desde el pie de página y ventana emergente de las cookies.

---

## 1.1. Justificación del Proyecto

Decidí hacer el proyecto sobre psicología y salud mental porque es un aspecto fundamental de la vida, pero muchas personas no pueden acceder a terapia debido a limitaciones económicas o geográficas. En muchos casos, quienes necesitan ayuda no saben cómo pedirla o se ven obligados a buscar información en internet de manera discreta. Esta situación es especialmente difícil para quienes enfrentan abuso, acoso o problemas emocionales sin redes de apoyo cercanas.

A pesar de su importancia, la psicología sigue siendo un tema muy dejado en la educación. En muchos centros educativos, los psicólogos en ocasiones no pueden darle el apoyo necesario a sus pacientes, ya sea por falta de profesionalidad o porque han sido asignados al puesto sin contar con la preparación adecuada. Como consecuencia, muchos niños y adolescentes se quedan sin esa ayuda y más perdidos de lo que estaban. Asimismo, hay adultos que desean aprender sobre salud mental pero temen ser juzgados. La diversidad de experiencias demuestra la necesidad de un recurso accesible y confiable para sentirnos apoyados y a normalizar que ir a terapia está bien y no es de locos.

Por ello, esta aplicación busca ofrecer información dada por profesionales, así como herramientas prácticas para la autogestión emocional. También incluirá en el pie de página redes sociales que pueden ayudar y un número de whatsapp.


---

## 1.2. Alcance del Proyecto

### Funcionalidades:

- **Autenticación**: Registro e inicio de sesión.
- **Roles**: 
    - Administrador: Gestionar la configuración y contenido de la plataforma.
    - Profesional: Editar su información en la página "Profesionales".
    - Usuario registrado: Ver la información sobre Temas y Profesionales, y crear planes.
- **Base de datos**: Almacenamiento de información sobre los temas tratados, los tipos de temas que hay, los perfiles de los profesionales, gestión de usuarios, los planes de salud mental de cada uno de ellos y sus temas favoritos.
- IA: Chatbot para recomendaciones y planes personalizados.
- Interfaz responsive e intuitiva.

---

## 1.3. Valoración de Alternativas Existentes

Actualmente, existen diversas plataformas que ofrecen información sobre salud mental, incluyendo blogs especializados, foros y páginas institucionales. Sin embargo, muchas de estas fuentes carecen de un sistema de autenticación y personalización que permita a los usuarios acceder a contenido adaptado a sus necesidades específicas. Además, suelen centrarse en uno o varios temas concretos, sin ofrecer una visión integral o herramientas interactivas que favorezcan el aprendizaje y la autogestión emocional.

Mi aplicación se diferencia al ofrecer una experiencia estructurada y personalizada, con contenido verificado por profesionales y varias funcionalidades clave que mejoran la experiencia del usuario: tienen a su disposición cualquier tipo de información en una sola página y no tener que buscar diferentes alternativas, pueden ver la información de los psicólogos que han redactado dicha información y si ninguno de estos temas son lo que buscan, proporcionamos planes de salud mental adaptados lo máximo posible según diferentes formularios.


---

## 1.4. Stack Tecnológico

- **Frontend:** Angular 19 (HTML, CSS, Bootstrap, TypeScript, JavaScript)
- **Backend:** Laravel 12 (API RESTful)
- **Base de Datos:** MySQL
- **Despliegue:** Vercel para el frontend y Render para el backend

---

## 2. Objetivos

- **Ofrecer información validada**: Asegurar que los contenidos sobre salud mental sean proporcionados o revisados por profesionales.
- **Implementar una experiencia de usuario personalizada**: Permitir a los usuarios registrados marcar temas como favoritos para acceder rápidamente a la información que les interesa y planes de salud mental concretos.
- **Garantizar una navegación intuitiva y accesible**: Diseñar una interfaz sencilla y adaptada a distintos dispositivos.
- **Proteger la privacidad de los usuarios**: Permitir el acceso a contenido sin requerir datos sensibles y gestionar registros con medidas de seguridad adecuadas (política de cookies).

---

## 2.1. Requisitos del Sistema

### Funcionales:

- Autenticación de usuarios:
    - Registro e inicio de sesión.
    - Diferenciación entre usuarios registrados, administradores y profesionales.
    - Si están registrados podrán acceder a las diferentes secciones completamente.
- Gestión de contenido por administradores y profesionales:
    - Administración de la información sobre salud mental.
    - Los profesionales podrán modificar los sus perfiles en Profesionales.
- Favoritos (máximo 10 por usuario).
- Planes personalizados (3 gratuitos por usuario).
- Formularios de sugerencias y donaciones.
- Foros: Según el tipo de usuario, podrás acceder a diferentes foros y comunicarte con otros usuarios. Si eres profesional o administrador, tendrás acceso a un foro concreto sobre la administración de la información.

### No Funcionales:

- Seguridad:
    - Protección de datos de los usuarios.
    - Implementación de buenas prácticas en la gestión de credenciales.
- Escalabilidad y Disponibilidad:
- Diseño responsive compatible con todos los dispositivos


### Interfaz:

- Colores adecuados, fuentes legibles.
- Menú estructurado con accesos rápidos.
- Sección de favoritos visible.

---

## 2.2. Descripción de Casos de Uso

- Navegación entre páginas
    - Actor: Usuario (sin iniciar sesión)
    - Flujo: No debe de poder navegar a ninguna url. Solo puede ver el login, sign up, política de cookies e inicio.
- Registro e inicio de sesión
    - Actor: Usuario.
    - Flujo: El usuario se registra proporcionando un correo y contraseña. Tras registrarse, puede iniciar sesión.
- Añadir temas a favoritos
    - Actor: Usuario registrado.
    - Flujo: El usuario selecciona un tema y lo marca como favorito. Si alcanza el límite de 10 temas, deberá eliminar uno antes de agregar otro y le saldrá un mensaje de que solo puede añadir 10 temas.
- Gestión de perfiles profesionales
    - Actor: Profesional.
    - Flujo: Los profesionales pueden modificar sólo la información de su perfil.
- Gestión de datos
    - Actor: Administrador
    - Flujo: Puede agregar, modificar y eliminar los datos en la sección “Gestión” y se guardará correctamente cualquier modificación.

---

## 3. Modelo y Diseño de la Base de Datos

*(Ver esquema o archivo asociado en la carpeta del proyecto)*

---

## 4. Proceso de Autenticación

Repositorio GitHub: [proyecto claudia](https://github.com/ClaudiaGL12/LightInUs-TFG-Claudia.git)  
Incluye autenticación mediante Laravel y control de roles.

---

## 5. Guía de Estilos y Prototipado (Figma)

Diseño responsivo y accesible disponible en Figma:  
**Proyecto Figma:** [Figma proyecto Claudia](https://www.figma.com/proto/uhKB1UMDapL9J34AKYeOR5/ProyectoFinGrado-Claudia?node-id=0-1&t=CWR01Ry2ftzokGS1-1)

---

## 6. Mapa de Navegación

### Usuarios sin sesión:

- Inicio
- Login
- Registro
- Política de Cookies

Aunque visualmente se muestran otras secciones en la barra de navegación, si se intenta acceder a cualquiera de ellas sin estar autenticado, el usuario será redirigido automáticamente a la página de Login.

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
**Archivo:** [Manual de usuario](https://docs.google.com/presentation/d/1dvGmy6AE7uhMfphxseouhgZthAqhFaesgB_1URBYMYQ/edit?usp=sharing)

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
- Despliegue local con Vercel para el frontend y Render para el backend

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
