import {getRandomArrayItem} from "../utils";

const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const filterValues = [
  `11`, `69`, `13`, `7`, `42`, `15`, `34`
];

const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: getRandomArrayItem(filterValues)
    };
  });
};

export {generateFilters};
