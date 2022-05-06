export type dailyInfoType = {
  ImageUrl: string;
  Title: string;
  Like: number;
  Text: string;
  Writer: string;
  Date: string;
  Tags: string[];
};
export const dailyInfo: dailyInfoType[] = [
  {
    ImageUrl: 'favicon.ico',
    Title: '이것은 타이틀',
    Like: 12,
    Text: '이건 뭔사진인지 당최 모르겠네 가나다라마바사아자차카타파하 아직도 남았는데 가나다라마바사 두줄이상이면 점으로 돼야하는데 이게 될라나',
    Writer: '글쓴이닉네임',
    Date: '2022-04-08',
    Tags: [
      '#인천',
      '#여행',
      '#두글자 이상인 태그가 있으면 점으로 처리해야하는데 얘 왜케 안되는거같지??',
    ],
  },
  {
    ImageUrl: 'favicon.ico',
    Title: '이것은 타이틀',
    Like: 12,
    Text: '한줄이면 이렇게 출력',
    Writer: '글쓴이닉네임',
    Date: '2022-04-08',
    Tags: [
      '#인천',
      '#여행',
      '#두글자 이상인 태그가 있으면 점으로 처리해야하는데 얘 왜케 안되는거같지??',
    ],
  },
  {
    ImageUrl: 'favicon.ico',
    Title: '이것은 타이틀',
    Like: 12,
    Text: '출력 잘되면 좋겠다',
    Writer: '글쓴이닉네임',
    Date: '2022-04-08',
    Tags: [
      '#인천',
      '#여행',
      '#두글자 이상인 태그가 있으면 점으로 처리해야하는데 얘 왜케 안되는거같지??',
    ],
  },
  {
    ImageUrl: 'favicon.ico',
    Title: '이것은 타이틀',
    Like: 12,
    Text: '이건 뭔사진인지 당최 모르겠네 가나다라마바사아자차카타파하 아직도 남았는데 가나다라마바사 두줄이상이면 점으로 돼야하는데 이게 될라나',
    Writer: '글쓴이닉네임',
    Date: '2022-04-08',
    Tags: [
      '#인천',
      '#여행',
      '#두글자 이상인 태그가 있으면 점으로 처리해야하는데 얘 왜케 안되는거같지??',
    ],
  },
];
