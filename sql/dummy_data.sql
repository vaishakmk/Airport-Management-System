use AMS_DB;


#Inserting into airlines table
insert into airlines values('AIR', 'Air India', 10);
insert into airlines values('EMR', 'Emirates', 15);
insert into airlines values('SWA', 'South West Airways', 30);
insert into airlines values('BOE', 'Boeing Company', 20);
insert into airlines values('ANA', 'ANA Airlines', 5);
insert into airlines values('JPN', 'Japan Airlines', 8);
insert into airlines values('SIA', 'Singapore Airlines', 15);
insert into airlines values('BSA', 'British Airways', 12);
insert into airlines values('CAP', 'Cathay Pacific', 5);
insert into airlines values('QTR', 'Qatar Airlines', 14);
insert into airlines values('TRA', 'Turkish Airways', 3);

-- ALTER TABLE passengers
-- MODIFY COLUMN phone char(10);

-- ALTER TABLE airport_employee
-- MODIFY COLUMN phone CHAR(10);

-- ALTER TABLE airline_employee
-- MODIFY COLUMN phone CHAR(10);

#Inserting into passengers table
insert into passengers values(1, 'Matthew', 'matthew@gmail.com',6692199296);
insert into passengers values(2, 'Marco', 'marco@gmail.com',6692199291);
insert into passengers values(3, 'neil', 'neil@gmail.com',6692199256);
insert into passengers values(4, 'carlos', 'carlos@gmail.com',6692199266);
insert into passengers values(5, 'siri', 'siri@gmail.com',6692199276);
insert into passengers values(6, 'tina', 'tina@gmail.com',6692199286);
insert into passengers values(7, 'louis', 'louis@gmail.com',6692199176);
insert into passengers values(8, 'markas', 'markas@gmail.com',6692199396);




#Inserting into airport_employee table
insert into airport_employee values(101, 'Quentin', 'quentin@gmail.com',6692100296);
insert into airport_employee values(102, 'Elsa', 'elsa@gmail.com',6692100291);
insert into airport_employee values(103, 'Erin', 'erin@gmail.com',6692100256);
insert into airport_employee values(104, 'Dorothy', 'dorothy@gmail.com',6692100266);
insert into airport_employee values(105, 'Peter', 'peter@gmail.com',6692100276);
insert into airport_employee values(106, 'James', 'james@gmail.com',6692100286);
insert into airport_employee values(107, 'Stanley', 'stanley@gmail.com',6692100176);
insert into airport_employee values(108, 'Angelina', 'angelina@gmail.com',6692100396);



#Inserting into airline_employee table
insert into airline_employee values(201, 'SWA', 'Blake', 'blake@gmail.com',6692200296);
insert into airline_employee values(202, 'EMR', 'Gerry', 'gerry@gmail.com',6692200291);
insert into airline_employee values(203, 'AIR', 'Nita', 'nita@gmail.com',6692200256);
insert into airline_employee values(204, 'AIR', 'Tracy', 'tracy@gmail.com',6692200266);
insert into airline_employee values(205, 'BOE', 'Tessa', 'tessa@gmail.com',6692200276);
insert into airline_employee values(206, 'EMR', 'Katelyn','katelyn@gmail.com',6692200286);
insert into airline_employee values(207, 'QTR', 'Javier', 'javier@gmail.com',6692200176);
insert into airline_employee values(208, 'SIA', 'Christina','christina@gmail.com',6692200396);

#Inserting into gate table
insert into gate values(1, 'Occupied');
insert into gate values(2, 'Unoccupied');
insert into gate values(3, 'Unoccupied');
insert into gate values(4, 'Occupied');
insert into gate values(5, 'Unoccupied');
insert into gate values(6, 'Occupied');
insert into gate values(7, 'Occupied');
insert into gate values(8, 'Unoccupied');
insert into gate values(9, 'Occupied');
insert into gate values(10, 'Unoccupied');
insert into gate values(11, 'Occupied');
insert into gate values(12, 'Occupied');
insert into gate values(13, 'Unoccupied');
insert into gate values(14, 'Unoccupied');
insert into gate values(15, 'Occupied');
insert into gate values(16, 'Occupied');

#Inserting into baggage table
INSERT INTO baggage_claim VALUES(1, 'Occupied',2);
INSERT INTO baggage_claim VALUES(2, 'Occupied',1);
INSERT INTO baggage_claim VALUES(3, 'Unoccupied',0);
INSERT INTO baggage_claim VALUES(4, 'Occupied',2);
INSERT INTO baggage_claim VALUES(5, 'Occupied',2);
INSERT INTO baggage_claim VALUES(6, 'Unoccupied',0);
INSERT INTO baggage_claim VALUES(7, 'Occupied',1);
INSERT INTO baggage_claim VALUES(8, 'Occupied',1);
INSERT INTO baggage_claim VALUES(9, 'Occupied',1);
INSERT INTO baggage_claim VALUES(10, 'Unoccupied',0);



#Inserting into flights
INSERT INTO flight VALUES(401,'AIR','San Jose','New Delhi','Departure','06:45:00',1,NULL);
INSERT INTO flight VALUES(402,'BOE','San Jose','London','Departure','07:00:00',4,NULL);
INSERT INTO flight VALUES(403,'EMR','Dubai','San Jose','Arrival','07:05:00',6,1);
INSERT INTO flight VALUES(404,'QTR','San Jose','Doha','Departure','07:10:00',7,NULL);
INSERT INTO flight VALUES(405,'SIA','Singapore','San Jose','Arrival','07:20:00',9,1);
INSERT INTO flight VALUES(406,'SWA','Chicago','San Jose','Arrival','7:30:00',11,2);
INSERT INTO flight VALUES(407,'QTR','Doha','San Jose','Arrival','08:00:00',12,4);
INSERT INTO flight VALUES(408,'SWA','San Jose','Austin','Departure','08:30:00',15,NULL);
INSERT INTO flight VALUES(409,'SWA','San Jose','New York','Departure','08:35:00',16,NULL);



