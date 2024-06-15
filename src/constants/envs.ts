const envs = {
  apiUrl: process.env.REACT_APP_API_URL,
  miniAppUrl: process.env.REACT_APP_MINIAPP_URL,
  testInitData: process.env.REACT_APP_TEST_INIT_DATA ?? '',
  tgChannelUrl: process.env.REACT_APP_TELEGRAM_CHANNEL_URL ?? '',
};

export { envs };
