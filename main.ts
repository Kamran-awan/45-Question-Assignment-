// 2. Name cassess 
let personName: string= "ERIC";
console.log(`hello ${personName} would you like to learn some python today?`);

// // 3. Name cassess

let PersonName: string ="Babar";
console.log("lowercase:", PersonName.toLowerCase());
console.log("uppercase:", PersonName.toLocaleUpperCase());
console.log("titlecase:", PersonName.replace(/\bw/g,c => c.toUpperCase()));

// Task No 4 Quote
let quote: string= "The Biggest Risk Is Not Taking Any Rish";
let author: string= "Mark Zuckerberg";
console.log(`${author} once said,"${quote}"`);

// Task No 5.Quote by Famou_person
let Quote: string= "The Biggest Risk Is Not Taking Any Risk";
let famous_person: string= " Mark Zuckerberg";
let message=(`${famous_person} Once Said, "${Quote}"`);
console.log(message);

// Task No 6.Stripping Name
let Personname: string =`\n\t BABAR AZAM \t\n`;
console.log(Personname);
let stripped: string =Personname.trim();
console.log(stripped);


// Task No 7 & 8 Number Eight 
console.log(5+3);
console.log(4*2);
console.log(16/2);
console.log(11-3);

// 9.Fav Number
let favoriteNumber: number =4;
console.log(`My Favorite Number is ${favoriteNumber}`);

// Exercise 10 Adding Comment 
console.log("hello World Simple Program");

// Exercise 11 Names

let members: string[] =['kamran', 'khurram', 'ubaid', 'asim', 'adnan',];
for (let i=0; i<members.length; i++){
    console.log(members [i]);
}

// Exercise 12 Greeting 
let members_one: String[] =['kamran', 'Khurram', 'Adnan', 'Ubaid','Asim',];
let message_one: string ='Did you take yesterday class:';
for(let i=0; i<members_one.length; i++){
    console.log(message_one+members_one [i]);
}


// Exercise 13 My Own Array
let transportation: String[] =['Honda', 'Civic', 'Ford', 'BMW','Audi', 'KIA:' ,];
for (let i=0; i<transportation.length; i++){
console.log('I would like to buy:' + transportation [i] );
}

// Exercise 14 Guest List
let guest_listt: String[] = ['Ali', 'Aamir', 'Babar', 'Daniyal', 'Rafey',];
for (let i=0; i<guest_listt.length; i++){
console.log('Respected Sir/Madam '+ guest_listt[i] +',\n\nWe invited you on dinner tomorrow.\n\n Thank you\n\n');
}
export{guest_listt}


// Exercise 15 Changing Guest List
let guest_listtt: String[] = ['Ali', 'Aamir', 'Daniyal', 'Faisal', 'Rafey',];
for (let i=0; i<guest_listtt.length; i++){
    console.log('Respected Sir/Madam:' + guest_listtt[i] +',\n\nwe invited you on dinner tomorrow.\nThank you\n');
}
let not_presentt: String = 'Daniyal';
let new_guestt: String = 'Babar Azam';
guest_listtt[2] = new_guestt;
for (let i=0; i<guest_listtt.length; i++){
    console.log('Respected Sir/Madam:' + guest_listtt[i] +',\n\nwe invited you on dinner tomorrow.\nThank you\n');
}
console.log(`Mr. ${not_presentt} will not coming tomorrow dinner.`);


