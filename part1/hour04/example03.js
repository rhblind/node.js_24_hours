function haveBreakfast(food, drink, callback) {
    console.log("Having breakfast of " + food + " and " + drink);
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

haveBreakfast("toast", "coffee", function() {
    console.log("Finished breakfast, time to go to work!");
});
