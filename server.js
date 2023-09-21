

// const express = require("express");
// const app = express();
// const cors = require("cors");
// const path = require("path");

// const mercadopago = require("mercadopago");

// // REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
// mercadopago.configure({
//   access_token: "TEST-8756355838713146-090922-7c2fab5d1e466389ba76673701a3f6c5-23016067",
// });

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.use(express.static(path.join(__dirname, "./")));
// app.use(cors());

// app.get("/", function (req, res) {
//   const filePath = path.resolve(__dirname, "carrito.html");
//   res.sendFile(filePath);
// });

// app.post("/create_preference", (req, res) => {
//   let preference = {
//     items: [
//       {
//         title: req.body.description,
//         unit_price: Number(req.body.price),
//         quantity: Number(req.body.quantity),
//       },
//     ],
//     back_urls: {
//       success: "https:localhost/8080",
//       failure: "https:localhost/8080",
//       pending: "",
//     },
//     auto_return: "approved",
//   };

//   mercadopago.preferences
//     .create(preference)
//     .then(function (response) {
//       res.json({
//         id: response.body.id,
//       });
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });

// app.get("/feedback", function (req, res) {
//   res.json({
//     Payment: req.query.payment_id,
//     Status: req.query.status,
//     MerchantOrder: req.query.merchant_order_id,
//   });
// });

// app.listen(8080, () => {
//   console.log("The server is now running on Port 8080");
// });

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  access_token: "TEST-8756355838713146-090922-7c2fab5d1e466389ba76673701a3f6c5-23016067",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./")));
app.use(cors());

app.get("/", function (req, res) {
  const filePath = path.resolve(__dirname, "carrito.html");
  res.sendFile(filePath);
});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "https://flora-two.vercel.app",
      failure: "https://flora-two.vercel.app",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

app.listen(8080, () => {
  console.log("The server is now running on Port 8080");
});