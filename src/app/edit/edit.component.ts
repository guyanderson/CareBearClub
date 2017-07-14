import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
   selector: 'app-edit',
   templateUrl: './edit.component.html',
   styleUrls: ['./edit.component.css'],
   providers: [MemberService]
})
export class EditComponent implements OnInit {
   @Input() selectedMember;

   constructor(private memberService: MemberService) { }

   ngOnInit() {
   }

   beginUpdatingMember(memberToUpdate){
      this.memberService.updateMember(memberToUpdate);
   }

   beginDeletingMember(memberToDelete){
      if(confirm("Stop! Care Bears don't delete Care Bears!")){
         this.memberService.deleteMember(memberToDelete);
      }
   }

}
