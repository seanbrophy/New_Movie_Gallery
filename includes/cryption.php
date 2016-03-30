<?php

	//Encryption and Decryption
	
	//Work with using this to hide the ID.
	
	$key1 = "this is first secret key";
	$key2 = "this is the second secret key";
	$input = 1;
	$length = strlen($input);
	

    /* Open the cipher */
    $td = mcrypt_module_open('rijndael-256', '', 'cbc', '');
    /* Create the IV and determine the keysize length, use MCRYPT_RAND
     * on Windows instead */
    $iv = mcrypt_create_iv(mcrypt_enc_get_iv_size($td), MCRYPT_RAND);
    $ks = mcrypt_enc_get_key_size($td);

    /* Create key */
    $key1 = md5($key1);
    $key2 = md5($key2);

    $key = substr($key1, 0, $ks/2) . substr(strtoupper($key2), (round(strlen($key2) / 2)), $ks/2);

    $key = substr($key.$key1.$key2.strtoupper($key1),0,$ks);

    /* Intialize encryption */
    mcrypt_generic_init($td, $key, $iv);

    /* Encrypt data */
    $encrypted = mcrypt_generic($td, $input);

    /* Terminate encryption handler */
    mcrypt_generic_deinit($td);

    /* Initialize encryption module for decryption */
    mcrypt_generic_init($td, $key, $iv);

    /* Decrypt encrypted string */
    $decrypted = mdecrypt_generic($td, $encrypted);

    /* Terminate decryption handle and close module */
    mcrypt_generic_deinit($td);
    mcrypt_module_close($td);

    /* Show string */
    echo "Text: ".substr($decrypted,0,$length) . "<br>";
    echo "Encoded: ".$encrypted ."<br>";
    echo "<br>key1: $key1 <br>key2: $key2<br>created key: $key";


?>