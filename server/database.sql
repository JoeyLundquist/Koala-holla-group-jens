--Run this Code First to create table
CREATE TABLE "koala" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR(25) NOT NULL,
"gender" VARCHAR(1) NOT NULL,
"age" INTEGER,
"readyForTransfer" BOOLEAN,
"notes" VARCHAR(120)
);


--Run this code Next for current list
INSERT INTO "koala"
("name", "gender", "age", "readyForTransfer", "notes")
VALUES
('Scotty', 'M', 4, true, 'Born in Guatemala'),
('Gean', 'F', 5, true, 'Allergic to lots of Lava'),
('Ororo', 'F', 7, false, 'Love lisening to Paula (Abdul)'),
('Logan', 'M', 15, false, 'Love the sauna'),
('Charlie', 'M', 9, true, 'fav band Nirvana'),
('Betsy', 'F', 4, true, 'Has a pet Iguana');


--This code will allow you to be able to see your table within Postico SQL Query section
SELECT * FROM koala;
