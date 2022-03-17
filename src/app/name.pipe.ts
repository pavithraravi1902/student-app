import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentFilter'
})
export class StudentFilterPipe implements PipeTransform {

  transform(collection: Array<any>, key?: any): any[] {
    if(!key){
      return collection
    }else{
     return collection.filter((item)=>{
       return item.name == key;
     })
    }
    
     /*console.log(value)
     if(!key) {
         return collection;
     }else{
       collection.filter((item) => {
        item.value == key;
     });
    }*/
    /*if (collection.length == 0 || nameFilter == '') {
      return collection;
    }
    const student = [];
    for (let elt of collection) {
      if(collection == nameFilter){
      student.push(elt);
      }
    }
    console.log(student);
    return student;*/
  }

}
