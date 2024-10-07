export interface InMemoryDBInterface {
    Set(key: number, field:string , value:string):void;
    Get(key:number, field:string) :string|null;
    Delete(key: number, field: string): boolean;

  }
  