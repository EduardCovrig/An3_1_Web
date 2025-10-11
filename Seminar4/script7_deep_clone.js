//(Opțional) -  Implementați o funcție care face deep clone unui obiect.
//Funcția creează o copie a întregii structuri a obiectului, la o adâncime arbitrară.
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
//sau structuredClone(obj);

const original = {
  name: "David",
  age: 30,
  address: {
    city: "Bucharest",
    zip: "058498"
  }
};

const newObj=deepClone(original);
if(newObj===original && newObj.address===original.address)
    {
        console.log("Au aceeasi memorie. Deep clone-ul nu a mers");
    }
else {
console.log(original);
console.log(newObj);
}