INSERT INTO department ( name)
VALUES
  ( 'production'),
  ( 'legal'),
  ( 'maintenance');

INSERT INTO roles (title, salary, department_id) 
VALUES 
('manager', 100000, 1),
('lawyer' 150000, 2),
('engineer' 175000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
('Steve', 'Francis', 1, 1),
('Chris', 'Jackson', 2, 1),
('Robert', 'Pack', 3, 1);
('Blue', 'Edwards', 2, 1);
('Darvin', 'Ham', 3, 1);
('Bob', 'Mcadoo', 3, 1);