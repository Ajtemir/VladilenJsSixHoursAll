// .bind
// .call

const person = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru','en','de'],
    greet() {
        console.log('greet')
    },
    info(){
        console.info('Информация об человеке по имени', this.name)
    }

}
// person.info()
// context
// .bind
// .call
const logger = {
    keys(obj){
        console.log('Object Keys: ', Object.keys(this))
    },
    // keysAndValues(){
    //
    //     Object.keys(this).forEach(key=>{
    //         console.log(`"${key}": ${this[key]}`)
    //     })
    // }

    keysAndValues(){

        Object.keys(this).forEach(function (key){
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },

    withParams(top=false,between=false,bottom=false){
        if(top){
            console.log('---------------Start----------------')
        }
        Object.keys(this).forEach((key,index,array)=>{
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length-1){
                console.log('----------------------------------')
            }
        })

        if(bottom){
            console.log('----------End------------------')
        }
    }
}

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call(person)
logger.withParams.call(person,true,true,true)
logger.withParams.apply(person,[true,true,true])