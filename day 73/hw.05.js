// 5)მოიძიეთ ინფორმაცია javasccript ზე
"არ აგერიოთ ერთმანეთში Java და JavaScript
JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; იკითხება: ჯავასკრიპტი; აბრევ. JS /ˈdʒeɪ.ɛs./) — პროგრამირების ერთ-ერთი ფართოდ გავრცელებული ენაა. სახელწოდება JavaScript, როგორც სავაჭრო ნიშანი დარეგისტრირებულია ფირმა Sun Microsystems, Inc-ის მიერ.

"ისტორია
JavaScript-ის შექმნილი კომპანია Netscape-ის მიერ, და პირველად ჩართული იყო Netscape Navigator ბრაუზერში. მისი თავდაპირველი სახელწოდება იყო Mocha, შემდეგ LiveScript. იგი წარმოდგენილ იქნა როგორც Netscape Navigator 2.0B3 ვერსიის შემადგენელი ნაწილი 1995 წლის დეკემბერში. Internet Explorer-ში ჯავასკრიპტი გამოჩნდა 1996 წელს, როცა ოფიციალურად გამოვიდა Internet Explorer 3,0 ვერსია.
"
JavaScript და HTML
JavaScript შეიძლება იყოს HTML-ის შემადგენელი ნაწილი და მოთავსებული იყოს ნებისმიერ ადგილას, შეუზღუდავი რაოდენობით. იგი ყოველთვის მოთავსებულია <script></script> ტეგებს შორის, HTML 4.01 სტანდარტის მიხედვით, type="text/javascript" ტეგის საშუალებით.

კოდის მაგალითი:

<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
  </head>
  <body>
    <button id="hellobutton">Hello</button>
    <script>
        document.getElementById('hellobutton').onclick = function() {
            alert('Hello world!');                     // Show a dialog
            var myTextNode = document.createTextNode('Some new words.');
            document.body.appendChild(myTextNode);     // Append "Some new words" to the page
        };
    </script>
  </body>
</html>
"ვებგვერდზე ეს კოდი გამოჩნდება როგორც <<Hello World!>>"
"