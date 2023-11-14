const express = require("express");
const router = express.Router();
const cors = require("cors");


const admin = require("firebase-admin");

var serviceAccount = require("./config/serviceaccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

router.use(cors());
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.route("/delete").post((req, res) => {
  const { uid } = req.body;
  admin
    .auth()
    .deleteUser(uid)
    .catch(function (error) {
      console.log("Error deleting user", uid, error);
    });
  res.send({
    uid: uid,
  });
});

module.exports = router;