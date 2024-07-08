import { Module } from "@nestjs/common";
import { MemberService } from "./member.service";
import { MemberResolver } from "./member.resolver";
import { MailModule } from "../mail/mail.module";

@Module({
  imports: [MailModule],
  providers: [MemberResolver, MemberService],
})
export class MemberModule {}
