const constraints = {
  name: {
    presence: true,
    length: { minimum: 10, message: "must be atleast 10 letters" }
  }
};

export default constraints;
