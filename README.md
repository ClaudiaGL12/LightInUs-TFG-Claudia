Proyecto fin de grado

Índice

1.Descripción del Proyecto	2
1.1.Justificación del Proyecto	3
1.2.Alcance del Proyecto	3
1.3.Valoración de Alternativas Existentes	4
1.4.Stack Tecnológico	4
2.Objetivos	4
2.1.Requisitos del Sistema	5
2.2.Descripción de Casos de Uso	6
3.Modelo y Diseño de la Base de Datos	6
4.Proceso de autenticación	7
5.Guía de estilos y diseño del prototipado (Figma)	7
6.Mapa de navegación	7
































1.Descripción del Proyecto
Este proyecto consiste en el desarrollo de una aplicación web centrada en la psicología y la salud mental. Su objetivo principal es proporcionar información relevante y herramientas sobre diversos trastornos mentales y situaciones de abuso, como depresión, ansiedad, espectro autista y manipulación emocional. Con lo anterior proporcionado, la plataforma pretende ayudar a los usuarios a identificar patrones, comprenderse mejor a sí mismos y manejar distintas situaciones. Además, se ofrecerá un plan de salud mental personalizado, basado en un cuestionario detallado. Este plan proporcionará herramientas concretas para el bienestar emocional, pero sin sustituir ni reemplazar la consulta profesional, asegurando que no se prescriban medicamentos ni acciones que requieran supervisión médica.
Todo el contenido será gratuito gracias a la colaboración de voluntarios profesionales, con la única condición de que los usuarios se registren para acceder a la información completa.
La aplicación estará estructurada en varias secciones:
Inicio: Descripción general de la plataforma, su propósito e información sobre la salud mental a nivel mundial. Consigo traerá dos formularios, uno destinado a resolver dudas y sugerencias (accesible tanto para usuarios registrados como visitantes) ya sea para mejorar el contenido, reportar errores en la página o corregir información inexacta y Un formulario de donaciones destinado a apoyar investigaciones sobre la salud mental o iniciativas para mejorar el acceso a terapia (el destino de las donaciones se definirá más adelante).
Temas: Sección con información sobre los distintos aspectos de la psicología y salud mental. Los usuarios registrados podrán agregar temas a "Favoritos", una sección que se mostrará al inicio de la página si hay al menos uno marcado. Habrá un máximo de 10 temas favoritos.
Profesionales: Espacio donde se mostrarán los perfiles de los voluntarios que contribuyen con la información.
Plan de salud mental: Sección donde se ofrece un cuestionario detallado que, tras completarlo, genera un plan de salud mental personalizado.Gratuito las tres primeras veces. Luego, se implementará un sistema de pago para acceder a nuevos planes. Los planes serán almacenados y accesibles para los usuarios registrados
Perfil: Una ventana emergente accesible solo para usuarios registrados, que mostrará su nombre de usuario, tipo de usuario y correo electrónico (sin necesidad de datos adicionales), junto con un botón para cerrar sesión. Los usuarios no registrados solo verán las opciones de "Iniciar sesión" y "Registrarse", y tendrán acceso limitado a las secciones "Temas" y "Profesionales".
Foro (idea en desarrollo): Espacio para que los usuarios interactúen en distintas categorías (ejemplo: "Abuso", "Depresión"). Habrá un chat exclusivo para profesionales y administradores para la gestión de contenido.

1.1.Justificación del Proyecto
Decidí hacer el proyecto sobre psicología y salud mental porque es un aspecto fundamental de la vida, pero muchas personas no pueden acceder a terapia debido a limitaciones económicas o geográficas. En muchos casos, quienes necesitan ayuda no saben cómo pedirla o se ven obligados a buscar información en internet de manera discreta. Esta situación es especialmente difícil para quienes enfrentan abuso, acoso o problemas emocionales sin redes de apoyo cercanas.
A pesar de su importancia, la psicología sigue siendo un tema muy dejado en la educación. En muchos centros educativos, los psicólogos en ocasiones no pueden darle el apoyo necesario a sus pacientes, ya sea por falta de profesionalidad o porque han sido asignados al puesto sin contar con la preparación adecuada. Como consecuencia, muchos niños y adolescentes se quedan sin esa ayuda y más perdidos de lo que estaban. Asimismo, hay adultos que desean aprender sobre salud mental pero temen ser juzgados. La diversidad de experiencias demuestra la necesidad de un recurso accesible y confiable para sentirnos apoyados y a normalizar que ir a terapia está bien y no es de locos.
Por ello, esta aplicación busca ofrecer información dada por profesionales, así como herramientas prácticas para la autogestión emocional. También incluirá un apartado con teléfonos de emergencia para diferentes situaciones (112, 061, 016, 137, entre otros) y números de contacto para comunicarse vía WhatsApp (689 967 501, 600 000 016, etc.), ya que muchas personas desconocen estos recursos.

1.2.Alcance del Proyecto
El proyecto incluirá las siguientes funcionalidades:
Autenticación de usuarios: Registro e inicio de sesión.
Roles de usuario:
Administrador: Gestionar la configuración y contenido de la plataforma.
Profesional: Editar su información en la página "Profesionales".
Usuario registrado: Guardar temas en la sección "Favoritos".
Base de datos: Almacenamiento de información sobre los temas tratados, los perfiles de los profesionales y gestión de usuarios.
Interfaz de usuario intuitiva: Diseño responsivo y accesible.


