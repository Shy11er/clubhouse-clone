import { Response, Request } from "express";
import { Room } from "../../models";

class postController {
  async getRoom(req: Request, res: Response) {
    try {
      const rooms = await Room.findAll();

      return res.json(rooms);
    } catch (error) {
      return res.status(500).json({ message: "Failed to find rooms", error });
    }
  }
}

const PostController = new postController();

export default PostController;
