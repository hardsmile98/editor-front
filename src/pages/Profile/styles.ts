const styles = {
  root: {
    pb: 14,
  },

  wrapper: {
    p: 3,

    '>div:not(:last-of-type)': {
      mb: 2,
    },
  },

  navigation: {
    position: 'fixed',
    backgroundColor: 'background.default',
    bottom: 0,
    left: 0,
    right: 0,
    p: 3,
  },

  head: {
    display: 'flex',
    gap: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  add: {
    width: '100%',
    height: 240,
    borderRadius: 1,

    svg: {
      width: 50,
      height: 50,
      color: 'primary.main',
    },
  },
};

export default styles;
