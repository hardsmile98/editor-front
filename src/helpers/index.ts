function isDev(): boolean {
  return process.env.NODE_ENV === 'development';
}

function setLS(key: string, value: string | Record<string, unknown> | string[]) {
  if (typeof value === 'object') {
    // eslint-disable-next-line no-param-reassign
    value = JSON.stringify(value);
  }

  window.localStorage.setItem(key, value);
}

function getLS(key: string) {
  try {
    const data = localStorage.getItem(key);

    if (data) {
      if (data === '{}') {
        return {};
      }

      if (
        (data.indexOf('{') >= 0 && data.indexOf('}') >= 0)
        || (data.indexOf('[') >= 0 && data.indexOf(']') >= 0)
      ) {
        return JSON.parse(data);
      }

      return data;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return null;
}

function deleteLS(key: string) {
  window.localStorage.removeItem(key);
}

export {
  isDev,
  setLS,
  getLS,
  deleteLS,
};
