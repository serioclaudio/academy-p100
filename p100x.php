<?php
  header("Access-Control-Allow-Origin: *" );

  $arrEmp[] = [ 'firstname' => 'Bob', 'lastname' => 'Smith', 'department' => 'IT' ];
  $arrEmp[] = [ 'firstname' => 'Mary', 'lastname' => 'Jones', 'department' => 'HR' ];
  
  echo json_encode($arrEmp);
?>