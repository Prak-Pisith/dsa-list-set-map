const uniqueCars = new Set<string>();
uniqueCars.add("Honda");
uniqueCars.add("Toyota");
uniqueCars.add("BMW");
uniqueCars.add("BMW"); // Won't add a duplicate

console.log("Unique toys in the set:", uniqueCars);
