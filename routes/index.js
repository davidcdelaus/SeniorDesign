const adminRoutes = require("./admin");
const loginRoutes = require("./login");
const buyerRoutes = require("./buyer");
const emcRoutes = require("./emc");
const helpRoutes = require("./help");
const homeRoutes = require("./homescreen");


const constructorMethod = app => {
  app.use("/admin", adminRoutes);
  app.use("/login", loginRoutes);
  app.use("/buyer",buyerRoutes);
  app.use("/emc",emcRoutes);
  app.use("/help",helpRoutes);
  app.use("/",homeRoutes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;