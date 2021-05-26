import * as path from "path";
import { IZSME } from "../themes/izsme/type";

const content: IZSME = {
  theme: path.resolve(__dirname, "../themes/izsme/template.hbs"),
  favicon: "data:image/x-icon;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAAAEAAAAAAAAAAAAAAAEAAAAAAAC5ix8ABCdZANTs/gAAJlwAyuf8AP/9/gAPLVAAES1QACUxKwDR6/kA0uf8APf7/AAAJVcA9/r/ANLq/ADcvk0Az+n/ANq9UADcvVAACypRAPr9/wDT7P8A1ez/AP79/wD//f8A9Pj9AAAjVQDc6f8Avo4YAAIoWAAAIVMA//79AKt+HQDft0EACSlNAAYkUwAUJ0oAqLvWANy/TADVrjoA0er+ANLq/gAKKlMA///7AMjk/wD8/v4AzOT/AAcoWQDK5/8A8/j/AAglUQAeM1IA2sBKAPT7/wDav00A0ev8AAooUQDP6v8A0ur/AAMlWgAFKVcA+v7/AAcpVwAAIVUA/P7/ANTt/wAFKFoA//7/AMvo/QAEJFUA0ez6AAYsTwAEK1IA+vz9AAEmWAADJlgABCNQACo2OgANE9AAyqQ4AEZihADhvkkAIjc4AAYoUwD8/fsACChTAP38/gCupHQA/f/+ALjY+wAFKVkA///+ACc8XADJ6P8ACSRGAMzo/wDN6P8ABilRAAEnVwDS7PwAi6fJAPj8/wADJ1cA+fz/ANDr/wABJloA9v//ANLr/wDT6/8A+v//AAciRAD9//8AqbvSAP///wABJVUAACRYANDp/QAAJ1gAZHeMAAkR0AAJKFUABidYAMzn+wCxyOgACSpYAOf0/wDO6f4A7fX8AOC+TADEs2QAu5AZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcXFxWyBVHCFRCENxcXFxcXFxcR8qJyYmJiZScXFxcXFxcXFxgjQ2gBESAENxcXFxcQckHxNXSDpsFjx/cXFxcVt6Txw4OixeG2FjLk1YcXFxcVt9ECV2Fxg1b4EPDXFxcR8tcjJteDcOZD4pRy9vcXFnBDl3WWgCCUEVGk5gBitxZWgOdGtwOzcje0YoKH5tcR9JaSgdBTsKVFNdKHkxK3FxcVwoL0BKKFsBMERqcXFxcTNWDFBaIig/fG4eHxlxcXEUZktKA34oXztKS0JbcXFxcXEBSkp1YmlKSkVvcXFxcXFxbwtKYnNKTFRxcXFxcXFxcStbb29xPW9xcXFxcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
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