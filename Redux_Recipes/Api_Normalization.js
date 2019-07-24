/*Normalizer implementation*/
import { normalize, schema } from "normalizr";

const response = {
  articles: [
    {
      id: 1,
      title: "Dagon",
      tags: [{ id: 1, name: "old ones" }, { id: 2, name: "short story" }]
    },
    {
      id: 2,
      title: "Azathoth",
      tags: [{ id: 1, name: "old ones" }, { id: 3, name: "novel" }]
    },
    {
      id: 3,
      title: "At the Mountains of Madness",
      tags: [{ id: 4, name: "insanity" }, { id: 3, name: "novel" }]
    }
  ]
}

const tag = new schema.Entity("tag");
const article = new schema.Entity("article",{
  tags:[tag]
});

const normalizedData = normalize(response, { articles: [article] });
console.log(normalizedData)