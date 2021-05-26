import { DOC_COMMON } from "../type";

export interface IZSME extends DOC_COMMON {
  data: {
    title: string,
    mail?: string,
    city?: string,
    status?: {
      text: string,
    }[],
    experience?: {
      company: string,
      interval: string,
    }[],
    social?: {
      platform: string,
      id: string,
      link: string
    }[],
    education?: {
      interval: string,
      college: string
    }[],
  }
}