// Exercise 16.More Guest
let guest_list: String[] = ['Ali', 'Aamir', 'Daniyal', 'Faisal', 'Rafey',];
let not_present: String = 'Daniyal';
let new_guest: String = 'Babar Azam';
guest_list[2] = new_guest;
// for (let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam:' + guest_list[i] +',\n\nwe invited you on dinner tomorrow.\nThank you\n');
// }
guest_list.unshift('Adnan', 'Khurram', 'Ubaid',);
// for (let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam:' + guest_list[i] +',\n\nwe invited you on dinner tomorrow. we found big table so we decided to invite 3 more peoples\nThank you\n');
// }
console.log('\nunfortunetley we can not arrange bit table, only two people allow');
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam. ${remove_guest} you are not invited for dinner`);
}
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam:' + guest_list[i] +',\n\nYes you are still invited for tomorrow dinner\nThank you\n');
}
guest_list.splice(0,2)
console.log(guest_list);

// Exercise 18.seeing the world
let places : string []= ['Canada', 'England', 'France', 'America','Belgium'];
// console.log('original ' + places);
// console.log('copy ' + [...places].sort());
// console.log('original ' + places);
console.log('copy ' + [...places].sort().reverse());
console.log('copy ' + [...places].sort().reverse());
console.log('original ' + places.sort());
console.log('original ' + places.sort().reverse());

// Exercise 20.Think Languages
let languages: string [] = ['English', 'French', 'Spanish', 'chines',]
console.log ("list of languages:")
for (let top of languages){
    console.log(top)
}

// Exercise 21.Typescript Object
interface item {
    Name:String
    price:Number
   }
   const Book: item ={
       Name:'Learning Typescript',
       price: 850
   }
   const apple: item={
       Name: 'apple',
       price:999
   }
   console.log(`book name: ${Book.Name}, Price: $${Book.price}`)
   console.log(`apple name: ${apple.Name}, Price: $${apple.price}`)

//    Exercise 22.Intentional Error
let array: (string | number) [] = ['Kamran', 'Khurram',2,4,6,];
console.log(array[5]);


//    Exercise 23.Conditional Test
let carr: string ='BMW'
// test 1 Equality comprison
console.log("is car =='BMW'? i predict True.");
console.log(carr == 'BMW'); //True
// test 2 strict equality comparison (true)
console.log("is car ==='BMW'? i predict True");
console.log(carr === 'BMW'); //True
// test 3 inequality comparison (False)
console.log("is car !='BMW'? i predict False");
console.log(carr != 'BMW'); //False
// test 4 strict inequality comparison (False)
console.log("is car !=='BMW'? i predict False");
console.log(carr !== 'BMW'); //False
// test 5 Less than comparison (False)
console.log("is car < 'BMW'? i predict False");
console.log(carr < 'BMW'); //False comparison
// test 6 Greater than comparison (False)
console.log("is car > 'BMW'? i predict False");
console.log(carr > 'BMW'); //False comparison
// test 7 less than or equal comparison (True)
console.log("is car <= 'BMW'? i predict True");
console.log(carr <= 'BMW');//True
// test 8 Greater than or equal comparison (True)
console.log("is car >= 'BMW'? i predict True");
console.log(carr >= 'BMW');//True


//    Exercise 24 More Conditional Test
let car: string ='BMW'
let age: number = 25;
let number: number [] = [1,2,3,4];
// String test 

// Test 1 Equality (True)
console.log("is car == 'BMW'? i predict True.");
console.log(car == 'BMW'); // True (case insentitive)

// Test 2 strict equality (False)
console.log("is car === 'BMW'? i predict False.");
console.log(car === 'BMW'); //False (case insentitive)

// Test 3 Inequality (True)
console.log("is car != 'BMW'? i predict True.");
console.log(car != 'BMW'); // True

// Test 4 Inequality (False)
console.log("is car !== 'BMW'? i predict False.");
console.log(car !== 'BMW'); // False ( case sensitive)

// Lowercase Function
// Test 5 lowercase conversation ( True)
console.log("is car === car.toLowerCase() == 'BMW'? i predict True.");
console.log(car.toLowerCase() == 'BMW'); // True ( converted to lowercase)

// Test 6 lowercase conversation ( False)
console.log("is car === car.toLowerCase()? i predict False.");
console.log(car ===car.toLowerCase()); // False ( original value remain uppercase

//Numerical Test
//Test 7 Equality ( True)
console.log ("is age == 25? i predict True.");
console.log(age == 25); //True

//Test 8 inequality ( False)
console.log ("is age != 30? i predict True.");
console.log(age != 30); //True

//Test 9 Greater Than ( False)
console.log ("is age > 30? i predict False.");
console.log(age > 30); //False

//Test 10 Equality ( True)
console.log ("is age <= 25? i predict True.");
console.log(age <= 25); //True

//Test 11 And ( True)
console.log("is age > 20 && age < 30? i predict True.");
console.log(age > 20 && age <30); //True (both condition met)

//Test 12 OR ( False)
console.log("is age > 30 || && < 18? i predict False.");
console.log(age > 30 || age < 18); //false (neither condition met)

//Test 13 in Array ( True)
console.log("is 3 in number? i predict True.");
console.log(3 in number); //True (checks for index existance)

//Test 14 in Array ( False)
console.log("is 5 not in number? i predict True.");
console.log(5 in number); //True (negative for in operator)


// Exercise 25.Alien Colors
let alien_color: String ='Green';
if(alien_color =="green"){
    console.log("The player just earned 5 points.");
}
alien_color = "red";
if(alien_color =="green"){
    console.log("The player just earned 5 points.");
}


// Exercise 26.Alien Colors 2
let alien_colorr: string ='Green';
if (alien_colorr == 'Green'){
    console.log('The Player just earned 5 points for shooting the alien');
}
else{
    console.log('The Player Just Earned 10 points');
}
alien_colorr ='Red';
if (alien_colorr == 'Green'){
    console.log('The Player just earned 5 points for shooting the alien');
}

// Exercise 27.Alien Colors 3
let alien_colorrr: String ="green"
if (alien_colorrr == "green"){
    console.log("The Player just Earned 5 Points")
}
else if (alien_colorrr == "yellow"){
    console.log("The Player just Earned 10 Points")
}
else if (alien_colorrr == "red"){
    console.log("The Player just Earned 15 Points")
}
else{
    console.log("Please Select The Right Color")
}
alien_colorrr = "Red"
if (alien_colorrr == "green"){
    console.log("The Player just Earned 5 Points")
}
else if (alien_colorrr == "yellow"){
    console.log("The Player just Earned 10 Points")
}
else if (alien_colorrr == "red"){
    console.log("The Player just Earned 15 Points")
}
else{
    console.log("Please Select The Right Color")
}

// Exercise 28.Stages of Life


let agee: number = 25;
if(age<2){
console.log("The Person is Baby")
}
else if (agee>=2 && agee<4 ){
    console.log("Person Name is Toddler")
}
else if (agee>=4 && agee<13 ){
    console.log("Person is a kid")
}
else if (agee>=13 && agee<20 ){
    console.log("Person Name is Teenager")
}
else if (agee>=20 && agee<65 ){
    console.log("Person Name is adult")
}
else{
    console.log("person is an Elder")
}



// Exercise 29.Fav Fruit
let favorite_Fruits: string [] = ['Papaya', 'Peach','Rambutan',];
if(favorite_Fruits.includes('Papaya')){
    console.log('i Really Like Papaya')
}
if(favorite_Fruits.includes('Peach')){
    console.log('i Really Like Peach')
}
if(favorite_Fruits.includes('Rambutan')){
    console.log('i Really Like Rambutan')
}
if(favorite_Fruits.includes('Blueberry')){
    console.log('i Really Like Blueberry')
}
if(favorite_Fruits.includes('Cherry')){
    console.log('i Really Like Cherry')
}


// Exercise 30.Hello Admin
let users: string [] = ['Kamran','Khurram','Ubaid','Adnan','Sana',]
for (let user of users){
    if (user === 'admin'){
        console.log("Hello Admin, Would you like to see status report ?")
    }

else{
    console.log(`Hello ${user}, Thank you for logging in again.`)
}
}


// Exercise 31.No Users
let user: string [] = ['Kamran','Khurram','Ubaid','Adnan','Sana']
if (user.length === 0){
    console.log('we need to find some users!')
}
else{
    user = [];
    console.log('All users have been removed' + user.length)
}


// Exercise 32.Checking Username
let current_users: string [] = ['kamran', 'admin', 'khurram','ubaid','adnan',];
let new_users: string [] = ['danis', 'rafey', 'daniyal','admin','aamir'];
new_users.forEach((newUser) => {
    if (
        current_users.some(
            (current_users) => current_users.toLowerCase() === newUser.toLowerCase ()       
             )
    ) {
        console.log(`${newUser} will need to entre a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});


