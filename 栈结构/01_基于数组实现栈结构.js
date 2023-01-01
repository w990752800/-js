


function Stack() {

    this.item = [];

    // 1. 入栈
    Stack.prototype.push = (item) => {
        return this.item.push(item)
    }

    // 2. 出栈
    Stack.prototype.pop = () => {
        return this.item.pop();
    }

    // 3. 返回栈顶的元素，不对栈做任何修改
    Stack.prototype.peek = () => {
        return this.item[this.item.length - 1]
    }

    // 4. 判断栈是否为空
    Stack.prototype.isEmpty = () => {
        return this.item.length == 0;
    }

    // 5. 返回栈中元素的数量
    Stack.prototype.size = () => {
        return this.item.length;
    }


    // 6. 将栈结构的内容以字符的形式返回
    Stack.prototype.toString = () => {
        let str = ""
        for (let i = 0; i < this.item.length; i++) {
            str += this.item[i] + " "
        }
        return str;
    }


}

// let s = new Stack();

// s.push(100)
// s.push(2)
// s.push(4)
// s.push(5)
// console.log(s)
// console.log(s.toString())

// 十进制转二进制
function dec2bin(decNumber) {

    const s = new Stack();

    while (decNumber > 0) {
        s.push(decNumber % 2);
        decNumber = Math.floor(decNumber / 2);
    }

    let r = '';
    while (s.size() > 0) {
        r += s.pop();
    }

    return r;

}

console.log(dec2bin(100))






