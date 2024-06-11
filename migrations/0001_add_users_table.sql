-- Migration number: 0001 	 2024-03-28T17:59:48.230Z
create table users (
    id integer primary key,
    name text,
    email text
);
