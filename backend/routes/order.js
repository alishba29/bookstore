const router = require("express").Router();
const User = require("../models/user");
const { authenticationToken } = require("./userAuth");
const Order = require("../models/order");
const Book = require("../models/book");

router.post("/place-order", authenticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const { order } = req.body;

    for (const orderData of order) {
      const newOrder = new Order({
        user: id,
        book: orderData._id,
      });
      const orderDataFromDb = await newOrder.save();

      //saving order in user model
      await User.findByIdAndUpdate(id, {
        $push: { orders: orderDataFromDb._id },
      });

      //clearing cart
      await User.findByIdAndUpdate(id, {
        $pull: { cart: orderData._id },
      });
    }

    return res.json({
      status: "success",
      message: "Order placed successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occcured" });
  }
});

router.get("/get-order-history", authenticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "orders",
      populate: { path: "book" },
    });

    const ordersData = userData.orders.reverse();
    return res.json({
      status: "success",
      data: ordersData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occcured" });
  }
});

router.get("/get-all-orders", authenticationToken, async (req, res) => {
  try {
    const orders = await Order.find()

      .populate({ path: "book" })
      .populate({ path: "user" })
      .sort({ createdAt: -1 });

    return res.json({
      status: "success",
      data: orders,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

router.put("/update-status/:id", authenticationToken, async (req, res) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndUpdate(id, { status: req.body.status });
    return res.json({
      status: "success",
      message: "Order status updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occcured" });
  }
});
module.exports = router;
