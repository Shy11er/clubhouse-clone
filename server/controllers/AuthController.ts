import axios from "axios";
import { Response, Request } from "express";
import { Code, User } from "../../models";

class authController {
  //!ET ME
  getMe(req: Request, res: Response) {
    res.json(req.user);
  }

  //! AUTH CALLBACK
  authCallback(req: Request, res: Response) {
    res.send(
      `"<script>window.opener.postMessage('${JSON.stringify(
        req.user
      )}', '*');window.close();</script>"`
    );
  }

  //!ACTIVATE ACCOUNT
  async activate(req: Request, res: Response) {
    const userId = req.user.data?.id;
    const smsCode = req.query.code;

    if (!smsCode) {
      return res.status(400).json({
        message: "Enter activating code",
      });
    }
    console.log(userId, smsCode);
    const whereQuery = { user_id: userId, code: smsCode };

    try {
      const findOne = await Code.findOne({
        where: whereQuery,
      });

      if (findOne) {
        // await Code.destroy({
        //   where: whereQuery,
        // });
        User.update({ isActive: 1 }, { where: { id: userId } });

        return res.send();
      } else {
        throw new Error("User is undefined");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to activate account",
      });
    }
  }

  //! SEND SMS TO PHONE
  async sendSMS(req: Request, res: Response) {
    const phone = req.query.phone;
    const userId = req.user.data?.id;

    const code: string = (
      Math.floor(Math.random() * (9999 - 1001)) + 1000
    ).toString();

    if (!phone) {
      return res.status(400).json({
        message: "Phone number is not defined!",
      });
    }

    const options = {
      method: "POST",
      url: "https://telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com/sms-verification-code",
      params: {
        phoneNumber: "79871169415",
        verifyCode: code,
        appName: "clubhouse",
      },
      headers: {
        "X-RapidAPI-Key": "fbca8a04f8msh354fe5934e12c41p1345bdjsndfb2375ea4c9",
        "X-RapidAPI-Host":
          "telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com",
      },
    };

    try {
      /*
        TODO: find sms api!! 
        const response = await axios.request(options);

        console.log(response);
      */

      const findOne = User.findOne({
        where: {
          id: userId,
        },
      });

      if (findOne) {
        await User.update({ phone }, { where: { id: userId } });
      }

      await Code.create({
        code: code,
        user_id: userId,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Failed to send SMS-code",
      });
    }
  }
}

const AuthController = new authController();

export default AuthController;
