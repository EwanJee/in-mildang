import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { MemberService } from "./member.service";
import { Member } from "./entities/member.entity";
import { CreateMemberInput } from "./dto/create-member.input";
import { GraphQLBoolean } from "graphql/type";

@Resolver(() => Member)
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Query(() => [Member])
  findMembers() {
    return this.memberService.findAll();
  }

  @Query(() => Member)
  findMember(@Args("id") id: number) {
    return this.memberService.findOne(id);
  }

  @Query(() => GraphQLBoolean)
  async isValidToken(@Args("input") input: string): Promise<boolean> {
    return await this.memberService.isValidToken(input);
  }

  @Mutation(() => Member)
  async createMember(@Args("input") createMemberInput: CreateMemberInput) {
    return await this.memberService.createMember(createMemberInput);
  }

  @Mutation(() => Member)
  removeMember(@Args("id") id: number) {
    return this.memberService.remove(id);
  }
}
