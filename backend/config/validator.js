const zod = require("zod");

const inputValidator = (obj) => {
  const schema = zod.object({
    title: zod.string(),
    description: zod.string()
  });
  const response = schema.safeParse(obj);
  return response;
};

module.exports = inputValidator