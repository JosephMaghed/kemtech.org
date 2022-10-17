export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Divide name into firstName, middleName & lastName
export function parseName(name) {
  let nameArr = name.split(" ");

  if (nameArr.length === 1) return { firstName: nameArr[0] };

  if (nameArr.length === 2)
    return { firstName: nameArr[0], lastName: nameArr[nameArr.length - 1] };

  if (nameArr.length >= 3)
    return {
      firstName: nameArr[0],
      middleName: nameArr[1],
      lastName: nameArr[nameArr.length - 1],
    };
}
