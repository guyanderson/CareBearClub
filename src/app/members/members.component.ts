import { Component } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
   members: Member[] = [
      new Member("Jun", "pua aloalo", "Daydream Bear", 23, 9, 6, 1),
      new Member("David", "?", "Good Luck Bear", 2, 2, 1, 2)
   ];

}
