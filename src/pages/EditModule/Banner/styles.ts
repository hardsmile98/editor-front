const styles = {
  root: {
    pb: 14,
  },

  wrapper: {
    p: 3,
  },

  navigation: {
    position: 'fixed',
    backgroundColor: 'background.default',
    bottom: 0,
    left: 0,
    right: 0,
    p: 3,
    zIndex: 100,
  },

  preview: {
    mb: 2,
  },

  imgWrapper: {
    borderWidth: 2,
    borderColor: 'green',
    position: 'relative',
    pb: '55%',
    width: '100%',
    borderRadius: 1,
  },

  img: {
    objectFit: 'cover',
    position: 'absolute',
    borderRadius: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },

  editor: {
    '> div': {
      p: 2,
    },

    '> div:not(:last-of-type)': {
      mb: 1,
    },
  },
};

export default styles;
