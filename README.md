# CMPE 202 Fall 2022 Team Project

# Airline Management System (Team GoF)

### Team Members:
- Akshara Narayana
- Divija Naredla
- Prerna Bharadwaj
- Vaishak Melarcode Kallampad

#### Git repo: 
https://github.com/gopinathsjsu/team-project-gof

# Task Allocation:
- Frontend: Divija, Prerna
- Backend: Akshara, Vaishak
- Database: Prerna, Akshara
- Deployment: Akshara

#### Scrum meetings schedule:
Every Monday and Thursday

#### Sprint Task Sheet:
https://docs.google.com/spreadsheets/d/1AxkQ2meuDWeRD4gkbFXwkRuPzay7Yd-g6rpFt1d4OjM/edit?usp=sharing

#### XP Core Values :
**Communication** : We are conduting regular meetings every week on a Zoom call to discuss the crucial aspects of the project by collaborating and communicating with each other.

**Feedback** : Team members are delivering the assigned work frequently and getting feedback about it. We are refractoring the code to make improvements and fixing the bugs.

#### XP Values:
Feedback and Communication (Weekly status update calls)
We communicated regularly online and offline. We had status updates twice every week through calls, zoom and whatsapp. 


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


#### Design Decisions:
1. We wanted to opt for a simple and minimalistic design for UI to focus on the functionality.
2. We hosted our MongoDB on AWS RDS. 
3. For frontend, we used react for faster page load and reload due to virtual DOM.
4. Node JS for backend for its ability of asynchronous calls and eventloop.

## Diagrams

#### 1. Architecture Diagram

<img width="1427" alt="Screen Shot 2022-11-30 at 9 38 56 PM" src="https://user-images.githubusercontent.com/99863530/204974555-fa0a4b78-e792-4758-ab60-39eced088ae6.png">

#### 2. Database Diagram

<img width="685" alt="image" src="https://user-images.githubusercontent.com/99863530/204729594-5003dfbf-9836-4879-a2c2-2170c5eb2683.png">

#### 3. Deployment Diagram

<img width="979" alt="image" src="https://user-images.githubusercontent.com/99863530/204729888-3dd19e23-4d87-45be-a183-2d42a7ae2631.png">


