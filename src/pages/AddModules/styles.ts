const styles = {
  root: {
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

  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },

  addIcon: {
    flexShrink: 0,
    width: 40,
    height: 40,
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'primary.main',
    backgroundColor: 'background.secondary',
  },

  iconSelected: {
    color: 'common.white',
    backgroundColor: 'primary.main',
  },

  helpIcon: {
    color: 'text.secondary',
  },
};

export default styles;
