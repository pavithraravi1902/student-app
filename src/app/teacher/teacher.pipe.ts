import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teacherFilter'
})
export class TeacherPipe implements PipeTransform {
  transform(collection: Array<any>, key?: any): any[] {
      /*transform(collection: Array<any>, key?: any): any[] {
     if(!key){
      return collection
    }else{
     return collection.filter((item)=>{
       return item.name == key;
     })
    }*/
    if(!key){
      return collection;
    }else{
    let filteredData:any = collection.filter(value => {
      return value.name.toLowerCase().includes(key.toLowerCase()); 
    })  
    return filteredData;
  }
  }
}

