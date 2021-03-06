import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
   members: FirebaseListObservable<any[]>;

   constructor(private database: AngularFireDatabase) {
      this.members = database.list('members');
   }

   getMembers() {
      return this.members;
   }

   addMember(newMember: Member) {
      this.members.push(newMember);
   }

   getMemberById(memberId: string){
      return this.database.object('/members/' + memberId);
   }

   updateMember(localUpdatedMember){
     var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
     memberEntryInFirebase.update({name: localUpdatedMember.name,
                                   symbol: localUpdatedMember.symbol,
                                   favorite: localUpdatedMember.favorite,
                                   owned: localUpdatedMember.owned,
                                   hugs: localUpdatedMember.hugs});
   }

   deleteMember(localMemberToDelete){
      var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
      memberEntryInFirebase.remove();
   }

}
