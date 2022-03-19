$(document).ready(function() {
	$("#addTask").click(function() {
		if ($(".textBox").val() != "") {
			alert("New Task: " +$(".textBox").val());
			$(".textBox").val("");
		} else {
			alert("Error: Please enter a task");
		}
	});
});