import { Injectable } from "@nestjs/common";
import Mail from "nodemailer/lib/mailer";
import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/smtp-pool";
import {ApolloClient, gql} from "@apollo/client";

@Injectable()
export class MailService {
  private transporter: Mail;
  private client : ApolloClient<any>

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  }

  async sendVerification(email: string, token: string): Promise<void> {
    const query = gql(`query isValidToken($token: String!){
        isValidToken(token: $token)
    }`);
    try{
      const response = await client.query
    }
    return await this.transporter.sendMail(mailOptions);
  }
}
