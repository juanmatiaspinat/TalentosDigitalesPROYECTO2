-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-10-2023 a las 21:12:17
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto-rest-api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `año_publicacion` date NOT NULL,
  `ISBN` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `año_publicacion`, `ISBN`) VALUES
(1, 'El Alquimista', 'Paulo Coelho', 'Novela', '1988-09-02', '9780439136365'),
(2, 'Harry Potter y la piedra filos', 'J. K. Rowling', 'Literatura fantástica', '1997-06-26', '9780807286005'),
(3, 'Harry Potter y la cámara secre', 'J. K. Rowling', 'Literatura fantástica', '1998-07-02', '9788831000154'),
(4, 'Harry Potter y el prisionero d', 'J. K. Rowling', 'Literatura fantástica', '1999-07-08', '9788831000161'),
(5, 'Hábitos Atómicos', 'James Clear', 'Autoayuda', '2018-10-16', '9783442178582'),
(6, 'Las 48 leyes del poder', 'Robert Greene', 'Autoayuda', '1998-05-03', '9788467039054'),
(7, 'Los disparos del cazador', 'Rafael Chirbes', 'Ficción', '1994-02-28', '9788497403955'),
(8, 'Tus zonas erróneas', 'Wayne Dyer', 'Autoayuda', '1976-08-01', '9780060919764'),
(9, 'El principito', 'Antoine de Saint-Exupéry', 'Literatura infantil', '1943-04-06', '9783140464079'),
(10, 'Robinson Crusoe', 'Daniel Defoe', 'Literatura infantil', '1719-04-25', '9780194229845');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
