import { InMemoryDBInterface } from "./InMemoDBInterface";

export class InMemoryDB implements InMemoryDBInterface {

    private db :{ [key: number] :{ [field : string]: string}} = {};
    constructor() {
        this.db={}; 
    }
    Set(key: number, field: string, value: string): void {
        if(!this.db[key]){
            this.db[key] = {};
        }
        this.db[key][field] =value; 
    }
    Get(key: number, field: string): string | null {
        if (this.db[key] && field in this.db[key]) {
            return this.db[key][field]; 
        }
        return null; 
    }
    

    Delete(key: number, field: string): boolean {
       if( this.db[key] && field in this.db[key] !==undefined){
            delete this.db[key][field] ; 
            return true
       }

       return false
    }
  
   
  }
  