const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const filterValues = {
  all: 0,
  overdue: 0,
  today: 0,
  favorites: 0,
  repeating: 0,
  archive: 0,
};

const getFilterNumbers = (tasks) => {
  tasks.forEach((task) => {
    // я хотел деструктурировать тут, но мне не все значения нужны, и я не смог нагуглить как деструктурировать объект пропуская первое значение
    let today = new Date();
    filterValues.all = tasks.length;
    if (task.dueDate) {
      if (task.dueDate < today) {
        filterValues.overdue += 1;
      } else if (task.dueDate.toDateString() === today.toDateString()) {
        // у меня почему-то не работае .toDateString(), поэтому сравню все поочереди, год пропускаем, подскажи что не так с .toDateString?
        filterValues.today += 1;
      } else {
        filterValues.repeating += 1;
      }
    }

    if (task.isArchive) {
      filterValues.archive += 1;
    }

    if (task.isFavorite) {
      filterValues.favorites += 1;
    }
  });
};

const generateFilters = (tasks) => {
  getFilterNumbers(tasks, filterValues);
  return filterNames.map((name) => {
    return {
      name,
      count: filterValues[name]
    };
  });
};

export {generateFilters};
