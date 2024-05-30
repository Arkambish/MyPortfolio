import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "arkambisrul@gmail.com",
    pass: "zpzr dtnx ptam yneh",
  },
});

export const mailOptions = {
  from: "arkambisrul@gmail.com",
  to: "arkambisrul@gmail.com",
};
