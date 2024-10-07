import dotenv from "dotenv";

dotenv.config();

type Env = {
  PORT: number;
};

function getEnv<Key extends keyof Env>(
  key: Key,
  defaultValue: Env[Key],
  parse: (value: string) => Env[Key] = String as unknown as (
    value: string
  ) => Env[Key]
): Env[Key] {
  const value = process.env[key];
  if (value === undefined) {
    return defaultValue;
  }
  return parse(value);
}

export const env = {
  port: getEnv("PORT", 1337, parseInt),
};
