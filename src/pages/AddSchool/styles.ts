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

  instruction: {
    mt: 1,
    p: 1.5,
  },

  instructionLink: {
    color: 'text.secondary',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  instructionContent: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },

  instructionIcon: {
    width: 40,
    height: 40,
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'background.secondary',
  },

  form: {
    '> div': {
      mb: 2,
    },
  },
};

export default styles;
