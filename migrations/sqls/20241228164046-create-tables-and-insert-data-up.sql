-- Create Table orders
CREATE TABLE public.orders (
	id serial NOT NULL,
	order_description varchar(100) NOT NULL,
	created_at timestamp NOT NULL,
	CONSTRAINT orders_pk PRIMARY KEY (id)
);

-- Create Table products
CREATE TABLE public.products (
	id int NOT NULL,
	product_name varchar(100) NOT NULL,
	product_description text NULL,
	CONSTRAINT products_pk PRIMARY KEY (id)
);

-- Create Table order_product_map
CREATE TABLE public.order_product_map (
	id serial NOT NULL,
	order_id int NOT NULL,
	product_id int NOT NULL,
	CONSTRAINT order_product_map_pk PRIMARY KEY (id),
	CONSTRAINT order_product_map_orders_fk FOREIGN KEY (order_id) REFERENCES public.orders(id),
	CONSTRAINT order_product_map_products_fk FOREIGN KEY (product_id) REFERENCES public.products(id)
);

-- Insert data into products table
insert into
	public.products(id, product_name, product_description)
values
	(1, 'HP laptop', 'This is HP laptop'),
	(2, 'lenovo laptop', 'This is lenovo'),
	(3, 'Car', 'This is Car'),
	(4, 'Bike', 'This is Bike');