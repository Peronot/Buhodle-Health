function healthCheck(_req, res) {
  res.status(200).json({
    status: 'ok',
    message: 'Backend API is running',
    timestamp: new Date().toISOString(),
  })
}

module.exports = { healthCheck }
