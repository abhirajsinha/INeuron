import React from "react";

const SingUpForm = () => {
  return (
    <form>
      <input
        type="email"
        placeholder="abc@gmail.com"
        onChange={handleChange}
        name="email"
        value={formData.firstName}
      />
       <input
        type="password"
        placeholder="password"
        onChange={handleChange}
        name="password"
        value={formData.firstName}
      />
       <input
        type="password"
        placeholder="password"
        onChange={handleChange}
        name="confirm password"
        value={formData.firstName}
      />
    </form>
  );
};

export default SingUpForm;
