import { OwnerType } from './user.type';

export type DailyBoardType = {
  _id: string;
  title: string;
  tags: string;
  contents: string;
  heart: number;
  commentCount: number;
  comments: any[];
  owner: OwnerType;
  createdAt: Date;
  __v: number;
};

export type InformationBoardType = {
  _id: string;
  title: string;
  category: string;
  city: string;
  detailCity: string;
  tags: string;
  contents: string;
  heart: number;
  commentCount: number;
  comments: any[];
  owner: OwnerType;
  createdAt: Date;
  __v: number;
};
