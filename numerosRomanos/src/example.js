
const numRom1=["0","I","II","III","IV","V","VI","VII","VIII","IX"]
const numRom2=["0","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
const numRom3=["0","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
const numNaturales1=[0,1,2,3,4,5,6,7,8,9]
 //let ejemploNumero = 339
 let result="";

export function romanos(ejemploNumero){
    let vectorCentenas
        vectorCentenas = Math.floor(ejemploNumero / 10);
        vectorCentenas = Math.floor(vectorCentenas / 10);
         vectorCentenas = Math.floor(vectorCentenas);
      
 result+=numRom3[vectorCentenas]

  let vectorDecenas
   vectorDecenas= ejemploNumero%100
   vectorDecenas = Math.floor(vectorDecenas / 10);
       
 result+=numRom2[vectorDecenas]
 
 let vectorUnidades= ejemploNumero%10
 result+=numRom1[vectorUnidades]
 
    return result
}

