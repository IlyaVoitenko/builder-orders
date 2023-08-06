import React from "react";

const Info = () => {
  const styleLg = `max-lg:text-xs   max-lg:w-full lg:h-[23rem] max-lg:pr-[1.25rem] max-lg:pl-[1.25rem]`;
  return (
    <section
      className={`flex  flex-col  w-1/5 text-left text-white  ${styleLg}`}
    >
      <section>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut
      </section>
      <br></br>
      <section>
        <p>phone:+33333333</p>
        <p>email:temlate@werwe.com</p>
      </section>
      <br></br>
      <section>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </section>
    </section>
  );
};

export default Info;
