//Create a college JSON object
var collegeJSONobj = { 
    "name" : "St. Xavier's",
    "city" : "Delhi",
    "pincode" : "110032"
};

//Create a student array with various user details
var studentJSONobj = [
    {
        "name" : "Sonal",
        "age"  : 25,
        "weight" : "66 kg",
        "height" : "172 cm",
        "friends" : ["Mahesh", "Apoorv", "Atul", "Anuj"],
        "college" : collegeJSONobj
    },
    {
        "name" : "Monal",
        "age"  : 23,
        "weight" : "63 kg",
        "height" : "171 cm",
        "friends" : ["Mahesh", "Abhishek", "Pradyumn"],
        "college" : collegeJSONobj
    },
    {
        "name" : "Rohit",
        "age"  : 21,
        "weight" : "60 kg",
        "height" : "170 cm",
        "friends" : ["Gaurav", "Archit"],
        "college" : collegeJSONobj
    }
];

//Print the college JSON object
document.write("College JSON Object");
document.write("<br>--------------------------");
document.write(`<br>${JSON.stringify(collegeJSONobj)}`);

//Print the array of student JSON objects 
document.write("<br><br>Student JSON Objects' Array");
document.write("<br>-----------------------------------");
for(i in studentJSONobj){
    document.write(`<br>${JSON.stringify(studentJSONobj[i],null,"\t")}`);
}
