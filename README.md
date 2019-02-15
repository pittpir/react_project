# Project_3 Create a React Front End

### Create a SPA for Star Wars in React

Have the user land on a page to display their current stats in the game, show stats on the various ships, skills, and characters.  Perhaps make a minimal login page to allow the user to navigate to protected pages where they can see their own account stats.

I would use the 3rd party API (https://swgoh.gg/api/ "SWGOH.GG API Site") as well as my API I developed in Project 2 below.  


#Create DB with CRUD routes in nodeJS

### Star Wars Galaxy of Heroes (swgoh) RESTful API

I play a mobile game called Star Wars Galaxy of Heroes.  The game has an api from which I can absorb and use in my DB.  
The idea would be to query the various characters, ships and abilites.  I can then correlate my account to see what I need to gain new characters being offered.  

For example, let say the game is going to introduce Jedi Knight Luke Skywalker next week giving me 7 days to prepare.  The requirements to obtain him may require a 7 star R2D2, Leia, Chewie, Han Solo and C3PO.  I may only have R2D2 at 5 stars and I do not have C3PO yet.  What would I have to do or how much would it cost me to obtain the characters I need to unlock JK Luke Skywalker?  
 
(https://swgoh.gg/api/ "SWGOH.GG API Site")

### Routes

#### Characters

- /swgoh/characters - (method: GET) will provide a json list of all the characters and their corresponding data.

- /swgoh/characters/id - (method: GET) will provide a json list of all the specific character and their corresponding data.

- /swgoh/characters/id - (method: DELETE) will delete the specific character and their corresponding data.

- /swgoh/characters - (method: POST) Will create a new character with the corresponging data.  Data must be in the body.  Refer to Character's schema (below) for what items to pass.

- /swgoh/characters/id - (method: PUT) will update the specific character and specific data.  Data must be in the body.  Refer to Character's schema (below) for what items to pass.

```sql
  char_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  power INT NOT NULL,
  alignment VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  ship VARCHAR(255),
  ship_id INT REFERENCES ships(ship_id),
  tags text[],
  abilities text[],
  base_id VARCHAR(255) NOT NULL
```

#### Ships

- /swgoh/ships - (method: GET) will provide a json list of all the ships and it's corresponding data.

- /swgoh/ships/id - (method: GET) will provide a json list of all the specific ships and it's corresponding data.

- /swgoh/ships/id - (method: DELETE) will delete the specific ships and it's corresponding data.

- /swgoh/ships - (method: POST) Will create a new ship with the corresponging data.  Data must be in the body.  Refer to Ships' schema (below) for what items to pass.

- /swgoh/ships/id - (method: PUT) will update the specific ship and specific data.  Data must be in the body.  Refer to Ships' schema (below) for what items to pass.

```sql
  ship_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  power INT NOT NULL,
  alignment VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  capital_ship BOOLEAN NOT NULL,
  base_id VARCHAR(255),
  tags text[],
  abilities text[]
```

#### Abilities

- /swgoh/abilities - (method: GET) will provide a json list of all the abilities in the game and their corresponding data.

- /swgoh/abilities/id - (method: GET) will provide a json list of all the specific abilities and their corresponding data.

- /swgoh/abilities/id - (method: DELETE) will delete the specific abilities and their corresponding data.

- /swgoh/abilities - (method: POST) Will create a new abilities with the corresponging data.  Data must be in the body.  Refer to Abilities' schema (below) for what items to pass.

- /swgoh/abilities/id - (method: PUT) will update the specific abilities and specific data.  Data must be in the body.  Refer to Abilities' schema (below) for what items to pass.

```sql
  ability_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  tier_max INT NOT NULL,
  is_zeta BOOLEAN NOT NULL,
  is_omega BOOLEAN NOT NULL,
  combat_type INT NOT NULL,
  type INT,
  is_basic BOOLEAN NOT NULL,
  is_special BOOLEAN NOT NULL,
  is_reinforcement BOOLEAN NOT NULL,
  is_contract BOOLEAN NOT NULL,
  is_unique BOOLEAN NOT NULL,
  is_leader BOOLEAN NOT NULL,
  char_table_id INT REFERENCES Characters(char_id),
  ship_table_id INT REFERENCES Ships(ship_id)
```

### Format

Response formats: 			JSON
Requires authentication?:	NO
Rate limited?				NO
Paramaters:					None

### Examples

Use curl if you like CLI.  By the way, if you wish to see the json in a pretty format there are several options.

**Option 1:** Must have python 2.6+ installed. 

- curl localhost:3000/swgoh/ships | python -m json.tool

**Option 2:**  Install npm package json (My favorite way since it does color!). 

- curl localhost:3000/swgoh/ships | ./node_modules/.bin/json -i

(HINT: **Look for a do.sh in the repository for the examples below**): 

```java
GET command:		curl localhost:3000/swgoh/ships | ./node_modules/.bin/json -i
DELETE Command:		curl -X DELETE localhost:3000/swgoh/abilities/869

POST command:		

curl -X POST localhost:3000/swgoh/ships -H "Content-Type: application/json" -d '[{"name":"Erase","url":"http://erase","image":"//erase","description":"Erase this","power": 55555,"alignment":"Light Side","role":"Meat Maker","capital_ship":false,"base_id":"Yuk","tags":["Galactic Republic","Jedi"],"abilities":["Dispel","Gain Turn Meter","Offense Up","Reset Cooldown"]}]'

PUT (UPDATE) command:

curl -X PUT localhost:3000/swgoh/ships/6 -H "Content-Type: application/json" -d '[{"url": "http://swgoh.gg/ships/cassians-u-wing/777","image": "//swgoh.gg/static/img/assets/tex.charui_uwing_hero.png/777"}]'


```

Use Postman if you like to use a GUI.  Use Content-Type: application/json as the body type when doing post, delete or puts.  
