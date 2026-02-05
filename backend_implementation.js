app.post('/auth/login', async (req, res) => {
  res.json({
    token: "test-token",
    user: {
      id: 1,
      email: req.body.email,
      role: "admin"
    }
  });
});
