import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000); // 4 seconds
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sheetdb.io/api/v1/gpz8527i5vj7m", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.😔");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed.");
    }
  };


  return (
    <div className="min-h-screen bg-[#2D6A6A] text-white px-6 py-16">
       {isSubmitted && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F9FAF9]/40 ">
          <div className="bg-green-100 text-[#2D6A6A] px-10 py-6 rounded-xl shadow-xl text-2xl font-semibold text-center max-w-lg mx-auto">
            Thanks for your message! 😊
          </div>
        </div>
      )}
      <div className="max-w-2xl mx-auto mt-12">
        <h1 className="text-4xl font-bold text-center mb-2 text-[#A7D7C5]">Get in Touch</h1>
        <p className="text-center text-lg mb-10 text-[#DCEAD9] ">
          Have questions, suggestions, or just want to say hello? Drop us a message below!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow space-y-6 text-[#2D6A6A]"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A7D7C5]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A7D7C5]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A7D7C5]"
            ></textarea>
          </div>

      <div className="flex justify-center">
  <button
    type="submit"
    className="bg-[#2D6A6A] text-white px-6 py-2 rounded-full hover:bg-[#3f8181] transition"
  >
    Send Message
  </button>
</div>

        </form>
      </div>
    </div>
  );
};

export default Contact;
