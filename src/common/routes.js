const handle404 = (req, res) => {
  const responseObject = {
    code: 404,
    error: 'Page not found 🤷‍'
  };

  return res.status(404).json(responseObject);
};

const handleServerErrors = (err, req, res) => {
  const code = err.statusCode || 500;
  const error =
    err.statusMessage || 'Something went wrong, internal server error';

  console.error(err);
  
  return res.status(code).json({
    code,
    error
  });
};

module.exports = {
  handle404,
  handleServerErrors
};
