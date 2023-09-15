function identity <T> (value: T) : T {
    return value;
}

console.log(identity<Number>(42))
console.log(identity<String>("Hello"))
console.log(identity<Number[]>([1,2,3]))