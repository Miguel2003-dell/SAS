-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2022 a las 15:25:28
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `socio_eco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `form`
--

CREATE TABLE `form` (
  `nombre` text NOT NULL,
  `edad` int(10) NOT NULL,
  `direccion` varchar(60) NOT NULL,
  `carrera` text NOT NULL,
  `modalidad` text NOT NULL,
  `eleccion` text NOT NULL,
  `trabajas` text NOT NULL,
  `horas` varchar(60) NOT NULL,
  `ingreso_mensua` varchar(60) NOT NULL,
  `egreso_mensua` varchar(60) NOT NULL,
  `casa` text NOT NULL,
  `cuartos` text NOT NULL,
  `personas` text NOT NULL,
  `internet` text NOT NULL,
  `computadora` text NOT NULL,
  `refri` text NOT NULL,
  `agua` varchar(60) NOT NULL,
  `drenado` text NOT NULL,
  `electricidad` text NOT NULL,
  `beca` varchar(60) NOT NULL,
  `ambiente` varchar(60) NOT NULL,
  `responsabilidades` varchar(60) NOT NULL,
  `discapacidad` varchar(60) NOT NULL,
  `secundaria` varchar(60) NOT NULL,
  `final_secu` varchar(60) NOT NULL,
  `prepa` varchar(60) NOT NULL,
  `especialidad` varchar(60) NOT NULL,
  `final_prepa` varchar(60) NOT NULL,
  `habitos` text NOT NULL,
  `estudias` text NOT NULL,
  `enfermedad` text NOT NULL,
  `medicamento` text NOT NULL,
  `tristeza` text NOT NULL,
  `pesimismo` text NOT NULL,
  `irritabilidad` text NOT NULL,
  `retirada` text NOT NULL,
  `indesicion` text NOT NULL,
  `imagen_corporal` text NOT NULL,
  `enlentecimiento` text NOT NULL,
  `insomnio` text NOT NULL,
  `peso` text NOT NULL,
  `calor` text NOT NULL,
  `temblor_piernas` text NOT NULL,
  `temblor_manos` text NOT NULL,
  `mareo` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
