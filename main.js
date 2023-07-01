
////////////////////////////////////////////////////////////////// User & Pass ////////////////////////////////////////////////////////////////////////

// var who = prompt("Who's there?");
// if (who === "Admin") {
//     var pass = prompt("Password?");
//     if (pass === "TheMaster") {
//         alert('Welcom');
//     } else if ( pass ) {
//         alert("Wrong Password");
//     }
//     else {
//         alert ('Canceled');
//     }
// } else if ( who ) {
//     alert("I don't know you");
// }
// else {
//     alert ('Canceled');
// }

//switch
// var who = prompt("Who's there?");
// switch (who) {
//     case 'admin':
//         var pass = prompt("Password?");
//         switch (pass) {
//             case "themaster":
//                 alert('Welcom');
//                 break;
//             default:
//                 alert("Wrong Password");
//                 break;
//         }
//         break;

//     case true:
//     alert("Heloooooooooo");
//     break;
//     default:
//         alert("I don't know you");
//         break;
// }

// ternary if
// var who = prompt("Who's there?");
// var pass = "TheMaster";

// (who === "admin") ?
//                 pass = prompt("Password?")

//                  (pass === "themaster") ?
//                    alert('Welcom')
//                    :(pass) ?
//                      alert("Wrong Password")
//                          : alert ('Canceled')

// : (who) ?
// alert("I don't know you")
// : alert ('Canceled');
// function load(event) {
//     alert('heoooooooooooooooooooooooo');
// }


////////////////////////////////////////////////////////////////// Persian Keboard ////////////////////////////////////////////////////////////////////////
// function keyPress(event) {
//   var char = {
//     97: "ش",
//     98: "ذ",
//     99: "ز",
//     100: "ی",
//     101: "ی",
//     102: "ب",
//     103: "ل",
//     104: "ا",
//     105: "ه",
//     106: "ت",
//     107: "ن",
//     108: "م",
//     109: "ئ",
//     110: "د",
//     111: "خ",
//     112: "ح",
//     113: "ض",
//     114: "ق",
//     115: "س",
//     116: "ف",
//     117: "ع",
//     118: "ر",
//     119: "ص",
//     120: "ط",
//     121: "غ",
//     122: "ظ",
//   };
//   var shiftChar = {
//     67: "ژ",
//   };
//   event.preventDefault();
//   if (shiftChar[event.keyCode]) {
//     event.target.value += shiftChar[event.keyCode];
//   } else if (char[event.keyCode]) {
//     event.target.value += char[event.keyCode];
//   }
//   console.log(event);
// }

// function persianChars(e) {
//     var chars = {
//         32: ' ',
//         97: 'ش',
//         66: 'ذ',
//         67: 'ز',
//         68: 'ی',
//         69: 'ث',
//         70: 'ب',
//         71: 'ل',
//         72: 'ا',
//         73: 'ه',
//         74: 'ت',
//         75: 'ن',
//         76: 'م',
//         77: 'ئ',
//         78: 'د',
//         79: 'خ',
//         80: 'ح',
//         81: 'ض',
//         82: 'ق',
//         83: 'س',
//         84: 'ف',
//         85: 'ع',
//         86: 'ر',
//         87: 'ص',
//         88: 'ط',
//         89: 'غ',
//         90: 'ظ',
//         186: 'ک',
//         188: 'و',
//         219: 'ج',
//         220: 'پ',
//         221: 'چ',
//         222: 'گ',
//         shift72: 'آ',
//         shift67: 'ژ',
//         shift16: '',
//         shift8: ''

//     };
//     e.preventDefault();
//     if (chars[e.keyCode] || e.keyCode === 8) {
//         if (e.keyCode === 8) {
//             var string = String(e.target.value);
//             e.target.value = string.substring(0, string.length - 1);
//         } else if (e.shiftKey) {
//             var shiftedKey = 'shift' + Number(e.keyCode);
//             if (chars[shiftedKey]) {
//                 e.target.value += chars[shiftedKey];
//             }
//         } else {
//             e.target.value += chars[e.keyCode];
//         }
//     }
// }

//////////////////////////////////////////////////////////// Clock Project /////////////////////////////////////////////////////////
var A = "AM";
setTimeout(function clockRuner() {
  var time = new Date();
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  if (hour > 12) {
    hour -= 12;
    A = "PM";
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  var clock = `${hour} : ${minute} : ${second} ${A} `;
  document.getElementById("clock").innerText = clock;
  setTimeout(clockRuner, 1000);
}, 1000);

//////////////////////////////////////////////////////////// Calculator //////////////////////////////////////////////////////////////
var power = false;
function clickNumber(event) {
    document.getElementById("display").value += event.target.textContent;
}
function clearDisplay() {
    document.getElementById("display").value = '';
}
function equal() {
    if ( document.getElementById("display").value === '' || document.getElementById("display").value === 0) {

    } else {
        if (power) {
            var num = document.getElementById("display").value.split('^');
            console.log(num);
            document.getElementById("display").value = Math.pow(num[0] , num[1]);
            power = false;
        } else {
            document.getElementById("display").value =eval(document.getElementById("display").value);
        }
    }
}
function randomNumber() {
    document.getElementById("display").value = Math.round(Math.random() * 10);
}
function ceilNumber() {
    document.getElementById("display").value = Math.ceil(eval(document.getElementById("display").value));
}
function absNumber() {
    document.getElementById("display").value = Math.abs(eval(document.getElementById("display").value));
} 
function sqrtNumber() {
    document.getElementById("display").value = Math.sqrt(eval(document.getElementById("display").value));
}
function powerNumber() {
    document.getElementById("display").value +=' ^ ';
    power = true;
}
function power2Number() {
    document.getElementById("display").value = Math.pow(eval(document.getElementById("display").value) , 2);
}
function floorNumber() {
    document.getElementById("display").value = Math.floor(document.getElementById("display").value);
}
function piNumber() {
    // document.getElementById("display").value = Math.PI;
    document.getElementById("display").value = Math.PI;
}