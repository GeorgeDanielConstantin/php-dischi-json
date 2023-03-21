<?php

$disks = file_get_contents(__DIR__ . "/../data/data_dischi.json");
header('Content-Type: application/json; charset=utf-8');

echo $disks;