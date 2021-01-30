class Knot {
    constructor(data, nextValue = null) {
        this.data = data
        this.nextValue = nextValue
    }
}

class LInkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    // Insert first Knot
    insertFirst(data){
        this.head = new Knot(data, this.head)
        this.size++
    }

    // Insert last Knot
     insertLast(data){
        let knot = new Knot(data)
        let current


        // if the head is empty, just make that
        if(!this.head){
            this.head = knot
        } else {
            current = this.head

            while(current.nextValue){
                current = current.nextValue
            }
            current.nextValue = knot
        }
        this.size++
     }

    // Insert at index
     insertAt(data, index){

        //if the inex is out of size
         if(index > 0 && index > this.size){
             return
         }

         //if it's first index
         if(index === 0) {
            this.insertFirst(data)
            return 
         }

         const knot = new Knot(data)
         let current, previous

         current = this.head
         let count = 0

         while(count < index){
             previous = current
             count ++
             current = current.nextValue 
         }
         knot.nextValue = current
         previous.nextValue = knot

         this.size++
     }
    // Get at index 

    // Remove at index

    // Clear list

    // Print list
    printListData(){
        let current = this.head

        while(current){
            console.log(current.data)
            current = current.nextValue
        }
    }
}

const linkedlist = new LInkedList()

linkedlist.insertFirst(100)
linkedlist.insertFirst(200)
linkedlist.insertFirst(300)
linkedlist.insertLast(800)
linkedlist.insertAt(500,6)

linkedlist.printListData()