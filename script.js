const boxes = document.querySelectorAll('.box');
const startgame = document.querySelectorAll('.start')

const boxone = document.querySelectorAll('.firstbox')

const winbox = document.querySelector('.winner')


const eleven = document.getElementById('11')
const twelve = document.getElementById('12')
const thirteen = document.getElementById('13')
const fourteen = document.getElementById('14')
const fifteen = document.getElementById('15')
const sixteen = document.getElementById('16')
const seventeen = document.getElementById('17')
const eighteen = document.getElementById('18')
const nineteen = document.getElementById('19')
const twentyone = document.getElementById('21')
const twentytwo = document.getElementById('22')
const twentythree = document.getElementById('23')
const twentyfour = document.getElementById('24')
const twentyfive = document.getElementById('25')
const twentysix = document.getElementById('26')
const twentyseven = document.getElementById('27')
const twentyeight = document.getElementById('28')
const twentynine = document.getElementById('29')
const thirtyone = document.getElementById('31')
const thirtytwo = document.getElementById('32')
const thirtythree = document.getElementById('33')
const thirtyfour = document.getElementById('34')
const thirtyfive = document.getElementById('35')
const thirtysix = document.getElementById('36')
const thirtyseven = document.getElementById('37')
const thirtyeight = document.getElementById('38')
const thirtynine = document.getElementById('39')
const fourtyone = document.getElementById('41')
const fourtytwo = document.getElementById('42')
const fourtythree = document.getElementById('43')
const fourtyfour = document.getElementById('44')
const fourtyfive = document.getElementById('45')
const fourtysix = document.getElementById('46')
const fourtyseven = document.getElementById('47')
const fourtyeight = document.getElementById('48')
const fourtynine = document.getElementById('49')
const fiftyone = document.getElementById('51')
const fiftytwo = document.getElementById('52')
const fiftythree = document.getElementById('53')
const fiftyfour = document.getElementById('54')
const fiftyfive = document.getElementById('55')
const fiftysix = document.getElementById('56')
const fiftyseven = document.getElementById('57')
const fiftyeight = document.getElementById('58')
const fiftynine = document.getElementById('59')
const sixtyone = document.getElementById('61')
const sixtytwo = document.getElementById('62')
const sixtythree = document.getElementById('63')
const sixtyfour = document.getElementById('64')
const sixtyfive = document.getElementById('65')
const sixtysix = document.getElementById('66')
const sixtyseven = document.getElementById('67')
const sixtyeight = document.getElementById('68')
const sixtynine = document.getElementById('69')
const seventyone = document.getElementById('71')
const seventytwo = document.getElementById('72')
const seventythree = document.getElementById('73')
const seventyfour = document.getElementById('74')
const seventyfive = document.getElementById('75')
const seventysix = document.getElementById('76')
const seventyseven = document.getElementById('77')
const seventyeight = document.getElementById('78')
const seventynine = document.getElementById('79')
const eightyone = document.getElementById('81')
const eightytwo = document.getElementById('82')
const eightythree = document.getElementById('83')
const eightyfour = document.getElementById('84')
const eightyfive = document.getElementById('85')
const eightysix = document.getElementById('86')
const eightyseven = document.getElementById('87')
const eightyeight = document.getElementById('88')
const eightynine = document.getElementById('89')
const ninetyone = document.getElementById('91')
const ninetytwo = document.getElementById('92')
const ninetythree = document.getElementById('93')
const ninetyfour = document.getElementById('94')
const ninetyfive = document.getElementById('95')
const ninetysix = document.getElementById('96')
const ninetyseven = document.getElementById('97')
const ninetyeight = document.getElementById('98')
const ninetynine = document.getElementById('99')

let loop = 'false';
let loop1 = 'true';
let loop2 = 'true';
let loop3 = 'true';
let loop4 = 'true';
let loop5 = 'true';
let loop6 = 'true';
let loop7 = 'true';
let loop8 = 'true';
let loop9 = 'true';

let firstwinnerx = 'false';
let firstwinnero = 'false'
let secondwinnerx = 'false';
let secondwinnero = 'false'
let thirdwinnerx = 'false';
let thirdwinnero = 'false'
let fourthwinnerx = 'false';
let fourthwinnero = 'false'
let fifthwinnerx = 'false';
let fifthwinnero = 'false'
let sixthwinnerx = 'false';
let sixthwinnero = 'false'
let seventhwinnerx = 'false';
let seventhwinnero = 'false'
let eighthwinnerx = 'false';
let eighthwinnero = 'false'
let ninthwinnerx = 'false';
let ninthwinnero = 'false'

let firstmove = 'true'


let currentPlayer = 'X';

let boxcontent = null;

let winner = 'none'


boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (firstmove !== 'true') {
      return
    } else {
      allopen()
    }
  })
})


function allopen() {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (loop !== 'false') {
        return;
      }
      if (box.textContent !== "") {
        return;
      }
      if (box.classList.contains('firstbox')) {
        if (firstwinnerx !== 'false') {
          return;
        }
        if (firstwinnero !== 'false') {
          return;
        }
      }
      if (box.classList.contains('secondbox')) {
        if (secondwinnerx !== 'false') {
          return;
        }
        if (secondwinnero !== 'false') {
          return;
        }
      }
      if (box.classList.contains('thirdbox')) {
        if (thirdwinnerx !== 'false') {
        }
        if (thirdwinnero !== 'false') {
          return;
        }
      }
      if (box.classList.contains('fourthbox')) {
        if (fourthwinnerx !== 'false') {
          return;
        }
        if (fourthwinnero !== 'false') {
          return;
        }
      }
      if (box.classList.contains('fifthbox')) {
        if (fifthwinnerx !== 'false') {
          return;
        }
        if (fifthwinnero !== 'false') {
          return;
        }
      }

      if (box.classList.contains('sixthbox')) {
        if (sixthwinnerx !== 'false') {
          return;
        }
        if (sixthwinnero !== 'false') {
          return;
        }
      }
      if (box.classList.contains('seventhbox')) {
        if (seventhwinnerx !== 'false') {
        }
        if (seventhwinnero !== 'false') {
          return;
        }
      }
      if (box.classList.contains('eighthbox')) {
        if (eighthwinnerx !== 'false') {
        }
        if (eighthwinnero !== 'false') {
          return;
        }
      }
      if (box.classList.contains('ninthbox')) {
        if (ninthwinnerx !== 'false') {
          return;
        }
        if (ninthwinnero !== 'false') {
          return;
        }
      }


      box.textContent = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

      boxonewinner()
      boxtwowinner()
      boxthreewinner()
      boxfourwinner()
      boxfivewinner()
      boxsixwinner()
      boxsevenwinner()
      boxeightwinner()
      boxninewinner()

      hoorayyouwin()

      if (box.classList.contains('topleft')) {
        if (firstwinnerx !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        } else if (firstwinnero !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        }
        else {
          topleftclick(); loop = 'true'; loop1 = 'false';
        }
      } else if (box.classList.contains('topcenter')) {
        if (secondwinnerx !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        } else if (secondwinnero !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        }
        else {
          topcenterclick(); loop = 'true'; loop2 = 'false';
        }
      } else if (box.classList.contains('topright')) {
        if (thirdwinnerx !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        } else if (thirdwinnero !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        }
        else {
          toprightclick(); loop = 'true'; loop3 = 'false';
        }
      } else if (box.classList.contains('middleleft')) {
        if (fourthwinnerx !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        } else if (fourthwinnero !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        }
        else {
          middleleftclick(); loop = 'true'; loop4 = 'false';
        }
      } else if (box.classList.contains('middlecenter')) {
        if (fifthwinnerx !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        } else if (fifthwinnero !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        }
        else {
          middlecenterclick(); loop = 'true'; loop5 = 'false';
        }
      } else if (box.classList.contains('middleright')) {
        if (sixthwinnerx !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        } else if (sixthwinnero !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        }
        else {
          middlerightclick(); loop = 'true'; loop6 = 'false';
        }
      } else if (box.classList.contains('bottomleft')) {
        if (seventhwinnerx !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        } else if (seventhwinnero !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomleftclick(); loop = 'true'; loop7 = 'false';
        }
      } else if (box.classList.contains('bottomcenter')) {
        if (eighthwinnerx !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        } else if (eighthwinnero !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomcenterclick(); loop = 'true'; loop8 = 'false';
        }
      } else if (box.classList.contains('bottomright')) {
        if (ninthwinnerx !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        } else if (ninthwinnero !== 'false') {
          loop = 'true'; loop = 'false'; allopen()
        }
      }
    }
    )
    firstmove = 'false'
  }
  );
}



