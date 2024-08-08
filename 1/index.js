let value = [];

switch (typeof value){
    case "number":
        console.log("number");
        break;
    case "string":
        console.log("string");
    case "boolean":
        console.log("boolean");
    default:
        console.log("other");
}