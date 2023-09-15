import Contact from "@/components/FAQ/Contact";
import FQues from "@/components/FAQ/FQues";
import { Stack } from "@mantine/core";
import React from "react";

const faq = () => {
  return (
    <Stack>
      <Contact />
      <FQues />
    </Stack>
  );
};

export default faq;
