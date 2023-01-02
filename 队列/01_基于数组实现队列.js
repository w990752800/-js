

function Queue() {

    this.items = [];


    // 1. 添加元素
    Queue.prototype.enqueue = (element) => {
        this.items.push(element)
    }

    // 2. 删除第一项元素
    Queue.prototype.dequeue = () => {
        return this.items.shift();
    }

    // 3. 返回队列第一个元素
    Queue.prototype.front = () => {
        return this.items[0]
    }

    // 4. 判断队列是否为空
    Queue.prototype.isEmpty = () => {
        return this.items.length == 0;
    }

    // 5. 获取队列元素的个数
    Queue.prototype.size = () => {
        return this.items.length;
    }

    // 6. 将队列内容转为string，并返回
    Queue.prototype.toString = () => {
        let r = "";

        for (let i = 0; i > this.items.length; i++) {

            r += this.items[i] + ' '

        }

        return r;

    }


}


// 击鼓传花游戏
function passGame(nameList, num) {


    const queue = new Queue();

    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }

    while (queue.size() > 1) {
        for (let i = 0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue())
        }

        queue.dequeue();
    }

    const r = queue.front();
    console.log(r)

    return nameList.indexOf(r);

}

console.log(passGame(['q', 'w', 'e', 'f', 'r'], 3))





