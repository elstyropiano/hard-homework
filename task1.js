
const people = [
    {
      firstName: "Bartolomeo",
      lastName: "Lozano",
    },
    {
        firstName: "asdasdasd",
        lastName: "Wjkasdkjas",
    },
  ]

//   const getNames=people.map(people=>people.firstName)
//   console.log(getNames)

/////////////////////////////////////////////////////////////

function createNickname(people){                                                 // function CreateNickname add new key in Object like nickname 
  const getName=people.map(firstName=>firstName.firstName)
  const Name= getName=>{ 
    for(i=0;i<getName.length;i++)                        
    return getName[i] 
    return name
  }   
  const name=Name(getName)  
  const getLastName=people.map(lastName=>lastName.lastName)                    // ready function return firstName and lastNAME from Obj
  const LastName= getLastName=>{ 
    for(i=0;i<getLastName.length;i++)                      
      return getLastName[i]
      return LastName(getLastName)                                                /// wtorek 17-2   //sroda 17-1 //Czwartek 17.30-23// 
  }
  const lastName=LastName(getLastName) 

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //  Write function which check what arguments was pass to function (name or last name) return name or reverse lastName/// remeber to use only one line in function{}   //
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const nameOrLastName=(name,lastName)=>nameOrLastName=name?  name: lastName.reverse()

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //     Write function which take a function as argument with Name or LastName parameters and return 3 fist letters from argument              //
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ThreeLetters=nameOrLastName=>{
  const lettersArr=[]
  for(i=0;i<3;i++)
  return lettersArr.push(nameOrLastName[i])
}
  



console.log(createNickname(people))












  /////////////////////////////////////////////////////////////////
 

    //  if(nameOrLastName.length>3){
    //    
    //     }} 
    //     return lettersArr.reverse()
      
    

  ////////////////////////////////////////////////////////////
     
   


  
 
 
   
   
     
    //  return getThreeReverseNamesLetters(getNames)
  


 






      // const getLastName=people.map(getLastName=>getLastName.getLastName)      
        // const names=people.map(firstName=>firstName.firstName)                   // return simple name
                                         // return simple name
// const LastName=people.map(getLastName=>getLastName.getLastName) 

//   function  getName()){                              
// for(i=0;i<getNames.length;i++)                            
// return getNames[i]                                                // retrun simple last name

                                                      //retrun simple last name

// console.log(createNickname(people))
//   const getThreeReverseNamesLetters=getName=>{  
//    const lettersArr=[]
//     if(getName.length>3){
//       for(i=0;i<3;i++){
//         let letter=getNames[i]
//        return lettersArr.push(letter)
        
//       }}}
//       return getThreeReverseNamesLetters(getName(getNames))
//     }
 


  
  
//     }}
//     return getThreeReverseNamesLetters(getNames)
//  }

//  console.log(createNickname(people))
 

  


  
    
  //  const lettersArr=[]
  //  const reversed=lettersArr.push(lastNames)
  //  return reversed
  

 
// const slowa={
    
//     lastName: "Wjkasdkjas",
//   }
  
// console.log(getThreeReverseNamesLetters(slowa))



// const getThreeLastReverseLetaters=arr.map(lastName=>{
//     const reverse=lastName.reverse()
//     const lettersArr=[]
//     if(lastName.length>3){
//         for(i=0;i<3;i++){
//             let letter=getName[i]
//             lettersArr.push(letter)  
//         }
//         return lettersArr.reverse()
//     }
//     else 
//     for(i=0;i<getName.length;i++){
//         let letter=getName[i]
//         lettersArr.push(letter) 
//      }

//      return lettersArr.reverse()
//     })
//     for(i=0;i<3;i++){
//         let letter=reverse[i]
//         threeLetters.push(letter)
//     }
//  return threeLetters

    
       
// // const grzegor=[" ",""]

//        console.log (getThreeFirstReverseLetters)

        // const getThreeLastReverseLetters=getLastNames.map(getLastNames=>{
        //     const reverse=getLastNames.split("").reverse()
        //     const threeLetters=[]
        //     for(i=0;i<3;i++){
        //         let letter=reverse[i]
        //         threeLetters.push(letter)
        //     }
        //  return threeLetters})


        // console.log(getThreeLastReverseLetters)
        // console.log(getThreeFirstReverseLetters)
        // const nicknames=(getThreeFirstReverseLetters,getThreeLastReverseLetters).map(firstLetters,LastLetters)=>{
        //     const nickname=firstLetters.concat(lastLetters)
        //     return nickname
        // })
        
        // const firstLetters=getThreeFirstReverseLetters.map(letters=>letters)
        // console.log(nicknames)
        //     for(i=0;i<getThreeFirstReverseLetters.length;i++)
        //     nickname[i]=getThreeFirstReverseLetters.concat(getThreeLastReverseLetters)   
        
        
        // const nickname=createNickname(getThreeFirstReverseLetters(getName),getThreeLastReverseLetters(getLastName))
        // const changeToString=nickname=>nickname.join("")
        // const nicknameChanged=changeToString(nickname)
        // const nicknameToLowerCase=nicknameChanged=>nicknameChanged.toLowerCase() 
        // const nicknameLowerCase=nicknameToLowerCase(nicknameChanged)  // return nicknameLowerCase and it's converted to string
        // const nicknameToArr=nicknameLowerCase=>nicknameLowerCase.split("")
        // const nicknameArr= nicknameToArr(nicknameLowerCase)
        // const firstLetterUppercase=nicknameArr[0].toUpperCase()
        // const firstLetter=[]
        // firstLetter.push(firstLetterUppercase)
        // const nicknameCutFirstIndex=nicknameArr=>nicknameArr.slice(1)
        // const nicknameNoFirstIndex=nicknameCutFirstIndex(nicknameArr)
        // const readyNickname=(firstLetter,nicknameNoFirstIndex)=>firstLetter.concat(nicknameNoFirstIndex)
        // const readyNickArr=readyNickname(firstLetter,nicknameNoFirstIndex)
        // const nick=readyNickArr.join("")
        // const mappedNameWithNick=people.map(people=>{
        //     const firstName=people.firstName
        //     const lastName=people.lastName
        //     const id={
        //         firstName:firstName,
        //         lastName:lastName,
        //         nick:nick
               
        // //     }
        // //     return id
        // // })
        
        // // // // console.log(mappedName)
        
        
        
        
        
        // // // console.log(readyNickname(firstLetterUppercase,nicknameNoFirstIndex))
        
        
        // // //     console.log(firstLetterToUppercase())
        // // // const changeFirstLetter=(firstLetterToUppercase,nicknameArr)=>{
        // // //     nicknameArr
        // // // 
