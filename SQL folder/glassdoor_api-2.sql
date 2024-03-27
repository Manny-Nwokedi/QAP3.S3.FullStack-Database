-- create Glassdoor table
create table glassdoor_api (
	id_SERIAL INT,
	name VARCHAR(50),
	description_TEXT TEXT,
	price VARCHAR(50),
	created_at VARCHAR(50)
);
insert into glassdoor_api (id_SERIAL, name, description_TEXT, price, created_at) values (66, 'Sunny Glassdoor', 'This glassdoor has sun images', '$4727.19', 'Youfeed');
insert into glassdoor_api (id_SERIAL, name, description_TEXT, price, created_at) values (78, 'Green Glassdoor', 'This glassdoor has pictures of green plants', '$3583.63', 'Chatterpoint');
insert into glassdoor_api (id_SERIAL, name, description_TEXT, price, created_at) values (26, 'Blue Glassdoor', 'This glassdoor has blueberry images', '$7990.54', 'Zoombeat');
insert into glassdoor_api (id_SERIAL, name, description_TEXT, price, created_at) values (19, 'Rose Glassdoor', 'This glassdoor has pictures of roses', '$5995.15', 'Browseblab');
insert into glassdoor_api (id_SERIAL, name, description_TEXT, price, created_at) values (27, 'Yellow Glassdoor', 'This glassdoor has pictures of sunflowers', '$3176.63', 'Pixonyx');
insert into glassdoor_api (id_SERIAL, name, description_TEXT, price, created_at) values (69, 'Orange Glassdoor', 'This glassdoor has pictures of oranges', '$5686.23', 'Pixoboo');
