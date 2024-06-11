const styles = {
  list: {
    '> a': {
      display: 'block',
    },

    '> a:not(:last-of-type)': {
      mb: 1,
    },
  },

  item: {
    p: 1.5,
    display: 'flex',
    gap: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatar: {
    width: 50,
    height: 50,
  },

  content: {
    display: 'flex',
    gap: 1,
    alignItems: 'center',
  },

  students: {
    color: 'text.secondary',
    display: 'flex',
    gap: 0.5,
    alignItems: 'center',
  },
};

export default styles;
