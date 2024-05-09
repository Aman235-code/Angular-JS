import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';

function formatName(value: string) {
  return "Hi " + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  // properties
  // name = "Aman"
  // status = "single"
  // salary = 4000
  // isButtonDisabled = true
  // inputVal = "test"

  // users = [
  //   {name:"Aman",isSingle:true, salary:1000},
  //   {name:"suresh",isSingle:false, salary:7000},
  //   {name:"mahesh",isSingle:true, salary:9000},
  // ]

  // onChange(e:Event){
  //   const value = (e.target as HTMLInputElement).value;
  //   this.inputVal = value
  // }

  @Input({alias:"username",transform: formatName}) name = ""
  @Input({transform: booleanAttribute}) isSingle!: boolean
  @Input({transform: numberAttribute}) salary!: number
}