1.3.Valoración de Alternativas Existentes
Actualmente, existen diversas plataformas que ofrecen información sobre salud mental, incluyendo blogs especializados, foros y páginas institucionales. Sin embargo, muchas de estas fuentes carecen de un sistema de autenticación y personalización que permita a los usuarios acceder a contenido adaptado a sus necesidades específicas. Además, suelen centrarse en uno o varios temas concretos, sin ofrecer una visión integral o herramientas interactivas que favorezcan el aprendizaje y la autogestión emocional.
Mi aplicación se diferencia al ofrecer una experiencia estructurada y personalizada, con contenido verificado por profesionales y varias funcionalidades clave que mejoran la experiencia del usuario: el sistema de "Favoritos" permite a los usuarios guardar los temas que les resulten más relevantes, facilitando un acceso rápido a información de interés, la creación de planes de salud mental automatizado adaptado al usuario, un foro de apoyo comunitario y formulario para sugerencias y donaciones.

1.4.Stack Tecnológico
Frontend: Angular (HTML, CSS, Bootstrap, TypeScript, JavaScript).
Backend: Laravel (API RESTful).
Base de Datos: MySQL.
Despliegue: Uso de Docker tal y como se indica en las consideraciones por ahora.

2.Objetivos
Los objetivos principales de este proyecto son:
Ofrecer información validada: Asegurar que los contenidos sobre salud mental sean proporcionados o revisados por profesionales.
Facilitar el acceso a recursos de ayuda: Incluir teléfonos de emergencia y contactos de asistencia para distintos tipos de crisis.
Implementar una experiencia de usuario personalizada: Permitir a los usuarios registrados marcar temas como favoritos para acceder rápidamente a la información que les interesa y planes de salud mental concretos.
Garantizar una navegación intuitiva y accesible: Diseñar una interfaz sencilla y adaptada a distintos dispositivos.
Proteger la privacidad de los usuarios: Permitir el acceso a contenido sin requerir datos sensibles y gestionar registros con medidas de seguridad adecuadas (política de cookies).
2.1.Requisitos del Sistema
Requisitos Funcionales:
Autenticación de usuarios:
Registro e inicio de sesión.
Diferenciación entre usuarios registrados, administradores y profesionales.
Si están registrados podrán acceder a las diferentes secciones completamente.
Gestión de contenido:
Administración de la información sobre salud mental.
Los profesionales podrán modificar los sus perfiles en Profesionales.
Favoritos:
Los usuarios registrados podrán marcar hasta 10 temas como favoritos.
Planes de salud mental:
Los usuarios registrados podrán crear hasta 3 planes de forma gratuita.
Formulario de sugerencias y donaciones
Foro:
Según el tipo de usuario, podrás acceder a diferentes foros y comunicarte con otros usuarios. Si eres profesional o administrador, tendrás acceso a un foro concreto sobre la administración de la información.
Requisitos No Funcionales:
Seguridad:
Protección de datos de los usuarios.
Implementación de buenas prácticas en la gestión de credenciales.
Escalabilidad y Disponibilidad:
Diseño responsive compatible con todos los dispositivos
Requisitos de Interfaz:
Diseño accesible:
Uso de colores adecuados.
Fuentes legibles y tamaño ajustable.
Navegación intuitiva:
Menú estructurado con accesos directos a las principales secciones.
Sección "Favoritos" visible y accesible para usuarios registrados.






2.2.Descripción de Casos de Uso
Registro e inicio de sesión
Actor: Usuario.
Flujo: El usuario se registra proporcionando un correo y contraseña. Tras registrarse, puede iniciar sesión.
Añadir temas a favoritos
Actor: Usuario registrado.
Flujo: El usuario selecciona un tema y lo marca como favorito. Si alcanza el límite de 10 temas, deberá eliminar uno antes de agregar otro y le saldrá un mensaje de que solo puede añadir 10 temas.
Gestión de perfiles profesionales
Actor: Administrador / Profesional.
Flujo: Los profesionales pueden modificar sólo la información de su perfil.
Enviar sugerencias o reportes
Actor: Cualquier usuario.
Flujo: Se rellena el formulario de sugerencias con una categoría (duda, corrección de información, problema técnico, etc.).

3.Modelo y Diseño de la Base de Datos




4.Proceso de autenticación
Proyecto de github: proyecto claudia
5.Guía de estilos y diseño del prototipado (Figma)
Guía de estilos y diseño del prototipado (algunas páginas siguen en desarrollo ya sea por ser una idea no estable o diseño aún en proceso). Importante, en la misma página ir adaptando la pantalla según sea más cómodo de ver en el encabezado, en la opción         :
 figma proyecto claudia
6.Mapa de navegación
La página principal del sitio web es el Index. El acceso al contenido depende del estado de autenticación del usuario y su rol asignado dentro del sistema:
Los usuarios que no están registrados o no han iniciado sesión solo podrán acceder a las siguientes secciones:
Index (página de inicio)
Login (iniciar sesión)
Sign Up (registro)
Aunque visualmente se muestran otras secciones en la barra de navegación, si se intenta acceder a cualquiera de ellas sin estar autenticado, el usuario será redirigido automáticamente a la página de Login.

Los usuarios registrados, una vez iniciado sesión, los usuarios tendrán acceso a diferentes secciones del sitio, con ciertas restricciones según su rol:
Temas: agrupados por categorías (Grupo A, Grupo B, Grupo C, Grupo D) y favoritos.
Profesionales: visualización de perfiles. Si el usuario tiene el rol de profesional podrá editar su propio perfil.
Foros: Foro público y Foro exclusivo para administradores y profesionales
Planes: Formulario y Plan/planes de salud mental
Perfil: Datos del usuario y Cierre de sesión (Log out)
Gestión (exclusiva para administradores): acceso a funcionalidades de administración sobre:Temas y Profesionales (ver, editar, crear y borrar elementos).




