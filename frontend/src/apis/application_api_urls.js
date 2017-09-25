const URLS_DEFAULT = {
  LOCAL_HOST: 'http://localhost:3000',
  WS_URL: 'http://localhost:3001',
};

const MESSAGE_API = {
  SEND_MESSAGE: `${URLS_DEFAULT.WS_URL}/sendMessage/`,
  MESSAGES: `${URLS_DEFAULT.WS_URL}/messages`,
};

export { URLS_DEFAULT, MESSAGE_API };
