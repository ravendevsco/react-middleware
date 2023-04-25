const createEnum = (values: string[]) => {
  const enumObject: Record<string, string> = {};
  for (const val of values) {
    enumObject[val] = val;
  }
  return Object.freeze(enumObject);
};

export const EnumUtils = {
  createEnum,
};
