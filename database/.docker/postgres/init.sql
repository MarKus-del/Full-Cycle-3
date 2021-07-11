CREATE TABLE credit_cards (
  id uuid NOT NULL,
  name VARCHAR NOT NULL,
  number VARCHAR NOT NULL,
  expiration_month VARCHAR NOT NULL,
  expiration_year VARCHAR,
	CVV VARCHAR NOT NULL,
	balance float not null,
	balance_limit float not null,
  PRIMARY KEY (id)
);

CREATE TABLE transactions (
  id uuid NOT NULL,
	credit_card_id uuid NOT NULL references credit_cards(id),
  amount float NOT NULL,
  status VARCHAR NOT NULL,
  description VARCHAR,
	store VARCHAR NOT NULL,
	created_at timestamp not null,
  PRIMARY KEY (id)
);

INSERT INTO credit_cards(id, name, number, expiration_month, expiration_year, CVV, balance, balance_limit)
VALUES('1a1c5e5b-f5a3-4bc4-ae83-067f269aa472', 'fulano', '1111111111111103', 7, 2021, '123', 0, 1000000000);

CREATE DATABASE store;
CREATE DATABASE invoice;