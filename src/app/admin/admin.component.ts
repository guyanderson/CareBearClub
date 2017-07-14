import { Component } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';

@Component({
   selector: 'app-admin',
   templateUrl: './admin.component.html',
   styleUrls: ['./admin.component.css'],
   providers: [MemberService]
})
export class AdminComponent {

   constructor(private memberService: MemberService) { }

  submitForm(name: string, symbol: string, favorite: string, owned: number, hugs: number) {
      var newMember: Member = new Member(name, symbol, favorite, owned, hugs);
      this.memberService.addMember(newMember);
   }

}
