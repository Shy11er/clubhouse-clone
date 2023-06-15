import { Response, Request } from "express";
import { Room } from "../../models";

class postController {
  async getRooms(req: Request, res: Response) {
    try {
      const rooms = await Room.findAll();

      return res.json(rooms);
    } catch (error) {
      return res.status(500).json({ message: "Failed to find rooms", error });
    }
  }

  async create(req: Request, res: Response) {
    try {
      console.log(req.body, 2222222222222222222);
      const data = {
        title: req.body.title,
        type: req.body.type,
      };
      if (!data.title || !data.type) {
        return res
          .status(400)
          .json({ message: "The title or type of room is undefined" });
      }

      const room = await Room.create(data);
      return res.json(room);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Couldn't create the room" });
    }
  }

  async show(req: Request, res: Response) {
    try {
      const id = req.params.id;

      if (isNaN(Number(id))) {
        return res.status(404).json({ message: "Incorrect room id" });
      }

      const findRoom = await Room.findOne({
        where: {
          id,
        },
      });

      if (!findRoom) {
        return res.status(404).json({
          message: "Failed to find this post in db",
        });
      }

      return res.json(findRoom);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to get currently room",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const roomID = req.params.id;

      if (isNaN(Number(roomID))) {
        return res.status(404).json({ message: "Incorrect room id" });
      }

      const findRoom = await Room.findOne({
        where: {
          id: roomID,
        },
      });

      if (!findRoom) {
        return res.status(404).json({
          message: "The room is undefined",
        });
      }
      console.log("first");

      await Room.destroy({ where: { id: roomID } });
      return res.json({ successful: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Failed with deleting room" });
    }
  }
}

const PostController = new postController();

export default PostController;
