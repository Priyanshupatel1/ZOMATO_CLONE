"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _connection = _interopRequireDefault(require("./Database/connection"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Database connection 

_dotenv.default.config();
const zomato = (0, _express.default)();
zomato.use(_express.default.json());
zomato.get("/", (req, res) => {
  res.json({
    message: "server is running successfully.."
  });
});
const PORT = 4000;
zomato.listen(PORT, () => {
  //     ConnectDB()
  //     .then(()=>{console.log ("server is running but DB connection failed");
  //         console.log(error);

  // });
  console.log("server is running !!");
});