"use server";

import type { Post } from "@prisma/client";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";

interface CreatePostFormState {
  errors: {
    title?: string[];
    description?: string[];
    _form?: string[];
  };
}

const postSchecma = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

export async function createPost(
  _formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> {
  const result = postSchecma.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  return {
    errors: {},
  };

  // TODO: ravalidate the topic show page
}
