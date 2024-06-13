const styles = {
  root: {
    p: 3,
  },

  pages: {
    '> a:not(:last-of-type)': {
      mb: 1,
    },
  },

  page: {
    p: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 1,
  },

  pageWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },

  pageIcon: {
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
};

export default styles;
