
export type FormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message: string;
};

// export type ProductType = InferSelectModel<typeof products>;