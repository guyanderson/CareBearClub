import { Component } from "@angular/core";
import { Member } from "../member.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent {

  constructor(private router: Router){}

   members: Member[] = [
      new Member("Jun", "pua aloalo", "Daydream Bear", 23, 9, 1),
      new Member("David", "?", "Good Luck Bear", 2, 2, 2)
   ];

   goToDetailPage(clickedMember: Member) {
     this.router.navigate(['members', clickedMember.id]);
   };
  }
