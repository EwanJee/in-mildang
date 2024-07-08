import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Member" })
export class Member {
  @PrimaryGeneratedColumn()
  id: bigint;
}
