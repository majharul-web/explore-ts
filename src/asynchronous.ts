// mocking
const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data fetched";
    if (data) {
      resolve(data);
    } else {
      reject("Error");
    }
  });
};

const getPromiseData = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

// fetch data
interface ITodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData = async (): Promise<ITodoType> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
};

const fetchTodo = async (): Promise<void> => {
  console.log("data", fetchData());
};

fetchTodo();
