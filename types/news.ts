export type NewsType = {
  id: string;
  feedDate: number;
  source: string;
  title: string;
  icon: string;
  imgUrl: string;
  description: string;
  link: string;
  coins: CoinNewsType[];
};

export type CoinNewsType = {
  coinKeyWords: string;
  coinPercent: number;
  coinTitleKeyWords: string;
  coinNameKeyWords: string;
  coinIdKeyWords: string;
};
