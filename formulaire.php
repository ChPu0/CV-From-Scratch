
<p>Bonjour ! Message recu de :</p>

<p>Contact: <?php echo $_POST['nom']; ?> !</p>
<p>E-mail: <?php echo $_POST['email']; ?> !</p>
<p>Le sujet du message est : <?php echo htmlspecialchars($_POST['sujet']); ?> !</p>
<p>Ton message est : <?php echo htmlspecialchars($_POST['message']); ?> !</p>

<p><center>Merci pour votre message. Pour retourner sur la page, <a href="index.php">cliquer ici</a>.</center></p>



// <?php 
// $nom = $_POST['nom']; 
// $sujet = $_POST['sujet']; 
// $email = $_POST['email']; 
// $message = $_POST['message']; 

// php 
     // $headers ='From: "nom"<c.puaud@yahoo.fr>'."\n"; 
     // $headers .='Reply-To: adresse_de_reponse@fai.fr'."\n"; 
     // $headers .='Content-Type: text/plain; charset="iso-8859-1"'."\n"; 
     // $headers .='Content-Transfer-Encoding: 8bit'; 

     // if(mail('c.puaud@yahoo.fr', 'Sujet', 'Message de test', $headers)) 
     // { 
          // echo 'Le message a bien été envoyé'; 
     // } 
     // else 
     // { 
          // echo 'Le message n\'a pu être envoyé'; 
     // } 

// $retour = mail('c.puaud@yahoo.fr', 'Message envoyé depuis le site Free: charles.puaud@free.fr dont le sujet est : '. $_POST['sujet']. , 'le message est :' .$_POST['message']., 'From e-mail:'.$_POST['nom']. .$_POST['email'].);

// print("<center>Merci $nom. Votre message à bien été envoyé.</center>"); 
// print("<center>Thank you $nom. Your message has been correctly sent.</center>"); 
// ?> 

