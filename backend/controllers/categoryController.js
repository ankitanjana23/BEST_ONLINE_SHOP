const Category = require("../models/CategoryModel");
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: "asc" }).orFail();

    res.json(categories);
  } catch (error) {
    next(error);
  }
};
const newCategory = async (req, res, next) => {
  try {
    const { category } = req.body;
    if (!category) {
      res.status(400).send("Category input is required ");
    }
    const categoryExist = await Category.findOne({ name: category });
    if (categoryExist) {
      res.status(400).send("category already Exists ");
    } else {
      const categoryCreated = await Category.create({
        name: category,
      });
      res.status(201).send({ categoryCreated: categoryCreated });
    }
    res.send(category);
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  //return res.send(req.params.category)
  try {
    if (req.params.category != "Choose category") {
      const categoryExist = await Category.findOne({
        name: decodeURIComponent(req.params.category),
      }).orFail();
      await categoryExist.remove();
      res.json({ categoryDeleted: true });
    }
  } catch (error) {
    next(error);
  }
};

const saveAttr = async (req, res, next) => {
  const { key, val, categoryChoosen } = req.body;

  if (!key || !val || !categoryChoosen) {
    return res.status(400).send("All inputs are required");
  }
  try {
    const category = categoryChoosen.split("/")[0];
    const categoryExist = await Category.findOne({ name: category }).orFail();
    if (categoryExist.attrs.length > 0) {
      //if key exist in database  then add a value to the key
      var keyDoseNotExistsInDatabase = true;
      categoryExist.attrs.map((item,idx) => {
        if (item.key == key) {
          keyDoseNotExistsInDatabase = false;
          var copyAttributeValues = [...categoryExist.attrs[idx].value];
          copyAttributeValues.push(val);
          var newAttributesValues = [...new Set(copyAttributeValues)]; //set ensures unique values
          categoryExist.attrs[idx].value = newAttributesValues;
        }
      });

      if (keyDoseNotExistsInDatabase) {
        categoryExist.attrs.push({ key: key, value: [val] });
      }
    } else {
      //push to array
      categoryExist.attrs.push({ key: key, value: [val] });
    }
    await categoryExist.save();
    let cat = await Category.find({}).sort({ name: "asc" });
    return res.status(201).json({ categoriesUpdated: cat });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories, newCategory, deleteCategory, saveAttr };
