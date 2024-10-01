const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Алиса в стране чедес",
        "Гарри Поттер",
        "Алиса в стране чедес",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Алиса в стране чедес",
      "Алиса в стране чедес",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
    expect(
      sorting.sortByName([
        "Алиса в стране чедес",
        "Алиса в стране чедес",
      ])
    ).toEqual([
      "Алиса в стране чедес",
      "Алиса в стране чедес",
    ]);
  });
});