function topleftclick() {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (loop1 !== 'false') {
        return;
      }
      if (firstwinnerx !== 'false') {
        allopen(); loop = 'false'; loop1 = 'true'
      }
      if (firstwinnero !== 'false') {
        allopen(); loop = 'false'; loop1 = 'true'
      }

      if (box.textContent !== "") {
        return;
      }
      if (box.classList.contains('secondbox')) {
        return;
      }
      if (box.classList.contains('thirdbox')) {
        return;
      }
      if (box.classList.contains('fourthbox')) {
        return;
      }
      if (box.classList.contains('fifthbox')) {
        return;
      }
      if (box.classList.contains('sixthbox')) {
        return;
      }
      if (box.classList.contains('seventhbox')) {
        return;
      }
      if (box.classList.contains('eighthbox')) {
        return;
      }
      if (box.classList.contains('ninthbox')) {
        return;
      }
      box.textContent = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

      boxonewinner()
      boxtwowinner()
      boxthreewinner()
      boxfourwinner()
      boxfivewinner()
      boxsixwinner()
      boxsevenwinner()
      boxeightwinner()
      boxninewinner()


      if (box.classList.contains('topleft')) {
        if (firstwinnerx !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        } else if (firstwinnero !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        }
        else {
          return;
        }
      } else if (box.classList.contains('topcenter')) {
        if (secondwinnerx !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        } else if (secondwinnero !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        }
        else {
          topcenterclick(); loop1 = 'true'; loop2 = 'false';
        }
      } else if (box.classList.contains('topright')) {
        if (thirdwinnerx !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        } else if (thirdwinnero !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        }
        else {
          toprightclick(); loop1 = 'true'; loop3 = 'false';
        }
      } else if (box.classList.contains('middleleft')) {
        if (fourthwinnerx !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        } else if (fourthwinnero !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        }
        else {
          middleleftclick(); loop1 = 'true'; loop4 = 'false';
        }
      } else if (box.classList.contains('middlecenter')) {
        if (fifthwinnerx !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        } else if (fifthwinnero !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlecenterclick(); loop1 = 'true'; loop5 = 'false';
        }
      } else if (box.classList.contains('middleright')) {
        if (sixthwinnerx !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        } else if (sixthwinnero !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlerightclick(); loop1 = 'true'; loop6 = 'false';
        }
      } else if (box.classList.contains('bottomleft')) {
        if (seventhwinnerx !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        } else if (seventhwinnero !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomleftclick(); loop1 = 'true'; loop7 = 'false';
        }
      } else if (box.classList.contains('bottomcenter')) {
        if (eighthwinnerx !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        } else if (eighthwinnero !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomcenterclick(); loop1 = 'true'; loop8 = 'false';
        }
      } else if (box.classList.contains('bottomright')) {
        if (ninthwinnerx !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        } else if (ninthwinnero !== 'false') {
          loop1 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomrightclick(); loop1 = 'true'; loop9 = 'false';
        }
      }
      boxonewinner()
    })
  })
}

function topcenterclick() {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (loop2 !== 'false') {
        return;
      }

      if (secondwinnerx !== 'false') {
        allopen(); loop = 'false'; loop2 = 'true';
      }
      if (secondwinnero !== 'false') {
        allopen(); loop = 'false'; loop2 = 'true';
      }

      if (box.textContent !== "") {
        return;
      }
      if (box.classList.contains('firstbox')) {
        return;
      }
      if (box.classList.contains('thirdbox')) {
        return;
      }
      if (box.classList.contains('fourthbox')) {
        return;
      }
      if (box.classList.contains('fifthbox')) {
        return;
      }
      if (box.classList.contains('sixthbox')) {
        return;
      }
      if (box.classList.contains('seventhbox')) {
        return;
      }
      if (box.classList.contains('eighthbox')) {
        return;
      }
      if (box.classList.contains('ninthbox')) {
        return;
      }
      box.textContent = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

      boxonewinner()
      boxtwowinner()
      boxthreewinner()
      boxfourwinner()
      boxfivewinner()
      boxsixwinner()
      boxsevenwinner()
      boxeightwinner()
      boxninewinner()

      if (box.classList.contains('topleft')) {
        if (firstwinnerx !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        } else if (firstwinnero !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        }
        else {
          topleftclick(); loop2 = 'true'; loop1 = 'false';
        }
      } else if (box.classList.contains('topcenter')) {
        if (secondwinnerx !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        } else if (secondwinnero !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        }
        else {
          return;
        }
      } else if (box.classList.contains('topright')) {
        if (thirdwinnerx !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        } else if (thirdwinnero !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        }
        else {
          toprightclick(); loop2 = 'true'; loop3 = 'false';
        }
      } else if (box.classList.contains('middleleft')) {
        if (fourthwinnerx !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        } else if (fourthwinnero !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        }
        else {
          middleleftclick(); loop2 = 'true'; loop4 = 'false';
        }
      } else if (box.classList.contains('middlecenter')) {
        if (fifthwinnerx !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        } else if (fifthwinnero !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlecenterclick(); loop2 = 'true'; loop5 = 'false';
        }
      } else if (box.classList.contains('middleright')) {
        if (sixthwinnerx !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        } else if (sixthwinnero !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlerightclick(); loop2 = 'true'; loop6 = 'false';
        }
      } else if (box.classList.contains('bottomleft')) {
        if (seventhwinnerx !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        } else if (seventhwinnero !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomleftclick(); loop2 = 'true'; loop7 = 'false';
        }
      } else if (box.classList.contains('bottomcenter')) {
        if (eighthwinnerx !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        } else if (eighthwinnero !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomcenterclick(); loop2 = 'true'; loop8 = 'false';
        }
      } else if (box.classList.contains('bottomright')) {
        if (ninthwinnerx !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        } else if (ninthwinnero !== 'false') {
          loop2 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomrightclick(); loop2 = 'true'; loop9 = 'false';
        }
      }
      boxtwowinner()
    })
  })
}

function toprightclick() {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (loop3 !== 'false') {
        return;
      }

      if (thirdwinnerx !== 'false') {
        allopen(); loop = 'false'; loop3 = 'true'
      }
      if (thirdwinnero !== 'false') {
        allopen(); loop = 'false'; loop3 = 'true'
      }

      if (box.textContent !== "") {
        return;
      }
      if (box.classList.contains('firstbox')) {
        return;
      }
      if (box.classList.contains('secondbox')) {
        return;
      }
      if (box.classList.contains('fourthbox')) {
        return;
      }
      if (box.classList.contains('fifthbox')) {
        return;
      }
      if (box.classList.contains('sixthbox')) {
        return;
      }
      if (box.classList.contains('seventhbox')) {
        return;
      }
      if (box.classList.contains('eighthbox')) {
        return;
      }
      if (box.classList.contains('ninthbox')) {
        return;
      }
      box.textContent = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

      boxonewinner()
      boxtwowinner()
      boxthreewinner()
      boxfourwinner()
      boxfivewinner()
      boxsixwinner()
      boxsevenwinner()
      boxeightwinner()
      boxninewinner()

      if (box.classList.contains('topleft')) {
        if (firstwinnerx !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        } else if (firstwinnero !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        }
        else {
          topleftclick(); loop3 = 'true'; loop1 = 'false';
        }
      } else if (box.classList.contains('topcenter')) {
        if (secondwinnerx !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        } else if (secondwinnero !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        }
        else {
          topcenterclick(); loop3 = 'true'; loop2 = 'false';
        }
      } else if (box.classList.contains('topright')) {
        if (thirdwinnerx !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        } else if (thirdwinnero !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        }
        else {
          return;
        }
      } else if (box.classList.contains('middleleft')) {
        if (fourthwinnerx !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        } else if (fourthwinnero !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        }
        else {
          middleleftclick(); loop3 = 'true'; loop4 = 'false';
        }
      } else if (box.classList.contains('middlecenter')) {
        if (fifthwinnerx !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        } else if (fifthwinnero !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlecenterclick(); loop3 = 'true'; loop5 = 'false';
        }
      } else if (box.classList.contains('middleright')) {
        if (sixthwinnerx !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        } else if (sixthwinnero !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlerightclick(); loop3 = 'true'; loop6 = 'false';
        }
      } else if (box.classList.contains('bottomleft')) {
        if (seventhwinnerx !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        } else if (seventhwinnero !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomleftclick(); loop3 = 'true'; loop7 = 'false';
        }
      } else if (box.classList.contains('bottomcenter')) {
        if (eighthwinnerx !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        } else if (eighthwinnero !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomcenterclick(); loop3 = 'true'; loop8 = 'false';
        }
      } else if (box.classList.contains('bottomright')) {
        if (ninthwinnerx !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        } else if (ninthwinnero !== 'false') {
          loop3 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomrightclick(); loop3 = 'true'; loop9 = 'false';
        }
      }
      boxthreewinner()
    })
  })
}

