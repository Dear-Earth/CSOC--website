import React from "react";

const contact = () => {
  return (
    <div className="bg-primary">
    <section id="contacts">
      <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-primary">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
          Contact Us
        </h2>
        <p class="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
          Have a question or need assistance? Our team's always ready to help.
          Feel free to reach out, and we'll be delighted to aid you by providing
          heartfelt support.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 outline-none"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm outline-none"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 outline-none"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="py-3 px-5 text-sm font-medium text-center text-black bg-white rounded-lg bg-primary-700 hover:text-white hover:bg-black sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default contact;
