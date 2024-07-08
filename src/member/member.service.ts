import { Injectable } from "@nestjs/common";
import { CreateMemberInput } from "./dto/create-member.input";
import { UpdateMemberInput } from "./dto/update-member.input";
import { MailService } from "../mail/mail.service";
import * as uuid from "uuid";

@Injectable()
export class MemberService {
  constructor(private mailService: MailService) {}

  async createMember(createMemberInput: CreateMemberInput) {
    const token: string = uuid.v1();
    await this.sendMail(createMemberInput.email, token);
  }

  findAll() {
    return `This action returns all member`;
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberInput: UpdateMemberInput) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }

  async isValidToken(input: string): Promise<boolean> {
    return false;
  }

  private async sendMail(email: string, token: string): Promise<void> {
    return await this.mailService.sendVerification(email, token);
  }
}
