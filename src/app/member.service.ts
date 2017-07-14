import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { MEMBERS } from './temp-members';

@Injectable()
export class MemberService {

   constructor() { }

   getMembers() {
      return MEMBERS;
   }

   getMemberById(memberId: number){
      for (var i = 0; i <= MEMBERS.length - 1; i++) {
         if (MEMBERS[i].id === memberId) {
            return MEMBERS[i];
         }
      }
   }

}
