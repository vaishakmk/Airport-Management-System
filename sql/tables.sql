drop database if exists AMS_DB;
create database AMS_DB;
use AMS_DB;

DROP TABLE passengers;
CREATE TABLE passengers  (passenger_id INTEGER NOT NULL, 
						passenger_name VARCHAR(20) NOT NULL,
						passenger_email VARCHAR(20) NOT NULL,
						phone INTEGER NOT NULL,
						PRIMARY KEY (passenger_id));
  
  
CREATE TABLE airport_employee  (airport_empid INTEGER NOT NULL, 
								airport_empname VARCHAR(20) NOT NULL,
								airport_empemail VARCHAR(20) NOT NULL,
								phone INTEGER NOT NULL,
								PRIMARY KEY (airport_empid));
                        
CREATE TABLE airlines ( airline_id VARCHAR(5) NOT NULL,
                        airline_name VARCHAR(20) NOT NULL,
                        num_flights INTEGER NOT NULL,
                        PRIMARY KEY (airline_id));
                        

CREATE TABLE airline_employee  (airline_empid INTEGER NOT NULL, 
								airline_idref VARCHAR(5) NOT NULL,
                                airline_empname VARCHAR(20) NOT NULL,
								airline_empemail VARCHAR(20) NOT NULL,
								phone INTEGER NOT NULL,
								PRIMARY KEY (airline_empid,airline_idref),
                                FOREIGN KEY (airline_idref) REFERENCES airlines(airline_id));
                        
CREATE TABLE gate ( gate_num INTEGER NOT NULL,
					gate_status VARCHAR(10) DEFAULT "Free",
					PRIMARY KEY (gate_num));
                    
                    
CREATE TABLE baggage_claim ( bc_num INTEGER NOT NULL,
							 bc_status VARCHAR(10) DEFAULT "Free",
                             num_flights_assigned INTEGER DEFAULT 0,
							 PRIMARY KEY (bc_num));

					
CREATE TABLE flight  (flight_num INTEGER NOT NULL, 
					  airline_idref VARCHAR(5) NOT NULL,
					  `source` VARCHAR(20) NOT NULL,
					  destination VARCHAR(20) NOT NULL,
					  arr_dep VARCHAR(20),
                      timing TIME,
                      gate_assigned INTEGER,
                      bagclaim_assigned INTEGER,
					  PRIMARY KEY (flight_num),
					  FOREIGN KEY (airline_idref) REFERENCES airlines(airline_id),
                      FOREIGN KEY (gate_assigned) REFERENCES gate(gate_num),
                      FOREIGN KEY (bagclaim_assigned) REFERENCES baggage_claim(bc_num)
                      );
                      
                      
                      
                      
SELECT * FROM flight;