function middleleftclick() {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (loop4 !== 'false') {
        return;
      }

      if (fourthwinnerx !== 'false') {
        allopen(); loop = 'false'; loop4 = 'true'
      }
      if (fourthwinnero !== 'false') {
        allopen(); loop = 'false'; loop4 = 'true'
      }

      if (box.textContent !== "") {
        return;
      }
      if (box.classList.contains('firstbox')) {
        return;
      }
      if (box.classList.contains('secondbox')) {
        return;
      }
      if (box.classList.contains('thirdbox')) {
        return;
      }
      if (box.classList.contains('fifthbox')) {
        return;
      }
      if (box.classList.contains('sixthbox')) {
        return;
      }
      if (box.classList.contains('seventhbox')) {
        return;
      }
      if (box.classList.contains('eighthbox')) {
        return;
      }
      if (box.classList.contains('ninthbox')) {
        return;
      }
      box.textContent = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

      boxonewinner()
      boxtwowinner()
      boxthreewinner()
      boxfourwinner()
      boxfivewinner()
      boxsixwinner()
      boxsevenwinner()
      boxeightwinner()
      boxninewinner()

      if (box.classList.contains('topleft')) {
        if (firstwinnerx !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        } else if (firstwinnero !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        }
        else {
          topleftclick(); loop4 = 'true'; loop1 = 'false';
        }
      } else if (box.classList.contains('topcenter')) {
        if (secondwinnerx !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        } else if (secondwinnero !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        }
        else {
          topcenterclick(); loop4 = 'true'; loop2 = 'false';
        }
      } else if (box.classList.contains('topright')) {
        if (thirdwinnerx !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        } else if (thirdwinnero !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        }
        else {
          toprightclick(); loop4 = 'true'; loop3 = 'false';
        }
      } else if (box.classList.contains('middleleft')) {
        if (fourthwinnerx !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        } else if (fourthwinnero !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        }
        else {
          return;
        }
      } else if (box.classList.contains('middlecenter')) {
        if (fifthwinnerx !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        } else if (fifthwinnero !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlecenterclick(); loop4 = 'true'; loop5 = 'false';
        }
      } else if (box.classList.contains('middleright')) {
        if (sixthwinnerx !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        } else if (sixthwinnero !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlerightclick(); loop4 = 'true'; loop6 = 'false';
        }
      } else if (box.classList.contains('bottomleft')) {
        if (seventhwinnerx !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        } else if (seventhwinnero !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomleftclick(); loop4 = 'true'; loop7 = 'false';
        }
      } else if (box.classList.contains('bottomcenter')) {
        if (eighthwinnerx !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        } else if (eighthwinnero !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomcenterclick(); loop4 = 'true'; loop8 = 'false';
        }
      } else if (box.classList.contains('bottomright')) {
        if (ninthwinnerx !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        } else if (ninthwinnero !== 'false') {
          loop4 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomrightclick(); loop4 = 'true'; loop9 = 'false';
        }
      }
      boxfourwinner()
    })
  })
}

function middlecenterclick() {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (loop5 !== 'false') {
        return;
      }

      if (fifthwinnerx !== 'false') {
        allopen(); loop = 'false'; loop5 = 'true'
      }
      if (fifthwinnero !== 'false') {
        allopen(); loop = 'false'; loop5 = 'true'
      }

      if (box.textContent !== "") {
        return;
      }
      if (box.classList.contains('firstbox')) {
        return;
      }
      if (box.classList.contains('secondbox')) {
        return;
      }
      if (box.classList.contains('thirdbox')) {
        return;
      }
      if (box.classList.contains('fourthbox')) {
        return;
      }
      if (box.classList.contains('sixthbox')) {
        return;
      }
      if (box.classList.contains('seventhbox')) {
        return;
      }
      if (box.classList.contains('eighthbox')) {
        return;
      }
      if (box.classList.contains('ninthbox')) {
        return;
      }
      box.textContent = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

      boxonewinner()
      boxtwowinner()
      boxthreewinner()
      boxfourwinner()
      boxfivewinner()
      boxsixwinner()
      boxsevenwinner()
      boxeightwinner()
      boxninewinner()

      if (box.classList.contains('topleft')) {
        if (firstwinnerx !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        } else if (firstwinnero !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        }
        else {
          topleftclick(); loop5 = 'true'; loop1 = 'false';
        }
      } else if (box.classList.contains('topcenter')) {
        if (secondwinnerx !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        } else if (secondwinnero !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        }
        else {
          topcenterclick(); loop5 = 'true'; loop2 = 'false';
        }
      } else if (box.classList.contains('topright')) {
        if (thirdwinnerx !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        } else if (thirdwinnero !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        }
        else {
          toprightclick(); loop5 = 'true'; loop3 = 'false';
        }
      } else if (box.classList.contains('middleleft')) {
        if (fourthwinnerx !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        } else if (fourthwinnero !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        }
        else {
          middleleftclick(); loop5 = 'true'; loop4 = 'false';
        }
      } else if (box.classList.contains('middlecenter')) {
        boxfivewinner()
        if (fifthwinnerx !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        } else if (fifthwinnero !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        }
        else {
          return;
        }
      } else if (box.classList.contains('middleright')) {
        if (sixthwinnerx !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        } else if (sixthwinnero !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlerightclick(); loop5 = 'true'; loop6 = 'false';
        }
      } else if (box.classList.contains('bottomleft')) {
        if (seventhwinnerx !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        } else if (seventhwinnero !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomleftclick(); loop5 = 'true'; loop7 = 'false';
        }
      } else if (box.classList.contains('bottomcenter')) {
        if (eighthwinnerx !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        } else if (eighthwinnero !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomcenterclick(); loop5 = 'true'; loop8 = 'false';
        }
      } else if (box.classList.contains('bottomright')) {
        if (ninthwinnerx !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        } else if (ninthwinnero !== 'false') {
          loop5 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomrightclick(); loop5 = 'true'; loop9 = 'false';
        }
      }
      boxfivewinner()
    })
  })
}

function middlerightclick() {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (loop6 !== 'false') {
        return;
      }

      if (firstwinnerx !== 'false') {
        allopen(); loop = 'false'; loop6 = 'false'
      }
      if (firstwinnero !== 'false') {
        allopen(); loop = 'false'; loop6 = 'false'
      }

      if (box.textContent !== "") {
        return;
      }
      if (box.classList.contains('firstbox')) {
        return;
      }
      if (box.classList.contains('secondbox')) {
        return;
      }
      if (box.classList.contains('thirdbox')) {
        return;
      }
      if (box.classList.contains('fourthbox')) {
        return;
      }
      if (box.classList.contains('fifthbox')) {
        return;
      }
      if (box.classList.contains('seventhbox')) {
        return;
      }
      if (box.classList.contains('eighthbox')) {
        return;
      }
      if (box.classList.contains('ninthbox')) {
        return;
      }
      box.textContent = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

      boxonewinner()
      boxtwowinner()
      boxthreewinner()
      boxfourwinner()
      boxfivewinner()
      boxsixwinner()
      boxsevenwinner()
      boxeightwinner()
      boxninewinner()

      if (box.classList.contains('topleft')) {
        if (firstwinnerx !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        } else if (firstwinnero !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        }
        else {
          topleftclick(); loop6 = 'true'; loop1 = 'false';
        }
      } else if (box.classList.contains('topcenter')) {
        if (secondwinnerx !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        } else if (secondwinnero !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        }
        else {
          topcenterclick(); loop6 = 'true'; loop2 = 'false';
        }
      } else if (box.classList.contains('topright')) {
        if (thirdwinnerx !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        } else if (thirdwinnero !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        }
        else {
          toprightclick(); loop6 = 'true'; loop3 = 'false';
        }
      } else if (box.classList.contains('middleleft')) {
        if (fourthwinnerx !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        } else if (fourthwinnero !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        }
        else {
          middleleftclick(); loop6 = 'true'; loop4 = 'false';
        }
      } else if (box.classList.contains('middlecenter')) {
        if (fifthwinnerx !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        } else if (fifthwinnero !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlecenterclick(); loop6 = 'true'; loop5 = 'false';
        }
      } else if (box.classList.contains('middleright')) {
        if (sixthwinnerx !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        } else if (sixthwinnero !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        }
        else {
          return;
        }
      } else if (box.classList.contains('bottomleft')) {
        if (seventhwinnerx !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        } else if (seventhwinnero !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomleftclick(); loop6 = 'true'; loop7 = 'false';
        }
      } else if (box.classList.contains('bottomcenter')) {
        if (eighthwinnerx !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        } else if (eighthwinnero !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomcenterclick(); loop6 = 'true'; loop8 = 'false';
        }
      } else if (box.classList.contains('bottomright')) {
        if (ninthwinnerx !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        } else if (ninthwinnero !== 'false') {
          loop6 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomrightclick(); loop6 = 'true'; loop9 = 'false';
        }
      }
    })
    boxsixwinner()
  })
}

