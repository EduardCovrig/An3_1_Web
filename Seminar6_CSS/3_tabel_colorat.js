// let evenCollection = document.querySelectorAll("tbody tr:nth-child(even)");
// let oddCollection = document.querySelectorAll("tbody tr:nth-child(odd)");

// if(evenCollection && evenCollection.length>0)
//     {
//         for(let item of evenCollection)
//             {
//                 item.bgColor="red";
//             }
//     }
// if(oddCollection && oddCollection.length>0)
//     {
//         for(let item of oddCollection)
//             {
//                 item.bgColor="yellow";
//             }
//     }

let oddCollection=document.querySelectorAll("tbody tr:nth-child(odd)");
let firstRow=document.querySelector("tbody tr:first-child");
let lastRow=document.querySelector("tbody tr:last-child");

oddCollection.forEach(x => x.style.backgroundColor="magenta");
lastRow.style.backgroundColor="blue";
firstRow.style.backgroundColor="green";
