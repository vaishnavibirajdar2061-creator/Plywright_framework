

interface WHO
{
    covid19Test():void;
}

interface IMA extends WHO
{
    physioServics():void;
    cardioService():void;
   
}
interface USMA extends WHO
{
    detailService():void;
    neroService():void;
}

class NobelHs implements IMA,USMA
{
    covid19Test(): void {
        console.log("NobelHs.....Covid19TestService");
    }
    detailService(): void {
    console.log("NobelHs.....dentalService");

    }
    neroService(): void {
    console.log("NobelHs.....neroService");

    }
    physioServics(): void {
        console.log("NobelHs.....PhysioService");

    }
    cardioService(): void {
        console.log("NobelHs.....CardioService");

    }
    medicalService():void
    {
        console.log("NobelHs.....MedicalService");
        
    }
}


console.log("---------------------");

//Object
//parent class ref and parent class object
//let p1:IMA=new IMA();

//child class ref and child class object
let c1:NobelHs=new NobelHs();
c1.medicalService();//individual
c1.cardioService();//inherited abstract method
c1.physioServics();//inherited abstract method
c1.detailService();
c1.neroService();
c1.covid19Test();


console.log("------------");

//parent class ref and child class object "Parent"

let i1:IMA=new NobelHs();
i1.cardioService()
i1.physioServics();
i1.covid19Test();

console.log("------------");
let u1:USMA=new NobelHs();
u1.detailService();
u1.neroService();
u1.covid19Test();

