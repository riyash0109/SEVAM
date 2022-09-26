<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$date = $_POST['date'];
	$time = $_POST['time'];
	$tests = $_POST['tests'];
	

	// Database connection
	$conn = new mysqli('localhost','root','','sevam');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(name, email, date, time, tests) values(?, ?, ?, ?, ?)");
		$stmt->bind_param("ssiis", $name, $email, $date, $time, $tests);
		$execval = $stmt->execute();
		echo $execval;
		echo "Apppoitment Booked Successfully...";
		$stmt->close();
		$conn->close();
	}
?>