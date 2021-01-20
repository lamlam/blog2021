import { ErrorResult, SuccessResult } from "open-graph-scraper";

export type URLMetaData = {
  url: string;
  metaData: MetaData;
};

export type MetaData = Omit<SuccessResult, "response"> | ErrorResult;
