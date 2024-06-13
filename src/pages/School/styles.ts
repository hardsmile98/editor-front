const styles = {
  root: {
    pb: 14,
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
    zIndex: 100,
  },

  popover: {
    maxWidth: 240,
  },

  tooltip: {
    p: 1,
    fontSize: 'body2.fontSize',

    span: {
      color: 'text.secondary',
      fontWeight: 'fontWeightRegular',
    },
  },

  menuItem: {
    width: 68,
    height: 68,
    borderRadius: 1,
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

  modules: {
    p: 3,

    '> li:not(:last-of-type)': {
      mb: 1,
    },
  },

  module: {
    p: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 1,
    cursor: 'pointer',
  },

  moduleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },

  moduleIcon: {
    width: 40,
    height: 40,
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'common.white',
    backgroundColor: 'primary.main',
  },

  arrow: {
    color: 'text.secondary',
  },
};

export default styles;
