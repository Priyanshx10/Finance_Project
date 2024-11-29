"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      {" "}
      <CountUp decimal="," prefix="$" end={amount} decimals={2} />
    </div>
  );
};

export default AnimatedCounter;