// Exercise 33.Ordinal Number
let myNUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
for(let i = 0; i < myNUMBERS.length; i++){
    if(myNUMBERS[i]==1){
        console.log(`${myNUMBERS[i]}st`);
    }else if(myNUMBERS[i] == 2){
        console.log(`${myNUMBERS[i]}nd`);
    }else if(myNUMBERS[i] == 3){
        console.log(`${myNUMBERS[i]}rd`);
    }else if(myNUMBERS[i] >=4 && myNUMBERS[i] <= 9 ){
        console.log(`${myNUMBERS[i]}th`);
    }

}


// Exercise 34.Pizza
let my_pizza: string [] = ['supreme pizza', 'Margherita pizza','Lava pizza',]
for(let i=0; i < my_pizza.length; i++){
    console.log(my_pizza[i]);
}
for(let i=0; i < my_pizza.length; i++){
    console.log(`i would like to eat ${my_pizza[i]}`);
}
console.log(
    `\n i really like to eat pizza's. pizza come in a variety of flavour`
);


// Exercise 36.T-shirt
function make_shirt(size:string,message: string){
    console.log(`making a ${size} t shirt with the message "${message}" printed on it`);
}
make_shirt('medium','code is life');


// Exercise  37.Large t shirt
function make_shirtt(size:string='Large,', message: string='i Love Typescript'){
    console.log(`make a ${size} t shirt with the message ${message}' printed on it.`);
}
make_shirtt();
make_shirtt('medium');
make_shirtt('small, dive into coding');


