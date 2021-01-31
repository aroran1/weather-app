const message = (name = 'user', age = 'not given') => {
  console.log(`Hello ${name} - ${age}`);
}

message('Andres', 12);
message();

