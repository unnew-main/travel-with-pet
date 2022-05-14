import api from './common';

export const boardApi = {
  /** 정보페이지 카드 최신순으로 4개 출력 API */
  getForeRecentInfo: async () => {
    return api.get('/writing/sort/recent', {});
  },
  /** 정보페이지 카드 좋아요 순으로 4개 출력 API */
  getForeHeartInfo: async () => {
    return api.get('/writing/sort/heart', {});
  },

  // <<<----------------- 정보 최신순 더보기 API --------------
  /** 정보페이지 여행 최신순 더보기 데이터 출력 API */
  getAllRecentTravel: async () => {
    return api.get('/writing/all/recent/travel', {});
  },
  /**  정보페이지 음식점 최신순 더보기 데이터 출력 API */
  getAllRecentShop: async () => {
    return api.get('/writing/all/recent/store', {});
  },
  /** 정보페이지 숙소 최신순 더보기 데이터 출력 API */
  getAllRecentHotel: async () => {
    return api.get('/writing/all/recent/place', {});
  },
  /** 정보페이지 기타 최신순 더보기 데이터 출력 API */
  getAllRecentOther: async () => {
    return api.get('/writing/all/recent/etc', {});
  },
  // -------------------------------------------------->>>

  // <<<----------------- 정보 좋아요순 더보기 API --------------
  /**  정보페이지 여행 좋아요순 더보기 데이터 출력 API */
  getAllHeartTravel: async () => {
    return api.get('/writing/all/heart/travel', {});
  },
  /** 정보페이지 음식점 좋아요순 더보기 데이터 출력 API */
  getAllHeartShop: async () => {
    return api.get('/writing/all/heart/store', {});
  },
  /** 정보페이지 숙소 좋아요순 더보기 데이터 출력 API */
  getAllHeartHotel: async () => {
    return api.get('/writing/all/heart/place', {});
  },
  /** 정보페이지 기타 좋아요순 더보기 데이터 출력 API */
  getAllHeartOther: async () => {
    return api.get('/writing/all/heart/etc', {});
  },
  // ----------------------------------------------->>>

  /**  일상페이지 전체 데이터 출력 API */
  getAllDaily: async () => {
    return api.get('/writing/all/daily', {});
  },

  // <<<----------------- 검색 API  -----------------

  searchInfo: async (data: string) => {
    return api.get('/writing/search/info', { key: data });
  },
  searchDaily: async (data: string) => {
    return api.get('/writing/search/daily', { key: data });
  },
  // -------------------------------------------->>>

  // <<<----------------- 게시글 상세페이지 출력 API  --------------
  getDetailInfo: async (id: string) => {
    return api.get(`/writing/info/${id}`, {});
  },
  getDetailDaily: async (id: string) => {
    return api.get(`/writing/daily/${id}`, {});
  },
  // ------------------------------------------------------>>>

  /** 마이페이지 내가 쓴 글 출력 API */
  getMyBoard: async (id: string) => {
    return api.get(`/users/${id}`, {});
  },
};
