import { InMemoryDB } from './InMemoDB';


const db = new InMemoryDB();

db.Set(1, 'name', 'Ghada');
db.Set(1, 'age', '29');
db.Set(1, 'height', '16');

console.log(db.Delete(1, 'height')); 
console.log(db.Get(1, 'age'));    

console.log(db); 