-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: mysteryquest
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `scores`
--

DROP TABLE IF EXISTS `scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `score` varchar(10) DEFAULT NULL,
  `user` int DEFAULT NULL,
  `quest` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `quest_id` (`quest`),
  KEY `user_id` (`user`),
  CONSTRAINT `quest_id` FOREIGN KEY (`quest`) REFERENCES `quests` (`id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scores`
--

LOCK TABLES `scores` WRITE;
/*!40000 ALTER TABLE `scores` DISABLE KEYS */;
INSERT INTO `scores` VALUES (2,'2022-10-28','03:45:76',7,3),(3,'2023-02-08','04:17:51',6,3),(4,'2023-07-17','07:83:82',37,3),(5,'2023-04-13','06:86:78',18,3),(6,'2023-02-21','02:04:56',37,2),(7,'2023-08-17','06:66:81',19,1),(8,'2023-05-07','03:25:70',5,3),(9,'2022-10-14','05:22:00',16,1),(10,'2023-07-07','04:80:29',29,1),(11,'2023-07-22','05:00:17',37,2),(12,'2023-05-27','01:46:64',27,1),(13,'2023-04-11','00:20:08',4,1),(14,'2023-05-01','03:33:83',3,1),(15,'2023-04-08','05:74:95',22,2),(16,'2023-08-12','07:66:86',33,1),(17,'2023-05-15','07:86:17',5,3),(18,'2022-10-03','06:08:51',37,1),(19,'2022-10-03','04:33:32',34,3),(20,'2023-08-29','06:95:59',9,2),(21,'2023-06-24','04:23:29',5,2);
/*!40000 ALTER TABLE `scores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-14 14:16:23
