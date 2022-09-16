const obj = {
    firstName : 'bob',
    lastName : 'sagot',
    get name(){
        return `${this.firstName} ${this.lastName}`
    },
    set name(newName){
        const [ firstName, lastName ] = newName.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }
}

obj.name = 'Danang Firmantara'

console.log(obj.name)