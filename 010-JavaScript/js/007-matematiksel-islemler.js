let userId = 37;

// mod alma:
console.log(userId / 2)
console.log("tek mi cift mi ?", userId % 2)

userId ++;
console.log("tek mi cift mi ?", userId % 2)

const boxSize = 8;
let items = 29;

console.log("son box icinde kac urun var:", items % boxSize)
console.log("son box a kac oge daha eklenmeli? ", boxSize - (items % boxSize))

// us alma:
console.log(3 * 3 * 3 * 3)
console.log(3 ** 4)

// asagi yuvarlama:
console.log("Asagi yuvarlama", Math.floor(3.9))

// yukari yuvarlama:
console.log("Yukari yuvarlama", Math.ceil(3.9))


// yakina yuvarlama:
console.log("Yakina yuvarlama 3.9",  Math.round(3.9))
console.log("Yakina yuvarlama 3.6",  Math.round(3.6))
console.log("Yakina yuvarlama 3.5",  Math.round(3.5))
console.log("Yakina yuvarlama 3.49", Math.round(3.49))
console.log("Yakina yuvarlama 3.4",  Math.round(3.4))