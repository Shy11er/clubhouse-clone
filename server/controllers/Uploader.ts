import multer from "multer";

export const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "public/avatars");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});
