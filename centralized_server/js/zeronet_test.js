<?php header("Content-Type: text/javascript"); ?>function testCleanetConnection(zf) {
	zf.cmd("wrapperNotification", ["info", "The JavaScript test has been carried out. Unfortunately, JavaScript could be loaded on the clearnet. This can affect your anonymity. For example, this may reveal your IP address. It seems your IP address is <?php echo $_SERVER["REMOTE_ADDR"]; ?>."]);
}
