"use server";

import { z } from "zod";

const topicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase letters or dashes without spaces",
    }),
  description: z.string().min(10),
});

export async function createTopic(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");

  const result = topicSchema.safeParse({
    name,
    description,
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  }

  // TODO: ravalidate the homepage
}
