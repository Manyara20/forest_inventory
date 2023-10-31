CREATE TABLE IF NOT EXISTS `tbl_management_data` (
  `management_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `plantation_id` int(11) NOT NULL,
  `allocation_id` int(11) NOT NULL,
  `conservancy` varchar(30) NOT NULL,
  `county` varchar(20) DEFAULT NULL,
  `zone` varchar(20) NOT NULL,
  `station` varchar(30) NOT NULL,
  `sub_compartment` varchar(30) NOT NULL,
  `species` varchar(30) DEFAULT NULL,
  `planting_year` int(11) DEFAULT NULL,
  `density` int(11) DEFAULT NULL,
  `mdbh` double DEFAULT NULL,
  `mht` double DEFAULT NULL,
  `area` double DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `remarks` text,
  `volume` double DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `update_date` date DEFAULT NULL,
  `Date_Received` date DEFAULT NULL,
  `est_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`management_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11561 ;
CREATE TABLE IF NOT EXISTS `history_table` (
  `history_id` int(11) NOT NULL AUTO_INCREMENT,
  `management_id` int(11) DEFAULT NULL,
  `plantation_id` int(11) DEFAULT NULL,
  `allocation_id` int(11) DEFAULT NULL,
  `est_id` bigint(20) DEFAULT NULL,
  `update_date` date DEFAULT NULL,
  `remarks` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`history_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1763 ;

tbl_history  (management_id,conservancy, county, `zone`, station, sub_compartment, species, planting_year, density,
 mdbh, mht, area, age, remarks, volume,update_date,status,user_name,plant_cord) VALUES ('$id','$conservancy5','$county2', '$zone2', '$station2', '$sub_compartment2', '$species2', '$planting_year2', '$density2',
'$mdbh2','$mht2', '$area2', '$age2','$remarks2','$volume2','$cdate','$status2','$login_name','$coordinates')");