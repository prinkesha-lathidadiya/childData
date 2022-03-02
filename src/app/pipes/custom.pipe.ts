import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string): string {
    // var stv = value
    let newVal : any = value.split(" ");
    let newstrign = "";
    if(newVal){
      debugger
      
      newVal.forEach((element: any) => {
        if(element == "prinkesha") {
          element = "";
        }
        newstrign += element;
      });

      // newVal.map((f) => {
      //   // f.slice()
      //   console.log('sp',f);
      // })
    }

    return newstrign;

  
      // else {
      //   newVal.map((f) => {
      //     return  f;
      //   })

  
    // console.log('stv',stv);
  }
}
// }
//  if (evt.target.checked) {
//   this.userList.map((e) => {
//     e.select = true;
//   })
// }

// if (!items) { return []; }
// if (!text) { return items; }
// text = text.toLowerCase();
// transform(value: string): string {
//   let newVal = value.replace(/[^\w\s]/gi, '')
//   return newVal.charAt(10).toLowerCase() + newVal.slice(10);
// }