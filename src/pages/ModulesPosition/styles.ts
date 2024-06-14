const styles = {
  root: {
    pb: 14,
  },

  wrapper: {
    p: 3,
  },

  modules: {
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
    overflow: 'hidden',
  },

  moduleTitle: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },

  moduleIcon: {
    flexShrink: 0,
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

  navigation: {
    position: 'fixed',
    backgroundColor: 'background.default',
    bottom: 0,
    left: 0,
    right: 0,
    p: 3,
    zIndex: 100,
  },

  buttons: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },

  button: {
    flexShrink: 0,
    width: 40,
    height: 40,
    color: 'text.secondary',
    backgroundColor: 'background.secondary',

    ':hover': {
      color: 'text.primary',
      backgroundColor: 'background.secondary',
    },
  },

  delete: {
    backgroundColor: 'delete.secondary',
    color: 'delete.main',

    ':hover': {
      color: 'delete.dark',
      backgroundColor: 'delete.secondary',
    },
  },
};

export default styles;
