-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'J.K. Rowling','British'),(2,'George Orwell','British'),(3,'Isaac Asimov','American'),(4,'Agatha Christie','British'),(5,'Stephen King','American'),(6,'J.R.R. Tolkien','British'),(7,'Jane Austen','British'),(8,'Yuval Noah Harari','Israeli'),(9,'Gabriel García Márquez','Colombian'),(11,'Albert Camus','French');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `idGenre` int NOT NULL,
  `publicationYear` int DEFAULT NULL,
  `isbn` varchar(13) DEFAULT NULL,
  `pageCount` int DEFAULT NULL,
  `available` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `idGenre` (`idGenre`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`idGenre`) REFERENCES `genre` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'1984',2,1949,'9780451524935',328,1),(2,'Animal Farm',2,1945,'9780451526342',112,1),(3,'Foundation',2,1951,'9780553293357',244,1),(4,'I, Robot',2,1950,'9780553382563',224,1),(5,'The Hobbit',3,1937,'9780345339683',310,1),(6,'The Fellowship of the Ring',3,1954,'9780261103573',423,1),(7,'Pride and Prejudice',7,1813,'9780679783268',279,1),(8,'Emma',7,1815,'9780141439587',474,0),(9,'Sapiens',5,2011,'9780062316110',498,1),(10,'Homo Deus',5,2015,'9780062464316',464,1),(11,'One Hundred Years of Solitude',1,1967,'9780060883287',417,1),(12,'Chronicle of a Death Foretold',1,1981,'9780307388905',122,1),(13,'The Stranger',10,1942,'9780679720201',123,1),(14,'The Plague',10,1947,'9780679720218',308,1),(15,'It',8,1986,'9780450411434',1138,1),(16,'Carrie',8,1974,'9780307743664',199,1),(17,'Murder on the Orient Express',4,1934,'9780062693661',256,1),(18,'And Then There Were None',4,1939,'9780062073488',264,1),(19,'The Shining',8,1977,'9780307743657',659,1),(20,'Misery',8,1987,'9780450417399',320,1),(21,'Harry Potter and the Philosopher\'s Stone',3,1997,'9780747532743',223,1),(22,'Harry Potter and the Chamber of Secrets',3,1998,'9780747538493',251,1),(23,'Harry Potter and the Prisoner of Azkaban',3,1999,'9780747542155',317,1),(24,'Brave New World',2,1932,'9780060850524',268,1),(25,'Fahrenheit 451',2,1953,'9781451673319',194,1),(26,'The Catcher in the Rye',1,1951,'9780316769488',277,1),(27,'To Kill a Mockingbird',1,1960,'9780061120084',281,1),(28,'The Great Gatsby',1,1925,'9780743273565',180,1),(29,'War and Peace',1,1869,'9780199232765',1225,1),(30,'Crime and Punishment',1,1866,'9780140449136',671,1),(31,'The Art of War',9,-500,'9780140449198',273,1),(32,'Meditations',10,180,'9780140449334',254,1),(33,'Man\'s Search for Meaning',9,1946,'9780807014295',200,1),(34,'Think and Grow Rich',9,1937,'9781585424337',238,1),(35,'The 7 Habits of Highly Effective People',9,1989,'9780743269513',381,1),(36,'Dune',2,1965,'9780441013593',412,1),(37,'The Left Hand of Darkness',2,1969,'9780441478125',304,1),(38,'Neuromancer',2,1984,'9780441569595',271,1);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bookauthor`
--

DROP TABLE IF EXISTS `bookauthor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookauthor` (
  `idBook` int NOT NULL,
  `idAuthor` int NOT NULL,
  PRIMARY KEY (`idBook`,`idAuthor`),
  KEY `idAuthor` (`idAuthor`),
  CONSTRAINT `bookauthor_ibfk_1` FOREIGN KEY (`idBook`) REFERENCES `book` (`id`) ON DELETE CASCADE,
  CONSTRAINT `bookauthor_ibfk_2` FOREIGN KEY (`idAuthor`) REFERENCES `author` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookauthor`
--

