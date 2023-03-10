## CMPE 202 Fall 2022 Team Project

## Airline Management System (Team GoF)

### Team Members:
- Akshara Narayana
- Divija Naredla
- Prerna Bharadwaj
- Vaishak Melarcode Kallampad

# Task Allocation:
- Frontend: Divija, Prerna
- Backend: Akshara, Vaishak
- Database: Vaishak, Akshara
- Deployment: Akshara

#### Scrum meetings schedule:
Every Monday and Thursday

#### Git repo: 
https://github.com/gopinathsjsu/team-project-gof

#### Sprint Task Sheet:
https://docs.google.com/spreadsheets/d/1AxkQ2meuDWeRD4gkbFXwkRuPzay7Yd-g6rpFt1d4OjM/edit?usp=sharing

<img width="1427" alt="Screen Shot 2022-11-30 at 9 38 56 PM" src="Agile Documentation/Burndown chart.png">

#### XP Core Values Implemented:

Communication: Maintained healthy communication throughout the project implementation and participated in weekly scrum calls to discuss progress.

Simplicity: We started with easy to understand functionality and scaled it up to meet project requirements according to the rubric.

Feedback: Constructive feedback was provided by the team members on features that needed improvement. The feedback was very well received and were effectively implemented by the team members. Frequent reviews helped us solve bugs and make fixes easily.

Courage: We had the courage to incorporate any additional details/tasks that were required for the project progress.

#### XP Core Values Journal:

https://github.com/gopinathsjsu/team-project-gof/blob/main/Agile%20Documentation/XP%20Core%20values%20per%20Sprint.pdf

#### Task Board:

https://docs.google.com/spreadsheets/d/1GpGIGzS88WQOtMfDI9OVqi3wONEa7_-s7MEVtT2srz4/edit?usp=sharing

#### Individual Sprint Activity Journals:

https://github.com/gopinathsjsu/team-project-gof/tree/main/Agile%20Documentation/Individual%20Journals

#### How to run the web-app:
* Step 1: Clone the app by command " git clone https://github.com/gopinathsjsu/team-project-gof"
* Step 2: Go to the client directory and install node modules by command "npm i OR npm install"
* Step 3: Run the client by command "npm start"
* Step 4: Go to the server directory and install node modules "npm i OR npm install"
* Step 5: Run the server by command "node server.js"

#### Tech Stack
* Frontend: React JS, CSS
* Backend: Node JS Express JS 
* Database: MongoDB (hosted on Amazon RDS) 
* Deployment : Amazon EC2 Autoscaled cluster with Load balancing

#### Feature Set:
1. Passenger Registration and Login.
2. Airline Employee Registration and Login.
3. Airport Employee Registration and Login.
4. Display list of flights within neext 1 hour, 2 hours and 4 hours.
5. Add a new flight
6. Update the details of an existing flight.
7. Display Randomly assigned gates for Arriving and Departing flights - designed to prevent conflicting assignments.
8. Airport employees can enable or disable gate assignments for maintenance.
9. Airport employees can assign Baggage Carousel number to Arriving flights without conflicts.

#### General API concensus
1. The code is structured such that it will have service, controllers and routes.
2. Every entity like gate, flight, terminal will have these three componenets. 
3. Controllers react with front end and are responsible for calling services
4. Routes directs control to specific controllers
5. Service will handle the business logic and talk to Database.


#### Design Decisions:
1. We wanted to opt for a simple and minimalistic design for UI to focus on the functionality.
2. We hosted our MongoDB on AWS RDS. 
3. For frontend, we used react for faster page load and reload due to virtual DOM.
4. Node JS for backend for its ability of asynchronous calls and eventloop.

## Diagrams

#### 1. Usecase Diagram

<img width="1310" alt="image" src="https://user-images.githubusercontent.com/99863530/205178388-b652d517-fac1-4e9b-8d49-ddd993eb5499.png">

#### 2. Architecture Diagram

<img width="1394" alt="image" src="https://user-images.githubusercontent.com/99863530/205178498-cdd19d11-cbc4-4b1a-b34c-0f2fd517371e.png">

#### 3. Database Diagram

<img width="1169" alt="Database Diagram" src="https://user-images.githubusercontent.com/99863530/204978478-78a5fc50-0d0c-4996-a1b8-3a7afc9348a2.png">

#### 4. Deployment Diagram

<img width="845" alt="Deployment diagram (1)" src="https://user-images.githubusercontent.com/99863530/204978564-e4b20437-65c2-4fe4-8f2e-5173d5285e95.png">

## Deployment Screenshots

<img width="1430" alt="image" src="https://user-images.githubusercontent.com/99863530/205232147-b3d2558e-37e3-492a-93db-574bae4f4724.png">

<img width="1396" alt="image" src="https://user-images.githubusercontent.com/99863530/205233344-a448c1a1-173a-4049-a3ff-3bde466c2559.png">

<img width="658" alt="image" src="https://user-images.githubusercontent.com/99863530/205233523-20aadfc4-6411-4d47-96f7-0343c2992e35.png">



