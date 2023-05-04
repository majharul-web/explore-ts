const getStringArr = <T>(param: T): T[] => {
  return [param];
};

const result1 = getStringArr("rahim");

// general function
function getStringArr2<T>(param: T): T[] {
  return [param];
}

const result = getStringArr("rahim");
// spread

interface reqPar {
  name: string;
}

const spreadIn = <T extends reqPar>(par: T) => {
  const test = "test";
  return { ...par, test };
};

type myInfoType = {
  name: string;
  age: number;
};

const myInfo = {
  name: "rahim",
  age: 10,
};

spreadIn<myInfoType>(myInfo);
