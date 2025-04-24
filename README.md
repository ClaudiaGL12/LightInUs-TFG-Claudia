# Proyecto Fin de Grado: Light in us

**Autor**: Claudia Gómez Luna  
**Curso**: 2º DAW – IES MARTÍNEZ MONTAÑÉS  
**Repositorio GitHub**: [ProyectoFinGrado](https://github.com/ClaudiaGL12/ProyectoFinGrado.git)  
**Prototipo Figma**: [Ver diseño](https://www.figma.com/proto/uhKB1UMDapL9J34AKYeOR5/ProyectoFinGrado-Claudia?node-id=0-1&t=CWR01Ry2ftzokGS1-1)

---

## 1. Descripción del Proyecto

Este proyecto consiste en una aplicación web centrada en la **psicología y la salud mental**. Su objetivo es informar y ofrecer herramientas sobre trastornos como depresión, ansiedad, espectro autista y manipulación emocional, además de planes personalizados basados en un cuestionario.

- Contenido gratuito ofrecido por profesionales voluntarios.  
- Requiere registro para acceder a contenido completo.  

### Estructura de la aplicación:

- **Inicio**: Introducción + formularios (sugerencias y donaciones).
- **Temas**: Información por categoría + sistema de favoritos.
- **Profesionales**: Perfiles de voluntarios.
- **Plan de salud mental**: Cuestionario y generación de plan personalizado.
- **Perfil**: Gestión de usuario (registrado vs visitante).
- **Foro** *(en desarrollo)*: Espacio para interacción y administración.

---

## 1.1 Justificación del Proyecto

La salud mental es vital, pero el acceso a terapia puede ser limitado. Esta plataforma busca **normalizar la salud mental**, dar apoyo a quienes enfrentan abuso o problemas emocionales, y servir como recurso accesible y confiable.

---

## 1.2 Alcance del Proyecto

- Registro e inicio de sesión.
- Roles: Administrador, Profesional, Usuario.
- Base de datos: temas, perfiles, usuarios.
- Interfaz responsiva y accesible.

---

## 1.3 Valoración de Alternativas Existentes

Otras plataformas no ofrecen:
- Personalización.
- Autenticación.
- Herramientas prácticas y estructuradas.

---

## 1.4 Stack Tecnológico

- **Frontend**: Angular (HTML, CSS, Bootstrap, TS, JS)
- **Backend**: Laravel (API RESTful)
- **Base de Datos**: MySQL
- **Despliegue**: Docker

---

## 2. Objetivos

1. Contenido validado por profesionales.
2. Recursos de emergencia.
3. Personalización (favoritos y planes).
4. Interfaz accesible.
5. Privacidad y seguridad.

---

## 2.1 Requisitos del Sistema

### Funcionales:
- Autenticación (roles diferenciados).
- Gestión de contenido.
- Máximo 10 favoritos.
- Hasta 3 planes gratuitos.
- Formularios (sugerencias y donaciones).
- Foro segmentado por tipo de usuario.

### No funcionales:
- Seguridad y buenas prácticas.
- Escalabilidad y disponibilidad.
- Diseño responsive.

### Interfaz:
- Colores y tipografía accesibles.
- Navegación intuitiva.

---

## 2.2 Casos de Uso

1. Registro/inicio sesión.
2. Agregar favoritos.
3. Gestión de perfiles profesionales.
4. Envío de sugerencias.

---

##  3. Modelo y Diseño de la Base de Datos

![base de datos](https://drive.google.com/file/d/1u8luC4revwsJai8mN5nGKH-RdpsRYAcb/view?usp=drive_link)

---

## 4. Proceso de Autenticación

Incluye roles y gestión de acceso.  
Más info: [Repositorio GitHub](https://github.com/ClaudiaGL12/ProyectoFinGrado.git)

---

## 5. Guía de estilos y prototipado (Figma)

Diseño adaptable en desarrollo:  
[Figma - Proyecto Claudia](https://www.figma.com/proto/uhKB1UMDapL9J34AKYeOR5/ProyectoFinGrado-Claudia?node-id=0-1&t=CWR01Ry2ftzokGS1-1)

---

## 6. Mapa de Navegación

### Visitantes:
- Inicio, Login, Registro  
(otras secciones requieren autenticación)

### Usuarios registrados:
- Temas (por categorías + favoritos)
- Profesionales (con edición si es profesional)
- Foro (público + foro admins/profesionales)
- Planes personalizados
- Perfil y logout
- Gestión (solo administradores)
![mapa de navegación](https://drive.google.com/file/d/1y2v2F5N1IYU9iM7-krzQgzfPbuenU-Ji/view?usp=drive_link)