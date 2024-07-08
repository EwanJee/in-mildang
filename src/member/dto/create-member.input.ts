import { InputType } from "@nestjs/graphql";

@InputType()
export class CreateMemberInput {
  readonly email: string;
  readonly password: string;
}
