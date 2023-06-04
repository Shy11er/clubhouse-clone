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
    const userId = req.user.id;
    const smsCode = req.query.code;

    if (!smsCode) {
      return res.status(400).json({
        message: "Enter activating code",
      });
    }

    const whereQuery = { code: smsCode, user_id: userId };

    try {
      const findOne = await Code.findOne({
        where: whereQuery,
      });

      if (findOne) {
        await Code.destroy({
          where: whereQuery,
        });
        User.update({ isActive: true }, { where: { id: userId } });
        return res.send();
      } else {
        throw new Error("User is undefined");
      }
    } catch (error) {
      return res.status(500).json({
        message: "Failed to activate account",
      });
    }
  }

  //! SEND SMS TO PHONE
  async sendSMS(req: Request, res: Response) {
    const phone = req.query.phone;
    const userId = req.user.id;

    if (!phone) {
      return res.status(400).json({
        message: "Phone number is not defined!",
      });
    }

    const options = {
      method: "GET",
      url: "https://phonenumbervalidatefree.p.rapidapi.com/ts_PhoneNumberValidateTest.jsp",
      params: {
        // number: `+${phone}`,
        number: `+79871169415`,
        country: "RU",
      },
      headers: {
        "X-RapidAPI-Key": "fbca8a04f8msh354fe5934e12c41p1345bdjsndfb2375ea4c9",
        "X-RapidAPI-Host": "phonenumbervalidatefree.p.rapidapi.com",
      },
    };

    try {
      // await axios.request(options);

      await Code.create({
        code: Math.floor(Math.random() * (9999 - 1001)) - 1000,
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
