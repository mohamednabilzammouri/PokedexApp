export  type Pokemon = {
name:string;
number:number;
url?:string;
image?:string;
types?:Type[];
stats?:Stat[];

}
type Type= {
    name:string;
    url:string;
}
type Stat= {
    base_stat:number;
    stat:Type;
}


