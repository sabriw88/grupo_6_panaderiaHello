drop database if exists bakerydb;

create database bakerydb;


use bakerydb;


CREATE TABLE `products` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(150) NOT NULL,
   `price` DECIMAL NOT NULL,
   `categoryId` INT NOT NULL,
   `stock` INT NOT NULL,
   `image` VARCHAR(100) NOT NULL,
   `description` TEXT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `surname` VARCHAR(50) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `bday` DATETIME,
   `adress` VARCHAR(100),
   `password` VARCHAR(200) NOT NULL,
   `avatar` VARCHAR(100),
   `admin` TINYINT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `bag` (
   `id` INT AUTO_INCREMENT,
   `userId` INT NOT NULL,
   `date` DATE NOT NULL,
   `status` VARCHAR(100) NOT NULL,
   `total` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `bag_products` (
   `id` INT AUTO_INCREMENT,
   `bagID` INT NOT NULL,
   `productId` INT NOT NULL,
   `quantity` INT NOT NULL,
   `unitPrice` DECIMAL NOT NULL,
   `total` DECIMAL NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_79976fad-8437-48e6-b358-76992bcbc177` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`)  ;

ALTER TABLE `bag_products` ADD CONSTRAINT `FK_a699484a-dae4-418b-b2b0-89e5d4164fbe` FOREIGN KEY (`productId`) REFERENCES `products`(`id`)  ;

ALTER TABLE `bag_products` ADD CONSTRAINT `FK_2ed43bd5-e9d8-4c20-b352-ae344ec7d11f` FOREIGN KEY (`bagID`) REFERENCES `bag`(`id`)  ;


use bakerydb; 

INSERT INTO categories (id , name )
VALUES 
(DEFAULT,'Pan'),
(DEFAULT,'Tortas'),
(DEFAULT,'Delicias');

INSERT INTO products (id , name, price, categoryId, stock, image, description)
VALUES 
(DEFAULT,"Baguette", 80, 1, 100,  "panBaguete.jfif", 'La baguette o baguete​ es una variedad de pan originaria de Francia que se caracteriza por una forma alargada. Es uno de los formatos de pan más conocidos, producidos y consumidos a nivel internacional.' ),
(DEFAULT,"Pan de molde", 60, 1, 80,  "panBaguete.jfif", 'El pan de molde (o pan sandwich) es aquel pan cuya masa se enriquece con mantequilla o leche y se hornea dentro de un molde o lata. Gracias a esto, el pan resultante tiene una corteza blanda y dorada, y una miga suave y esponjosa. Se suele vender rebanado, y se utiliza para elaborar sándwiches principalmente.' ),
(DEFAULT,"Pan negro", 100, 1, 150,  "image-1680739658902.jpg", 'Pan de molde de centeno con una generosa capa de semillas' ),
(DEFAULT,"Selva Negra", 2000, 2, 5,  "selva-negra.jpg", 'torta de chocolate.' );

INSERT INTO users (id , name, surname, email, bday, adress, password, avatar, admin)
VALUES 
(DEFAULT,'John','Snow','jsnow@gmail.com','1985-05-06','cualquiera','$2a$10$Rne.1OOJ8IOwYkrTJSHtIuMyF3OhmT2p1wOH4VspdYja4C6prxwo2','1680480988558.jpg',0),
(DEFAULT,'Brandon','Stark','bstark@gmail.com','1999-06-04','cualquiera','$2a$10$Rne.1OOJ8IOwYkrTJSHtIuMyF3OhmT2p1wOH4VspdYja4C6prxwo2','1680480988558.jpg',0),
(DEFAULT,'Digital','House','dhouse@gmail.com','2001-05-06','cualquiera','$2a$10$Rne.1OOJ8IOwYkrTJSHtIuMyF3OhmT2p1wOH4VspdYja4C6prxwo2','1680480988558.jpg',1);


