import toast from "react-hot-toast";
export default function validateAndStore(key, item, name) {
  const ItemList = localStorage.getItem(key);

  if (ItemList !== null) {
    let validated = true;

    const storedItems = JSON.parse(ItemList);

    storedItems.forEach((habit) => {
      if (habit.name === name) {
        validated = false;
      }
    });

    if (validated) {
      storedItems.push(item);
      localStorage.setItem(`${key}`, JSON.stringify(storedItems));
      toast.success(
        `You have Successfully added the ${key.slice(0, -1)} ${name}`,
        {
          duration: 3000,
        }
      );
    } else {
      toast(`You already created this ${key.slice(0, -1)}`, {
        duration: 3000,
        icon: "❌",
      });
    }
  } else {
    const storedItems = [];
    storedItems.push(item);
    localStorage.setItem(`${key}`, JSON.stringify(storedItems));
    toast.success(
      `You have Successfully added the ${key.slice(0, -1)} ${name}`,
      {
        duration: 4000,
      }
    );
  }
}
