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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  menuItem: {
    width: 68,
    height: 68,
    borderRadius: 1,
    backgroundColor: 'background.paper',
    color: 'text.secondary',

    svg: {
      width: 28,
      height: 28,
    },

    ':hover': {
      border: 1,
      color: 'primary.main',
      borderColor: 'primary.main',
    },
  },
};

export default styles;
