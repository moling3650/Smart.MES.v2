function getStoreMoudles (context) {
  return context.keys().reduce((dict, path) => {
    const key = path.replace(/\.(\/|js)/g, '')
    dict[key] = context(path).default
    return dict
  }, {})
}

export default getStoreMoudles