LOCK TABLES `bookauthor` WRITE;
/*!40000 ALTER TABLE `bookauthor` DISABLE KEYS */;
INSERT INTO `bookauthor` VALUES (21,1),(22,1),(23,1),(1,2),(2,2),(24,2),(25,2),(3,3),(4,3),(17,4),(18,4),(15,5),(16,5),(19,5),(20,5),(5,6),(6,6),(7,7),(8,7),(9,8),(10,8),(11,9),(12,9),(26,9),(27,9),(28,9),(29,9),(30,9),(31,9),(32,9),(33,9),(34,9),(35,9),(36,9),(37,9),(38,9);
/*!40000 ALTER TABLE `bookauthor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genre`
--

DROP TABLE IF EXISTS `genre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genre` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genre`
--

LOCK TABLES `genre` WRITE;
/*!40000 ALTER TABLE `genre` DISABLE KEYS */;
INSERT INTO `genre` VALUES (1,'Fiction'),(2,'Science Fiction'),(3,'Fantasy'),(4,'Mystery'),(5,'Biography'),(6,'History'),(7,'Romance'),(8,'Horror'),(9,'Self-help'),(10,'Philosophy');
/*!40000 ALTER TABLE `genre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loan`
--

DROP TABLE IF EXISTS `loan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idBook` int NOT NULL,
  `idMember` int NOT NULL,
  `loanDate` varchar(20) NOT NULL,
  `expectedReturnDate` varchar(20) NOT NULL,
  `returnDate` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idBook` (`idBook`),
  KEY `idMember` (`idMember`),
  CONSTRAINT `loan_ibfk_1` FOREIGN KEY (`idBook`) REFERENCES `book` (`id`) ON DELETE CASCADE,
  CONSTRAINT `loan_ibfk_2` FOREIGN KEY (`idMember`) REFERENCES `member` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loan`
--

LOCK TABLES `loan` WRITE;
/*!40000 ALTER TABLE `loan` DISABLE KEYS */;
INSERT INTO `loan` VALUES (4,1,2,'2003-10-20','2003-11-21','2003-11-20'),(5,2,3,'2024-04-23','2024-05-10','2024-05-09'),(6,3,7,'2020-07-17','2020-08-04','2020-09-20'),(7,1,2,'2023-01-10','2023-02-10','2023-02-08'),(8,3,5,'2023-01-15','2023-02-15',NULL),(9,7,8,'2023-01-20','2023-02-20','2023-02-18'),(10,12,10,'2023-02-01','2023-03-01','2023-02-28'),(11,4,3,'2023-02-05','2023-03-05',NULL),(12,6,6,'2023-02-10','2023-03-10','2023-03-09'),(13,9,9,'2023-02-15','2023-03-15',NULL),(14,11,1,'2023-02-20','2023-03-20','2023-03-18'),(15,13,4,'2023-03-01','2023-04-01','2023-03-30'),(16,15,7,'2023-03-05','2023-04-05',NULL),(17,18,11,'2023-03-10','2023-04-10','2023-04-08'),(18,20,14,'2023-03-15','2023-04-15',NULL),(19,22,16,'2023-03-20','2023-04-20','2023-04-19'),(20,25,18,'2023-04-01','2023-05-01','2023-04-29'),(21,28,20,'2023-04-05','2023-05-05',NULL),(22,30,22,'2023-04-10','2023-05-10','2023-05-09'),(23,33,24,'2023-04-15','2023-05-15','2023-05-14'),(24,35,26,'2023-04-20','2023-05-20',NULL),(25,37,28,'2023-05-01','2023-06-01','2023-05-30'),(26,2,29,'2023-05-05','2023-06-05','2023-06-03'),(27,5,30,'2023-05-10','2023-06-10',NULL),(28,8,15,'2023-05-15','2023-06-15','2023-06-14'),(29,10,13,'2023-05-20','2023-06-20',NULL),(30,14,19,'2023-06-01','2023-07-01','2023-06-29'),(31,17,23,'2023-06-05','2023-07-05','2023-07-04'),(32,19,25,'2023-06-10','2023-07-10',NULL),(33,21,12,'2023-06-15','2023-07-15','2023-07-14'),(34,24,17,'2023-06-20','2023-07-20',NULL),(35,27,21,'2023-07-01','2023-08-01','2023-07-31'),(36,29,27,'2023-07-05','2023-08-05',NULL);
/*!40000 ALTER TABLE `loan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `registrationDate` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (1,'John Smith','john.smith@example.com','1234567890','123 Maple Street, Springfield','2023-01-10'),(2,'Emily Johnson','emily.johnson@example.com','2345678901','456 Oak Avenue, Shelbyville','2023-02-15'),(3,'Michael Brown','michael.brown@example.com','3456789012','789 Pine Lane, Ogdenville','2023-03-20'),(4,'Sophia Davis','sophia.davis@example.com','4567890123','321 Elm Street, Capital City','2023-04-25'),(5,'James Wilson','james.wilson@example.com','5678901234','654 Cedar Road, Springfield','2023-05-30'),(6,'Olivia Martinez','olivia.martinez@example.com','6789012345','987 Birch Drive, Shelbyville','2023-06-05'),(7,'William Garcia','william.garcia@example.com','7890123456','741 Redwood Court, Ogdenville','2023-07-10'),(8,'Ava Rodriguez','ava.rodriguez@example.com','8901234567','852 Cherry Circle, Capital City','2023-08-15'),(9,'Ethan Anderson','ethan.anderson@example.com','9012345678','963 Walnut Way, Springfield','2023-09-20'),(10,'Isabella Thomas','isabella.thomas@example.com','1239874560','159 Willow Drive, Shelbyville','2023-10-25'),(11,'Liam Lee','liam.lee@example.com','2135467890','753 Aspen Lane, Ogdenville','2023-11-30'),(12,'Mia Hernandez','mia.hernandez@example.com','3456789120','357 Maple Circle, Capital City','2023-12-05'),(13,'Noah White','noah.white@example.com','4567890231','246 Oak Street, Springfield','2023-06-18'),(14,'Amelia Lewis','amelia.lewis@example.com','5678901342','135 Pine Avenue, Shelbyville','2023-07-21'),(15,'Logan Clark','logan.clark@example.com','6789012453','876 Elm Court, Ogdenville','2023-08-24'),(16,'Ella Robinson','ella.robinson@example.com','7890123564','234 Cedar Drive, Capital City','2023-09-27'),(17,'Mason Walker','mason.walker@example.com','8901234675','345 Birch Lane, Springfield','2023-10-30'),(18,'Charlotte Perez','charlotte.perez@example.com','9012345786','456 Redwood Street, Shelbyville','2023-11-02'),(19,'Alexander Hall','alexander.hall@example.com','1234567809','567 Cherry Avenue, Ogdenville','2023-12-05'),(20,'Sofia Young','sofia.young@example.com','2345678910','678 Walnut Street, Capital City','2023-06-08'),(21,'Benjamin King','benjamin.king@example.com','3456789021','789 Willow Court, Springfield','2023-07-12'),(22,'Harper Scott','harper.scott@example.com','4567890132','891 Aspen Circle, Shelbyville','2023-08-16'),(23,'Elijah Adams','elijah.adams@example.com','5678901243','213 Maple Drive, Ogdenville','2023-09-20'),(24,'Abigail Baker','abigail.baker@example.com','6789012354','324 Oak Lane, Capital City','2023-10-24'),(25,'Lucas Carter','lucas.carter@example.com','7890123465','435 Pine Street, Springfield','2023-11-28'),(26,'Aria Rivera','aria.rivera@example.com','8901234576','546 Elm Way, Shelbyville','2023-12-02'),(27,'Henry Flores','henry.flores@example.com','9012345687','657 Cedar Circle, Ogdenville','2023-06-04'),(28,'Grace Ramirez','grace.ramirez@example.com','1236789045','768 Birch Court, Capital City','2023-07-09'),(29,'Jack Turner','jack.turner@example.com','2347890156','879 Redwood Avenue, Springfield','2023-08-14'),(30,'Chloe Torres','chloe.torres@example.com','3458901267','981 Cherry Drive, Shelbyville','2023-09-19');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-05  3:00:11