function bottomleftclick() {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (loop7 !== 'false') {
        return;
      }

      if (seventhwinnerx !== 'false') {
        allopen(); loop = 'false'; loop7 = 'true'
      }
      if (seventhwinnero !== 'false') {
        allopen(); loop = 'false'; loop7 = 'true'
      }

      if (box.textContent !== "") {
        return;
      }
      if (box.classList.contains('firstbox')) {
        return;
      }
      if (box.classList.contains('secondbox')) {
        return;
      }
      if (box.classList.contains('thirdbox')) {
        return;
      }
      if (box.classList.contains('fourthbox')) {
        return;
      }
      if (box.classList.contains('fifthbox')) {
        return;
      }
      if (box.classList.contains('sixthbox')) {
        return;
      }
      if (box.classList.contains('eighthbox')) {
        return;
      }
      if (box.classList.contains('ninthbox')) {
        return;
      }
      box.textContent = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

      boxonewinner()
      boxtwowinner()
      boxthreewinner()
      boxfourwinner()
      boxfivewinner()
      boxsixwinner()
      boxsevenwinner()
      boxeightwinner()
      boxninewinner()



      if (box.classList.contains('topleft')) {
        if (firstwinnerx !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        } else if (firstwinnero !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        }
        else {
          topleftclick(); loop7 = 'true'; loop1 = 'false';
        }
      } else if (box.classList.contains('topcenter')) {
        if (secondwinnerx !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        } else if (secondwinnero !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        }
        else {
          topcenterclick(); loop7 = 'true'; loop2 = 'false';
        }
      } else if (box.classList.contains('topright')) {
        if (thirdwinnerx !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        } else if (thirdwinnero !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        }
        else {
          toprightclick(); loop7 = 'true'; loop3 = 'false';
        }
      } else if (box.classList.contains('middleleft')) {
        if (fourthwinnerx !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        } else if (fourthwinnero !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        }
        else {
          middleleftclick(); loop7 = 'true'; loop4 = 'false';
        }
      } else if (box.classList.contains('middlecenter')) {
        if (fifthwinnerx !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        } else if (fifthwinnero !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlecenterclick(); loop7 = 'true'; loop5 = 'false';
        }
      } else if (box.classList.contains('middleright')) {
        if (sixthwinnerx !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        } else if (sixthwinnero !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlerightclick(); loop7 = 'true'; loop6 = 'false';
        }
      } else if (box.classList.contains('bottomleft')) {
        if (seventhwinnerx !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        } else if (seventhwinnero !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        }
        else {
          return;
        }
      } else if (box.classList.contains('bottomcenter')) {
        if (eighthwinnerx !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        } else if (eighthwinnero !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomcenterclick(); loop7 = 'true'; loop8 = 'false';
        }
      } else if (box.classList.contains('bottomright')) {
        if (ninthwinnerx !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        } else if (ninthwinnero !== 'false') {
          loop7 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomrightclick(); loop7 = 'true'; loop9 = 'false';
        }
      }
      boxsevenwinner()
    })
  })
}

function bottomcenterclick() {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (loop8 !== 'false') {
        return;
      }

      if (eighthwinnerx !== 'false') {
        allopen(); loop = 'false'; loop8 = 'true'
      }
      if (eighthwinnero !== 'false') {
        allopen(); loop = 'false'; loop8 = 'true'
      }

      if (box.textContent !== "") {
        return;
      }
      if (box.classList.contains('firstbox')) {
        return;
      }
      if (box.classList.contains('secondbox')) {
        return;
      }
      if (box.classList.contains('thirdbox')) {
        return;
      }
      if (box.classList.contains('fourthbox')) {
        return;
      }
      if (box.classList.contains('fifthbox')) {
        return;
      }
      if (box.classList.contains('sixthbox')) {
        return;
      }
      if (box.classList.contains('seventhbox')) {
        return;
      }
      if (box.classList.contains('ninthbox')) {
        return;
      }
      box.textContent = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

      boxonewinner()
      boxtwowinner()
      boxthreewinner()
      boxfourwinner()
      boxfivewinner()
      boxsixwinner()
      boxsevenwinner()
      boxeightwinner()
      boxninewinner()

      if (box.classList.contains('topleft')) {
        if (firstwinnerx !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        } else if (firstwinnero !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        }
        else {
          topleftclick(); loop8 = 'true'; loop1 = 'false';
        }
      } else if (box.classList.contains('topcenter')) {
        if (secondwinnerx !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        } else if (secondwinnero !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        }
        else {
          topcenterclick(); loop8 = 'true'; loop2 = 'false';
        }
      } else if (box.classList.contains('topright')) {
        if (thirdwinnerx !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        } else if (thirdwinnero !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        }
        else {
          toprightclick(); loop8 = 'true'; loop3 = 'false';
        }
      } else if (box.classList.contains('middleleft')) {
        if (fourthwinnerx !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        } else if (fourthwinnero !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        }
        else {
          middleleftclick(); loop8 = 'true'; loop4 = 'false';
        }
      } else if (box.classList.contains('middlecenter')) {
        if (fifthwinnerx !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        } else if (fifthwinnero !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlecenterclick(); loop8 = 'true'; loop5 = 'false';
        }
      } else if (box.classList.contains('middleright')) {
        if (sixthwinnerx !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        } else if (sixthwinnero !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlerightclick(); loop8 = 'true'; loop6 = 'false';
        }
      } else if (box.classList.contains('bottomleft')) {
        if (seventhwinnerx !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        } else if (seventhwinnero !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomleftclick(); loop8 = 'true'; loop7 = 'false';
        }
      } else if (box.classList.contains('bottomcenter')) {
        if (eighthwinnerx !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        } else if (eighthwinnero !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        }
        else {
          return;
        }
      } else if (box.classList.contains('bottomright')) {
        if (ninthwinnerx !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        } else if (ninthwinnero !== 'false') {
          loop8 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomrightclick(); loop8 = 'true'; loop9 = 'false';
        }
      }
      boxeightwinner()
    })
  })
}

function bottomrightclick() {
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      if (loop9 !== 'false') {
        return;
      }

      if (ninthwinnerx !== 'false') {
        loop = 'false'; loop9 = 'true'; allopen();
      }
      if (ninthwinnero !== 'false') {
        loop = 'false'; loop9 = 'true'; allopen();
      }

      if (box.textContent !== "") {
        return;
      }
      if (box.classList.contains('firstbox')) {
        return;
      }
      if (box.classList.contains('secondbox')) {
        return;
      }
      if (box.classList.contains('thirdbox')) {
        return;
      }
      if (box.classList.contains('fourthbox')) {
        return;
      }
      if (box.classList.contains('fifthbox')) {
        return;
      }
      if (box.classList.contains('sixthbox')) {
        return;
      }
      if (box.classList.contains('seventhbox')) {
        return;
      }
      if (box.classList.contains('eighthbox')) {
        return;
      }
      box.textContent = currentPlayer;
      currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X';

      boxonewinner()
      boxtwowinner()
      boxthreewinner()
      boxfourwinner()
      boxfivewinner()
      boxsixwinner()
      boxsevenwinner()
      boxeightwinner()
      boxninewinner()



      if (box.classList.contains('topleft')) {
        if (firstwinnerx !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        } else if (firstwinnero !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        }
        else {
          topleftclick(); loop9 = 'true'; loop1 = 'false';
        }
      } else if (box.classList.contains('topcenter')) {
        if (secondwinnerx !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        } else if (secondwinnero !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        }
        else {
          topcenterclick(); loop9 = 'true'; loop2 = 'false';
        }
      } else if (box.classList.contains('topright')) {
        if (thirdwinnerx !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        } else if (thirdwinnero !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        }
        else {
          toprightclick(); loop9 = 'true'; loop3 = 'false';
        }
      } else if (box.classList.contains('middleleft')) {
        if (fourthwinnerx !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        } else if (fourthwinnero !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        }
        else {
          middleleftclick(); loop9 = 'true'; loop4 = 'false';
        }
      } else if (box.classList.contains('middlecenter')) {
        if (fifthwinnerx !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        } else if (fifthwinnero !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlecenterclick(); loop9 = 'true'; loop5 = 'false';
        }
      } else if (box.classList.contains('middleright')) {
        if (sixthwinnerx !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        } else if (sixthwinnero !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        }
        else {
          middlerightclick(); loop9 = 'true'; loop6 = 'false';
        }
      } else if (box.classList.contains('bottomleft')) {
        if (seventhwinnerx !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        } else if (seventhwinnero !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomleftclick(); loop9 = 'true'; loop7 = 'false';
        }
      } else if (box.classList.contains('bottomcenter')) {
        if (eighthwinnerx !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        } else if (eighthwinnero !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        }
        else {
          bottomcenterclick(); loop9 = 'true'; loop8 = 'false';
        }
      } else if (box.classList.contains('bottomright')) {
        if (ninthwinnerx !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        } else if (ninthwinnero !== 'false') {
          loop9 = 'true'; loop = 'false'; allopen()
        }
        else {
          return;
        }
      }
      boxninewinner()
    })
  })
}


