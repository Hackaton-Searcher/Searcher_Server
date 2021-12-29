import { Router } from "express";
import request from "request";
import {
  channelListFormatter,
  channelItemFormatter,
} from "../utils/channelFormater";

const router = Router();

router.get("/channel/:channelId", (req, res) => {
  const channelId = req.params.channelId;

  if (!channelId) {
    return res.send("channelId가 없어요");
  }

  request(
    {
      url: `${process.env.YT_API_URI}/channels`,
      qs: {
        part: "statistics, snippet",
        id: channelId,
        key: process.env.API_KEY,
      },
    },
    (error, response) => {
      if (error) {
        return res.status(500).json({
          message: "서버에러",
        });
      }

      if (JSON.parse(response.body).pageInfo.totalResults === 0) {
        return res.json({
          message: "찾는 유저가 없습니다.",
        });
      }

      const foundChannel = JSON.parse(response.body).items;

      return res.json(channelItemFormatter(foundChannel[0]));
    }
  );
});

router.get("/channel", (req, res) => {
  const username = req.query.username;

  if (!username) {
    return res.send("쿼리에 username넣어줘.");
  }

  request(
    {
      url: `${process.env.YT_API_URI}/search`,
      qs: {
        order: "relevance",
        part: "snippet",
        q: username,
        type: "channel",
        key: process.env.API_KEY,
      },
    },
    (error, response) => {
      if (error) {
        return res.status(500).json({
          message: "서버에러",
        });
      }
      const channelList = channelListFormatter(JSON.parse(response.body).items);
      return res.json({ channelList });
    }
  );
});

export default router;
