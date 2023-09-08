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
