your_pragraph_array=[];
//submit-function/
function submit() {
    var display_student_array = [];

    for (var j = 1; j <= 4; j++) {
        var your_pragraph = document.getElementById("your_pragraph_" + j).value;
        console.log(name_of_the_student);
       your_pragrap_array.push(your_pragraph);
    }

    console.log(your_pragraph_array);

    var lenght_of_your_pragraph_array =your_pragraph_array.length;
    console.log(lenght_of_your_pragraph_array);

    for (var k = 0; k < lenght_of_your_pragraph_array; k++) {
        your_pragraph_array.push("<h4>NAME - " + your_pragraph_array[k] + "</h4>");
        console.log(your_pragraph_array);
    }
    document.getElementById("display_name_with_commas").innerHTML = your_pragraph_array;

    var remove_commas = your_pragraph_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

//sorting//

function sorting()
{
    display_pragraph_array.sort();
    console.log(your_pragraph_array);

    var diaplay_pragraph_array_sorting = [];

    var lenght_of_your_pragraph_array = name_of_your_pragraph_array.length;
    console.log(lenght_of_your_pragraph_array);

    for (var k = 0; k < lenght_of_your_pragraph_array; k++) 
    {
        display_pragraph_array_sorting.push("<h4>NAME - " + name_of_the_pragraph_array[k] + "</h4>");
        console.log(display_pragraph_array_sorting);
    }

    var remove_commas = display_pragraph_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    

}
//Additional activity
function new_update(){
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" +your_pragraph_array +"</h1>";
}



