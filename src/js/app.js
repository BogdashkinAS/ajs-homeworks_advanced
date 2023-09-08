export default function orderByProps(obj, currentSort) {
    const propsArr = [];
    const sortArr = [];

    for (const key in obj) {
        if (currentSort.includes(key)) {
            const index = currentSort.indexOf(key);
            propsArr.splice(index, 0, { key, value: obj[key] });
        } else {
            sortArr.push({ key, value: obj[key] });
        }
    }
    sortArr.sort((a, b) => (a.key > b.key ? 1 : -1));
    return [...propsArr, ...sortArr];
}

   // function destructuring(obj) {
   //     const result = [];
   //     const { special } = obj;

   //     if (!special) {
   //         return result;
   //     }

   //     for (let i = 0; i < special.length; i++) {
   //         if (!special[i].description) {
   //             special[i].description = 'Описание недоступно';
   //         }
   //         result.push({
   //             id: special[i].id,
   //             name: special[i].name,
   //             icon: special[i].icon,
   //             description: special[i].description,
   //         });
   //     }

   //     return result;
   // }

   // class Character {
   //     constructor(name, type, attack, defence) {
   //         this.name = name;
   //         this.type = type;
   //         this.health = 100;
   //         this.level = 1;
   //         this.attack = attack;
   //         this.defence = defence;
   //     }
   // }

   // const arr = {
   //     name: 'Alex',
   //     age: 35
   // };

   // const { user } = arr
   // arr.user = 100

   // console.log(user)
   // console.log(arr)
   // console.log('user' in arr)
   // console.log(arr.__proto__)

   // const test = new Character

   // console.log(Character)
   // console.log(Character.__proto__)
   // console.log(Character.__proto__.__proto__)

   // console.log(test)
   // console.log(test.__proto__)
   // console.log(test.__proto__.__proto__)
