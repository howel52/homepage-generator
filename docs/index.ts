import * as path from "path";
import { IZSME } from "../themes/izsme/type";

const content: IZSME = {
  theme: path.resolve(__dirname, "../themes/izsme/template.hbs"),
  data: {
    title: "Wu Hao / 1995",
    mail: "wuhao.52@outlook.com",
    city: "Hangzhou, China",
    status: [
      {
        text: "The cursor always blinks : )"
      }
    ],
    social: [
      {
        platform: "Weibo",
        id: "@茶山小旋风",
        link: "//weibo.com/209995161/"
      },
      {
        platform: "Twitter",
        id: "@howel52",
        link: "//twitter.com/howel52",
      },
      {
        platform: "Instagram",
        id: "@howel.52",
        link: "//www.instagram.com/howel.52/",
      },
      {
        platform: "Wechat",
        id: "howel52",
        link: "//api.qrserver.com/v1/create-qr-code/?size=550x550&data=howel52",
      },
      {
        platform: "Github",
        id: "@howel52",
        link: "//github.com/howel52"
      }
    ],
    experience: [
      {
        interval: "2020/06 - Present",
        company: "Ant Group"
      },
      {
        interval: "2017/09 - 2020/05",
        company: "ByteDance, Ltd."
      }
    ],
    education: [
      {
        interval: "2014/09 - 2018/06",
        college: "Wenzhou Business College"
      }
    ]
  },
};

export default content;