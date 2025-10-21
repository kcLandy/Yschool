module.exports = (message = 'This API version is deprecated, please use /api/v2') => (req, res, next) => {
  res.set('Warning', `199 - "${message}"`);
  // add hint in response locals if controllers want to use
  res.locals.deprecated = true;
  next();
};
