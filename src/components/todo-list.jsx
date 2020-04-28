import React from "react";
import Item from "../layout/item";

const List = () => {
  const acts = [
    {
      text: "Belajar masak"
    },
    {
      text: "Menyiapkan sarapan"
    },
    {
      text: "Brewing kopi"
    },
    {
      text: "Cari resep kopi"
    },
    {
      text: "Baca buku"
    },
    {
      text: "Belajar masak"
    },
    {
      text: "Membuat makan siang"
    },
    {
      text: "Monitoring kedai"
    }
  ];
  return (
    <section className="list-todo">
      {acts.map(act => {
        return <Item text={act.text} />;
      })}
    </section>
  );
};

export default List;