// Exercise 38.cities
function describe_city(nameOfCity: string, country: string='Pakistan'){
    return `${nameOfCity} is in ${country}`;
};
let city1 = describe_city('karachi')
let city2 = describe_city('Islamabad')
let city3 = describe_city('Lahore')
let city4 = describe_city('Multan')
console.log(city1)
console.log(city2)
console.log(city3)
console.log(city4)


// Exercise 39.city Names
function city_country(city: string, country: string){
    console.log(`'${city}, ${country}'`)
}
city_country('Karachi','Pakistan');
let mycities =city_country('Karachi','Pakistan');
console.log(mycities);
console.log(city_country('Dubai','UAE'));
console.log(city_country('Cape Town','SA'));
console.log(city_country('New York','USA'));

// Exercise 40.Album 
function Make_album(artistName: string, albumTitle: string){
    return{artistName,albumTitle} 
}
let album1 =Make_album('Adnan sami', 'Tera Chehra');
let album2 =Make_album('Atif Aslam', 'Doorie');
let album3 =Make_album('Ahmed Jahanzeb', 'Kaho ek Din');
console.log(album1);
console.log(album2);
console.log(album3);
function Make_album2(artistName: string, albumTitle: string, numberOfTracks: number){
    return{artistName,albumTitle,numberOfTracks}
}
let album4 =Make_album2('Adnan sami', 'Tera Chehra',29);
let album5 =Make_album2('Adnan sami', 'Tera Chehra',39);
let album6 =Make_album2('Adnan sami', 'Tera Chehra',49);
console.log(album4);
console.log(album5);
console.log(album6);




























