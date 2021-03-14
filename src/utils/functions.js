export function getTechString(techArray) {
  let techList = "";

  for (let i = 0; i < techArray.length; i++) {
    const delimiter = i !== techArray.length - 1 ? ", " : "";
    techList = techList + techArray[i] + delimiter;
  }

  return techList;
}