function boxonewinner() {
  if (eleven.innerHTML === 'X') {
    if (twelve.innerHTML === 'X') {
      if (thirteen.innerHTML === 'X') {
        firstwinnerx = 'true'; totalwinnerx();
      }
    } else if (fourteen.innerHTML === 'X') {
      if (seventeen.innerHTML === 'X') {
        firstwinnerx = 'true'; totalwinnerx();
      }
      if (fifteen.innerHTML === 'X') {
        if (nineteen.innerHTML === 'X') {
          firstwinnerx = 'true'
        }
      }

    }
  }
  if (twelve.innerHTML === 'X') {
    if (fifteen.innerHTML === 'X') {
      if (eighteen.innerHTML === 'X') {
        firstwinnerx = 'true'; totalwinnerx();
      }
    }
  }
  if (thirteen.innerHTML === 'X') {
    if (sixteen.innerHTML === 'X') {
      if (nineteen.innerHTML === 'X') {
        firstwinnerx = 'true'; totalwinnerx();
      }
    } else if (fifteen.innerHTML === 'X') {
      if (seventeen.innerHTML === 'X') {
        firstwinnerx = 'true'; totalwinnerx();
      }
    }
  }
  if (fourteen.innerHTML === 'X') {
    if (fifteen.innerHTML === 'X') {
      if (sixteen.innerHTML === 'X') {
        firstwinnerx = 'true'
      }
    }
  }
  if (seventeen.innerHTML === 'X') {
    if (eighteen.innerHTML === 'X') {
      if (nineteen.innerHTML === 'X') {
        firstwinnerx = 'true'
      }
    }
  }
  if (eleven.innerHTML === 'O') {
    if (twelve.innerHTML === 'O') {
      if (thirteen.innerHTML === 'O') {
        firstwinnero = 'true'; totalwinnero();
      }
    } else if (fourteen.innerHTML === 'O') {
      if (seventeen.innerHTML === 'O') {
        firstwinnero = 'true'; totalwinnero();
      }
      if (fifteen.innerHTML === 'O') {
        if (nineteen.innerHTML === 'O') {
          firstwinnero = 'true'
        }
      }

    }
  } 
  if (twelve.innerHTML === 'O') {
    if (fifteen.innerHTML === 'O') {
      if (eighteen.innerHTML === 'O') {
        firstwinnero = 'true'; totalwinnero();
      }
    }
  } 
  if (thirteen.innerHTML === 'O') {
    if (sixteen.innerHTML === 'O') {
      if (nineteen.innerHTML === 'O') {
        firstwinnero = 'true'; totalwinnero();
      }
    } else if (fifteen.innerHTML === 'O') {
      if (seventeen.innerHTML === 'O') {
        firstwinnero = 'true'; totalwinnero();
      }
    }
  } 
  if (fourteen.innerHTML === 'O') {
    if (fifteen.innerHTML === 'O') {
      if (sixteen.innerHTML === 'O') {
        firstwinnero = 'true'
      }
    }
  } 
  if (seventeen.innerHTML === 'O') {
    if (eighteen.innerHTML === 'O') {
      if (nineteen.innerHTML === 'O') {
        firstwinnero = 'true'
      }
    }
  } else if (eleven.innerHTML !== '') {
    if (twelve.innerHTML !== '') {
      if (thirteen.innerHTML !== '') {
        if (fourteen.innerHTML !== '') {
          if (fifteen.innerHTML !== '') {
            if (sixteen.innerHTML !== '') {
              if (seventeen.innerHTML !== '') {
                if (eighteen.innerHTML !== '') {
                  if (nineteen.innerHTML !== '')
                    if (firstwinnerx !== 'true') {
                      if (firstwinnero !== 'true')
                        firstwinnerx = 'tie'
                      firstwinnero = 'tie'
                    }
                }
              }
            }
          }
        }
      }
    }
  }
}

function boxtwowinner() {
  if (twentyone.innerHTML === 'X') {
    if (twentytwo.innerHTML === 'X') {
      if (twentythree.innerHTML === 'X') {
        secondwinnerx = 'true'; totalwinnerx();
      }
    } else if (twentyfour.innerHTML === 'X') {
      if (twentyseven.innerHTML === 'X') {
        secondwinnerx = 'true'; totalwinnerx();
      }
      if (twentyfive.innerHTML === 'X') {
        if (twentynine.innerHTML === 'X') {
          secondwinnerx = 'true'
        }
      }

    }
  } else if (twentytwo.innerHTML === 'X') {
    if (twentyfive.innerHTML === 'X') {
      if (twentyeight.innerHTML === 'X') {
        secondwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (twentythree.innerHTML === 'X') {
    if (twentysix.innerHTML === 'X') {
      if (twentynine.innerHTML === 'X') {
        secondwinnerx = 'true'; totalwinnerx();
      }
    } else if (twentyfive.innerHTML === 'X') {
      if (twentyseven.innerHTML === 'X') {
        secondwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (twentyfour.innerHTML === 'X') {
    if (twentyfive.innerHTML === 'X') {
      if (twentysix.innerHTML === 'X') {
        secondwinnerx = 'true'
      }
    }
  } else if (twentyseven.innerHTML === 'X') {
    if (twentyeight.innerHTML === 'X') {
      if (twentynine.innerHTML === 'X') {
        secondwinnerx = 'true'
      }
    }
  } else if (twentyone.innerHTML === 'O') {
    if (twentytwo.innerHTML === 'O') {
      if (twentythree.innerHTML === 'O') {
        secondwinnero = 'true'; totalwinnero();
      }
    } else if (twentyfour.innerHTML === 'O') {
      if (twentyseven.innerHTML === 'O') {
        secondwinnero = 'true'; totalwinnero();
      }
      if (twentyfive.innerHTML === 'O') {
        if (twentynine.innerHTML === 'O') {
          secondwinnero = 'true'
        }
      }

    }
  } else if (twentytwo.innerHTML === 'O') {
    if (twentyfive.innerHTML === 'O') {
      if (twentyeight.innerHTML === 'O') {
        secondwinnero = 'true'; totalwinnero();
      }
    }
  } else if (twentythree.innerHTML === 'O') {
    if (twentysix.innerHTML === 'O') {
      if (twentynine.innerHTML === 'O') {
        secondwinnero = 'true'; totalwinnero();
      }
    } else if (twentyfive.innerHTML === 'O') {
      if (twentyseven.innerHTML === 'O') {
        secondwinnero = 'true'; totalwinnero();
      }
    }
  } else if (twentyfour.innerHTML === 'O') {
    if (twentyfive.innerHTML === 'O') {
      if (twentysix.innerHTML === 'O') {
        secondwinnero = 'true'
      }
    }
  } else if (twentyseven.innerHTML === 'O') {
    if (twentyeight.innerHTML === 'O') {
      if (twentynine.innerHTML === 'O') {
        secondwinnero = 'true'
      }
    }
  } else if (secondwinnerx !== 'true') {
    if (secondwinnero !== 'true') {
      if (twentyone.innerHTML !== '') {
        if (twentytwo.innerHTML !== '') {
          if (twentythree.innerHTML !== '') {
            if (twentyfour.innerHTML !== '') {
              if (twentyfive.innerHTML !== '') {
                if (twentysix.innerHTML !== '') {
                  if (twentyseven.innerHTML !== '') {
                    if (twentyeight.innerHTML !== '') {
                      if (twentynine.innerHTML !== '') {
                        secondwinnerx = 'tie'
                        secondwinnero = 'tie'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function boxthreewinner() {
  if (thirtyone.innerHTML === 'X') {
    if (thirtytwo.innerHTML === 'X') {
      if (thirtythree.innerHTML === 'X') {
        thirdwinnerx = 'true'; totalwinnerx();
      }
    } else if (thirtyfour.innerHTML === 'X') {
      if (thirtyseven.innerHTML === 'X') {
        thirdwinnerx = 'true'; totalwinnerx();
      }
      if (thirtyfive.innerHTML === 'X') {
        if (thirtynine.innerHTML === 'X') {
          thirdwinnerx = 'true'
        }
      }

    }
  } else if (thirtytwo.innerHTML === 'X') {
    if (thirtyfive.innerHTML === 'X') {
      if (thirtyeight.innerHTML === 'X') {
        thirdwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (thirtythree.innerHTML === 'X') {
    if (thirtysix.innerHTML === 'X') {
      if (thirtynine.innerHTML === 'X') {
        thirdwinnerx = 'true'; totalwinnerx();
      }
    } else if (thirtyfive.innerHTML === 'X') {
      if (thirtyseven.innerHTML === 'X') {
        thirdwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (thirtyfour.innerHTML === 'X') {
    if (thirtyfive.innerHTML === 'X') {
      if (thirtysix.innerHTML === 'X') {
        thirdwinnerx = 'true'
      }
    }
  } else if (thirtyseven.innerHTML === 'X') {
    if (thirtyeight.innerHTML === 'X') {
      if (thirtynine.innerHTML === 'X') {
        thirdwinnerx = 'true'
      }
    }
  } else if (thirtyone.innerHTML === 'O') {
    if (thirtytwo.innerHTML === 'O') {
      if (thirtythree.innerHTML === 'O') {
        thirdwinnero = 'true'; totalwinnero();
      }
    } else if (thirtyfour.innerHTML === 'O') {
      if (thirtyseven.innerHTML === 'O') {
        thirdwinnero = 'true'; totalwinnero();
      }
      if (thirtyfive.innerHTML === 'O') {
        if (thirtynine.innerHTML === 'O') {
          thirdwinnero = 'true'
        }
      }

    }
  } else if (thirtytwo.innerHTML === 'O') {
    if (thirtyfive.innerHTML === 'O') {
      if (thirtyeight.innerHTML === 'O') {
        thirdwinnero = 'true'; totalwinnero();
      }
    }
  } else if (thirtythree.innerHTML === 'O') {
    if (thirtysix.innerHTML === 'O') {
      if (thirtynine.innerHTML === 'O') {
        thirdwinnero = 'true'; totalwinnero();
      }
    } else if (thirtyfive.innerHTML === 'O') {
      if (thirtyseven.innerHTML === 'O') {
        thirdwinnero = 'true'; totalwinnero();
      }
    }
  } else if (thirtyfour.innerHTML === 'O') {
    if (thirtyfive.innerHTML === 'O') {
      if (thirtysix.innerHTML === 'O') {
        thirdwinnero = 'true'
      }
    }
  } else if (thirtyseven.innerHTML === 'O') {
    if (thirtyeight.innerHTML === 'O') {
      if (thirtynine.innerHTML === 'O') {
        thirdwinnero = 'true'
      }
    }
  } else if (secondwinnerx !== 'true') {
    if (secondwinnero !== 'true') {
      if (thirtyone.innerHTML !== '') {
        if (thirtytwo.innerHTML !== '') {
          if (thirtythree.innerHTML !== '') {
            if (thirtyfour.innerHTML !== '') {
              if (thirtyfive.innerHTML !== '') {
                if (thirtysix.innerHTML !== '') {
                  if (thirtyseven.innerHTML !== '') {
                    if (thirtyeight.innerHTML !== '') {
                      if (thirtynine.innerHTML !== '') {
                        secondwinnerx = 'tie'
                        secondwinnero = 'tie'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}


function boxfourwinner() {
  if (fourtyone.innerHTML === 'X') {
    if (fourtytwo.innerHTML === 'X') {
      if (fourtythree.innerHTML === 'X') {
        fourthwinnerx = 'true'; totalwinnerx();
      }
    } else if (fourtyfour.innerHTML === 'X') {
      if (fourtyseven.innerHTML === 'X') {
        fourthwinnerx = 'true'; totalwinnerx();
      }
      if (fourtyfive.innerHTML === 'X') {
        if (fourtynine.innerHTML === 'X') {
          fourthwinnerx = 'true'
        }
      }

    }
  } else if (fourtytwo.innerHTML === 'X') {
    if (fourtyfive.innerHTML === 'X') {
      if (fourtyeight.innerHTML === 'X') {
        fourthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (fourtythree.innerHTML === 'X') {
    if (fourtysix.innerHTML === 'X') {
      if (fourtynine.innerHTML === 'X') {
        fourthwinnerx = 'true'; totalwinnerx();
      }
    } else if (fourtyfive.innerHTML === 'X') {
      if (fourtyseven.innerHTML === 'X') {
        fourthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (fourtyfour.innerHTML === 'X') {
    if (fourtyfive.innerHTML === 'X') {
      if (fourtysix.innerHTML === 'X') {
        fourthwinnerx = 'true'
      }
    }
  } else if (fourtyseven.innerHTML === 'X') {
    if (fourtyeight.innerHTML === 'X') {
      if (fourtynine.innerHTML === 'X') {
        fourthwinnerx = 'true'
      }
    }
  } else if (fourtyone.innerHTML === 'O') {
    if (fourtytwo.innerHTML === 'O') {
      if (fourtythree.innerHTML === 'O') {
        fourthwinnero = 'true'; totalwinnero();
      }
    } else if (fourtyfour.innerHTML === 'O') {
      if (fourtyseven.innerHTML === 'O') {
        fourthwinnero = 'true'; totalwinnero();
      }
      if (fourtyfive.innerHTML === 'O') {
        if (fourtynine.innerHTML === 'O') {
          fourthwinnero = 'true'
        }
      }

    }
  } else if (fourtytwo.innerHTML === 'O') {
    if (fourtyfive.innerHTML === 'O') {
      if (fourtyeight.innerHTML === 'O') {
        fourthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (fourtythree.innerHTML === 'O') {
    if (fourtysix.innerHTML === 'O') {
      if (fourtynine.innerHTML === 'O') {
        fourthwinnero = 'true'; totalwinnero();
      }
    } else if (fourtyfive.innerHTML === 'O') {
      if (fourtyseven.innerHTML === 'O') {
        fourthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (fourtyfour.innerHTML === 'O') {
    if (fourtyfive.innerHTML === 'O') {
      if (fourtysix.innerHTML === 'O') {
        fourthwinnero = 'true'
      }
    }
  } else if (fourtyseven.innerHTML === 'O') {
    if (fourtyeight.innerHTML === 'O') {
      if (fourtynine.innerHTML === 'O') {
        fourthwinnero = 'true'
      }
    }
  } else if (secondwinnerx !== 'true') {
    if (secondwinnero !== 'true') {
      if (fourtyone.innerHTML !== '') {
        if (fourtytwo.innerHTML !== '') {
          if (fourtythree.innerHTML !== '') {
            if (fourtyfour.innerHTML !== '') {
              if (fourtyfive.innerHTML !== '') {
                if (fourtysix.innerHTML !== '') {
                  if (fourtyseven.innerHTML !== '') {
                    if (fourtyeight.innerHTML !== '') {
                      if (fourtynine.innerHTML !== '') {
                        secondwinnerx = 'tie'
                        secondwinnero = 'tie'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function boxfivewinner() {
  if (fiftyone.innerHTML === 'X') {
    if (fiftytwo.innerHTML === 'X') {
      if (fiftythree.innerHTML === 'X') {
        fifthwinnerx = 'true'; totalwinnerx();
      }
    } else if (fiftyfour.innerHTML === 'X') {
      if (fiftyseven.innerHTML === 'X') {
        fifthwinnerx = 'true'; totalwinnerx();
      }
      if (fiftyfive.innerHTML === 'X') {
        if (fiftynine.innerHTML === 'X') {
          fifthwinnerx = 'true'; totalwinnerx()
        }
      }

    }
  } else if (fiftytwo.innerHTML === 'X') {
    if (fiftyfive.innerHTML === 'X') {
      if (fiftyeight.innerHTML === 'X') {
        fifthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (fiftythree.innerHTML === 'X') {
    if (fiftysix.innerHTML === 'X') {
      if (fiftynine.innerHTML === 'X') {
        fifthwinnerx = 'true'; totalwinnerx();
      }
    } else if (fiftyfive.innerHTML === 'X') {
      if (fiftyseven.innerHTML === 'X') {
        fifthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (fiftyfour.innerHTML === 'X') {
    if (fiftyfive.innerHTML === 'X') {
      if (fiftysix.innerHTML === 'X') {
        fifthwinnerx = 'true'
      }
    }
  } else if (fiftyseven.innerHTML === 'X') {
    if (fiftyeight.innerHTML === 'X') {
      if (fiftynine.innerHTML === 'X') {
        fifthwinnerx = 'true'
      }
    }
  } else if (fiftyone.innerHTML === 'O') {
    if (fiftytwo.innerHTML === 'O') {
      if (fiftythree.innerHTML === 'O') {
        fifthwinnero = 'true'; totalwinnero();
      }
    } else if (fiftyfour.innerHTML === 'O') {
      if (fiftyseven.innerHTML === 'O') {
        fifthwinnero = 'true'; totalwinnero();
      }
      if (fiftyfive.innerHTML === 'O') {
        if (fiftynine.innerHTML === 'O') {
          fifthwinnero = 'true'
        }
      }

    }
  } else if (fiftytwo.innerHTML === 'O') {
    if (fiftyfive.innerHTML === 'O') {
      if (fiftyeight.innerHTML === 'O') {
        fifthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (fiftythree.innerHTML === 'O') {
    if (fiftysix.innerHTML === 'O') {
      if (fiftynine.innerHTML === 'O') {
        fifthwinnero = 'true'; totalwinnero();
      }
    } else if (fiftyfive.innerHTML === 'O') {
      if (fiftyseven.innerHTML === 'O') {
        fifthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (fiftyfour.innerHTML === 'O') {
    if (fiftyfive.innerHTML === 'O') {
      if (fiftysix.innerHTML === 'O') {
        fifthwinnero = 'true'
      }
    }
  } else if (fiftyseven.innerHTML === 'O') {
    if (fiftyeight.innerHTML === 'O') {
      if (fiftynine.innerHTML === 'O') {
        fifthwinnero = 'true'
      }
    }
  } else if (secondwinnerx !== 'true') {
    if (secondwinnero !== 'true') {
      if (fiftyone.innerHTML !== '') {
        if (fiftytwo.innerHTML !== '') {
          if (fiftythree.innerHTML !== '') {
            if (fiftyfour.innerHTML !== '') {
              if (fiftyfive.innerHTML !== '') {
                if (fiftysix.innerHTML !== '') {
                  if (fiftyseven.innerHTML !== '') {
                    if (fiftyeight.innerHTML !== '') {
                      if (fiftynine.innerHTML !== '') {
                        secondwinnerx = 'tie'
                        secondwinnero = 'tie'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function boxsixwinner() {
  if (sixtyone.innerHTML === 'X') {
    if (sixtytwo.innerHTML === 'X') {
      if (sixtythree.innerHTML === 'X') {
        sixthwinnerx = 'true'; totalwinnerx();
      }
    } else if (sixtyfour.innerHTML === 'X') {
      if (sixtyseven.innerHTML === 'X') {
        sixthwinnerx = 'true'; totalwinnerx();
      }
      if (sixtyfive.innerHTML === 'X') {
        if (sixtynine.innerHTML === 'X') {
          sixthwinnerx = 'true'
        }
      }

    }
  } else if (sixtytwo.innerHTML === 'X') {
    if (sixtyfive.innerHTML === 'X') {
      if (sixtyeight.innerHTML === 'X') {
        sixthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (sixtythree.innerHTML === 'X') {
    if (sixtysix.innerHTML === 'X') {
      if (sixtynine.innerHTML === 'X') {
        sixthwinnerx = 'true'; totalwinnerx();
      }
    } else if (sixtyfive.innerHTML === 'X') {
      if (sixtyseven.innerHTML === 'X') {
        sixthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (sixtyfour.innerHTML === 'X') {
    if (sixtyfive.innerHTML === 'X') {
      if (sixtysix.innerHTML === 'X') {
        sixthwinnerx = 'true'
      }
    }
  } else if (sixtyseven.innerHTML === 'X') {
    if (sixtyeight.innerHTML === 'X') {
      if (sixtynine.innerHTML === 'X') {
        sixthwinnerx = 'true'
      }
    }
  } else if (sixtyone.innerHTML === 'O') {
    if (sixtytwo.innerHTML === 'O') {
      if (sixtythree.innerHTML === 'O') {
        sixthwinnero = 'true'; totalwinnero();
      }
    } else if (sixtyfour.innerHTML === 'O') {
      if (sixtyseven.innerHTML === 'O') {
        sixthwinnero = 'true'; totalwinnero();
      }
      if (sixtyfive.innerHTML === 'O') {
        if (sixtynine.innerHTML === 'O') {
          sixthwinnero = 'true'
        }
      }

    }
  } else if (sixtytwo.innerHTML === 'O') {
    if (sixtyfive.innerHTML === 'O') {
      if (sixtyeight.innerHTML === 'O') {
        sixthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (sixtythree.innerHTML === 'O') {
    if (sixtysix.innerHTML === 'O') {
      if (sixtynine.innerHTML === 'O') {
        sixthwinnero = 'true'; totalwinnero();
      }
    } else if (sixtyfive.innerHTML === 'O') {
      if (sixtyseven.innerHTML === 'O') {
        sixthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (sixtyfour.innerHTML === 'O') {
    if (sixtyfive.innerHTML === 'O') {
      if (sixtysix.innerHTML === 'O') {
        sixthwinnero = 'true'
      }
    }
  } else if (sixtyseven.innerHTML === 'O') {
    if (sixtyeight.innerHTML === 'O') {
      if (sixtynine.innerHTML === 'O') {
        sixthwinnero = 'true'
      }
    }
  } else if (secondwinnerx !== 'true') {
    if (secondwinnero !== 'true') {
      if (sixtyone.innerHTML !== '') {
        if (sixtytwo.innerHTML !== '') {
          if (sixtythree.innerHTML !== '') {
            if (sixtyfour.innerHTML !== '') {
              if (sixtyfive.innerHTML !== '') {
                if (sixtysix.innerHTML !== '') {
                  if (sixtyseven.innerHTML !== '') {
                    if (sixtyeight.innerHTML !== '') {
                      if (sixtynine.innerHTML !== '') {
                        secondwinnerx = 'tie'
                        secondwinnero = 'tie'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function boxsevenwinner() {
  if (seventyone.innerHTML === 'X') {
    if (seventytwo.innerHTML === 'X') {
      if (seventythree.innerHTML === 'X') {
        seventhwinnerx = 'true'; totalwinnerx();
      }
    } else if (seventyfour.innerHTML === 'X') {
      if (seventyseven.innerHTML === 'X') {
        seventhwinnerx = 'true'; totalwinnerx();
      }
      if (seventyfive.innerHTML === 'X') {
        if (seventynine.innerHTML === 'X') {
          seventhwinnerx = 'true'
        }
      }

    }
  } else if (seventytwo.innerHTML === 'X') {
    if (seventyfive.innerHTML === 'X') {
      if (seventyeight.innerHTML === 'X') {
        seventhwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (seventythree.innerHTML === 'X') {
    if (seventysix.innerHTML === 'X') {
      if (seventynine.innerHTML === 'X') {
        seventhwinnerx = 'true'; totalwinnerx();
      }
    } else if (seventyfive.innerHTML === 'X') {
      if (seventyseven.innerHTML === 'X') {
        seventhwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (seventyfour.innerHTML === 'X') {
    if (seventyfive.innerHTML === 'X') {
      if (seventysix.innerHTML === 'X') {
        seventhwinnerx = 'true'
      }
    }
  } else if (seventyseven.innerHTML === 'X') {
    if (seventyeight.innerHTML === 'X') {
      if (seventynine.innerHTML === 'X') {
        seventhwinnerx = 'true'
      }
    }
  } else if (seventyone.innerHTML === 'O') {
    if (seventytwo.innerHTML === 'O') {
      if (seventythree.innerHTML === 'O') {
        seventhwinnero = 'true'; totalwinnero();
      }
    } else if (seventyfour.innerHTML === 'O') {
      if (seventyseven.innerHTML === 'O') {
        seventhwinnero = 'true'; totalwinnero();
      }
      if (seventyfive.innerHTML === 'O') {
        if (seventynine.innerHTML === 'O') {
          seventhwinnero = 'true'
        }
      }

    }
  } else if (seventytwo.innerHTML === 'O') {
    if (seventyfive.innerHTML === 'O') {
      if (seventyeight.innerHTML === 'O') {
        seventhwinnero = 'true'; totalwinnero();
      }
    }
  } else if (seventythree.innerHTML === 'O') {
    if (seventysix.innerHTML === 'O') {
      if (seventynine.innerHTML === 'O') {
        seventhwinnero = 'true'; totalwinnero();
      }
    } else if (seventyfive.innerHTML === 'O') {
      if (seventyseven.innerHTML === 'O') {
        seventhwinnero = 'true'; totalwinnero();
      }
    }
  } else if (seventyfour.innerHTML === 'O') {
    if (seventyfive.innerHTML === 'O') {
      if (seventysix.innerHTML === 'O') {
        seventhwinnero = 'true'
      }
    }
  } else if (seventyseven.innerHTML === 'O') {
    if (seventyeight.innerHTML === 'O') {
      if (seventynine.innerHTML === 'O') {
        seventhwinnero = 'true'
      }
    }
  } else if (secondwinnerx !== 'true') {
    if (secondwinnero !== 'true') {
      if (seventyone.innerHTML !== '') {
        if (seventytwo.innerHTML !== '') {
          if (seventythree.innerHTML !== '') {
            if (seventyfour.innerHTML !== '') {
              if (seventyfive.innerHTML !== '') {
                if (seventysix.innerHTML !== '') {
                  if (seventyseven.innerHTML !== '') {
                    if (seventyeight.innerHTML !== '') {
                      if (seventynine.innerHTML !== '') {
                        secondwinnerx = 'tie'
                        secondwinnero = 'tie'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function boxeightwinner() {
  if (eightyone.innerHTML === 'X') {
    if (eightytwo.innerHTML === 'X') {
      if (eightythree.innerHTML === 'X') {
        eighthwinnerx = 'true'; totalwinnerx();
      }
    } else if (eightyfour.innerHTML === 'X') {
      if (eightyseven.innerHTML === 'X') {
        eighthwinnerx = 'true'; totalwinnerx();
      }
      if (eightyfive.innerHTML === 'X') {
        if (eightynine.innerHTML === 'X') {
          eighthwinnerx = 'true'
        }
      }

    }
  } else if (eightytwo.innerHTML === 'X') {
    if (eightyfive.innerHTML === 'X') {
      if (eightyeight.innerHTML === 'X') {
        eighthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (eightythree.innerHTML === 'X') {
    if (eightysix.innerHTML === 'X') {
      if (eightynine.innerHTML === 'X') {
        eighthwinnerx = 'true'; totalwinnerx();
      }
    } else if (eightyfive.innerHTML === 'X') {
      if (eightyseven.innerHTML === 'X') {
        eighthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (eightyfour.innerHTML === 'X') {
    if (eightyfive.innerHTML === 'X') {
      if (eightysix.innerHTML === 'X') {
        eighthwinnerx = 'true'
      }
    }
  } else if (eightyseven.innerHTML === 'X') {
    if (eightyeight.innerHTML === 'X') {
      if (eightynine.innerHTML === 'X') {
        eighthwinnerx = 'true'
      }
    }
  } else if (eightyone.innerHTML === 'O') {
    if (eightytwo.innerHTML === 'O') {
      if (eightythree.innerHTML === 'O') {
        eighthwinnero = 'true'; totalwinnero();
      }
    } else if (eightyfour.innerHTML === 'O') {
      if (eightyseven.innerHTML === 'O') {
        eighthwinnero = 'true'; totalwinnero();
      }
      if (eightyfive.innerHTML === 'O') {
        if (eightynine.innerHTML === 'O') {
          eighthwinnero = 'true'
        }
      }

    }
  } else if (eightytwo.innerHTML === 'O') {
    if (eightyfive.innerHTML === 'O') {
      if (eightyeight.innerHTML === 'O') {
        eighthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (eightythree.innerHTML === 'O') {
    if (eightysix.innerHTML === 'O') {
      if (eightynine.innerHTML === 'O') {
        eighthwinnero = 'true'; totalwinnero();
      }
    } else if (eightyfive.innerHTML === 'O') {
      if (eightyseven.innerHTML === 'O') {
        eighthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (eightyfour.innerHTML === 'O') {
    if (eightyfive.innerHTML === 'O') {
      if (eightysix.innerHTML === 'O') {
        eighthwinnero = 'true'
      }
    }
  } else if (eightyseven.innerHTML === 'O') {
    if (eightyeight.innerHTML === 'O') {
      if (eightynine.innerHTML === 'O') {
        eighthwinnero = 'true'
      }
    }
  } else if (secondwinnerx !== 'true') {
    if (secondwinnero !== 'true') {
      if (eightyone.innerHTML !== '') {
        if (eightytwo.innerHTML !== '') {
          if (eightythree.innerHTML !== '') {
            if (eightyfour.innerHTML !== '') {
              if (eightyfive.innerHTML !== '') {
                if (eightysix.innerHTML !== '') {
                  if (eightyseven.innerHTML !== '') {
                    if (eightyeight.innerHTML !== '') {
                      if (eightynine.innerHTML !== '') {
                        secondwinnerx = 'tie'
                        secondwinnero = 'tie'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function boxninewinner() {
  if (ninetyone.innerHTML === 'X') {
    if (ninetytwo.innerHTML === 'X') {
      if (ninetythree.innerHTML === 'X') {
        ninthwinnerx = 'true'; totalwinnerx();
      }
    } else if (ninetyfour.innerHTML === 'X') {
      if (ninetyseven.innerHTML === 'X') {
        ninthwinnerx = 'true'; totalwinnerx();
      }
      if (ninetyfive.innerHTML === 'X') {
        if (ninetynine.innerHTML === 'X') {
          ninthwinnerx = 'true'; totalwinnerx();
        }
      }

    }
  } else if (ninetytwo.innerHTML === 'X') {
    if (ninetyfive.innerHTML === 'X') {
      if (ninetyeight.innerHTML === 'X') {
        ninthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (ninetythree.innerHTML === 'X') {
    if (ninetysix.innerHTML === 'X') {
      if (ninetynine.innerHTML === 'X') {
        ninthwinnerx = 'true'; totalwinnerx();
      }
    } else if (ninetyfive.innerHTML === 'X') {
      if (ninetyseven.innerHTML === 'X') {
        ninthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (ninetyfour.innerHTML === 'X') {
    if (ninetyfive.innerHTML === 'X') {
      if (ninetysix.innerHTML === 'X') {
        ninthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (ninetyseven.innerHTML === 'X') {
    if (ninetyeight.innerHTML === 'X') {
      if (ninetynine.innerHTML === 'X') {
        ninthwinnerx = 'true'; totalwinnerx();
      }
    }
  } else if (ninetyone.innerHTML === 'O') {
    if (ninetytwo.innerHTML === 'O') {
      if (ninetythree.innerHTML === 'O') {
        ninthwinnero = 'true'; totalwinnero();
      }
    } else if (ninetyfour.innerHTML === 'O') {
      if (ninetyseven.innerHTML === 'O') {
        ninthwinnero = 'true'; totalwinnero();
      }
      if (ninetyfive.innerHTML === 'O') {
        if (ninetynine.innerHTML === 'O') {
          ninthwinnero = 'true'; totalwinnero();
        }
      }

    }
  } else if (ninetytwo.innerHTML === 'O') {
    if (ninetyfive.innerHTML === 'O') {
      if (ninetyeight.innerHTML === 'O') {
        ninthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (ninetythree.innerHTML === 'O') {
    if (ninetysix.innerHTML === 'O') {
      if (ninetynine.innerHTML === 'O') {
        ninthwinnero = 'true'; totalwinnero();
      }
    } else if (ninetyfive.innerHTML === 'O') {
      if (ninetyseven.innerHTML === 'O') {
        ninthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (ninetyfour.innerHTML === 'O') {
    if (ninetyfive.innerHTML === 'O') {
      if (ninetysix.innerHTML === 'O') {
        ninthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (ninetyseven.innerHTML === 'O') {
    if (ninetyeight.innerHTML === 'O') {
      if (ninetynine.innerHTML === 'O') {
        ninthwinnero = 'true'; totalwinnero();
      }
    }
  } else if (secondwinnerx !== 'true') {
    if (secondwinnero !== 'true') {
      if (ninetyone.innerHTML !== '') {
        if (ninetytwo.innerHTML !== '') {
          if (ninetythree.innerHTML !== '') {
            if (ninetyfour.innerHTML !== '') {
              if (ninetyfive.innerHTML !== '') {
                if (ninetysix.innerHTML !== '') {
                  if (ninetyseven.innerHTML !== '') {
                    if (ninetyeight.innerHTML !== '') {
                      if (ninetynine.innerHTML !== '') {
                        secondwinnerx = 'tie'
                        secondwinnero = 'tie'
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

function totalwinnerx() {
  if (firstwinnerx === 'true') {
    if (secondwinnerx === 'true') {
      if (thirdwinnerx === 'true') {
        winner = 'X'; hoorayyouwin();
      }
    } else if (fourthwinnerx === 'true') {
      if (seventhwinnerx === 'true') {
        winner = 'X'; hoorayyouwin();
      }
    } else if (fifthwinnerx === 'true') {
      if (ninthwinnerx === 'true') {
        winner = 'X'; hoorayyouwin();
      }
    }
  } else if (secondwinnerx === 'true') {
    if (fifthwinnerx === 'true') {
      if (eighthwinnerx === 'true') {
        winner = 'X'; hoorayyouwin();
      }
    }
  } else if (thirdwinnerx === 'true') {
    if (sixthwinnerx === 'true') {
      if (ninthwinnerx === 'true') {
        winner = 'X'; hoorayyouwin();
      }
    } else if (fifthwinnerx === 'true') {
      if (seventhwinnerx === 'true') {
        winner = 'X'; hoorayyouwin();
      }
    }
  } else if (fourthwinnerx === 'true') {
    if (fifthwinnerx === 'true') {
      if (sixthwinnerx === 'true') {
        winner = 'X'; hoorayyouwin();
      }
    }
  } else if (seventhwinnerx === 'true') {
    if (eighthwinnerx === 'true') {
      if (seventhwinnerx === 'true') {
        winner = 'X'; hoorayyouwin();
      }
    }
  }
}

function totalwinnero() {
  if (firstwinnero === 'true') {
    if (secondwinnero === 'true') {
      if (thirdwinnero === 'true') {
        winner = 'O'; hoorayyouwin();
      }
    } else if (fourthwinnero === 'true') {
      if (seventhwinnero === 'true') {
        winner = 'O'; hoorayyouwin();
      }
    } else if (fifthwinnero === 'true') {
      if (ninthwinnero === 'true') {
        winner = 'O'; hoorayyouwin();
      }
    }
  } else if (secondwinnero === 'true') {
    if (fifthwinnero === 'true') {
      if (eighthwinnero === 'true') {
        winner = 'O'; hoorayyouwin();
      }
    }
  } else if (thirdwinnero === 'true') {
    if (sixthwinnero === 'true') {
      if (ninthwinnero === 'true') {
        winner = 'O'; hoorayyouwin();
      }
    } else if (fifthwinnero === 'true') {
      if (seventhwinnero === 'true') {
        winner = 'O'; hoorayyouwin();
      }
    }
  } else if (fourthwinnero === 'true') {
    if (fifthwinnero === 'true') {
      if (sixthwinnero === 'true') {
        winner = 'O'; hoorayyouwin();
      }
    }
  } else if (seventhwinnero === 'true') {
    if (eighthwinnero === 'true') {
      if (seventhwinnero === 'true') {
        winner = 'O'; hoorayyouwin();
      }
    }
  }
}

function hoorayyouwin() {
  if (winner === 'O') {
    winbox.innerHTML = 'Hooray!!! O wins!!! YAY!!!!!'
  }
  if (winner === 'X') {
    winbox.innerHTML = 'Hooray!!! X wins!!! YAY!!!!!'
  }
}