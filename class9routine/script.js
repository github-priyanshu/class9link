
      var log = console.log;
      /* subject declaration */
      var hindi_2 = "https://us05web.zoom.us/j/3974304499?pwd=ekJkMEtwNmtFQUlLRzYxcFp2NlZVZz09",
         geography = "https://us05web.zoom.us/j/3974304499?pwd=ekJkMEtwNmtFQUlLRzYxcFp2NlZVZz09",
         civics = "https://us05web.zoom.us/j/86862660246?pwd=Z2phMDBGM3B0aHoxdm5iNmtyVG5Zdz09",
         english_2 = "https://us05web.zoom.us/j/82963143855?pwd=ZEtZa2tRTFQ5eCs5ck5BZG0wd0Nodz09",
         biology = "https://us05web.zoom.us/j/88142967614?pwd=dk5UMFVVN0ZrMkxMWFMvczVKQ2JNQT09",
         computer = "https://us05web.zoom.us/j/88056725125?pwd=ZC9vOEVGVlFTRmVHZFVWcDdUbk9xUT09",
         physics = "https://us05web.zoom.us/j/81505598877?pwd=MlVCRVV0eDFYVExtWGtVbWpYSjludz09",
         english_1 = "https://us05web.zoom.us/j/87395954145?pwd=N010YTFWTE5GZzBCL04xOFRrR0wxQT09",
         math = "https://us05web.zoom.us/j/89669306602?pwd=WWtHTkI1TWdzYlJuMW44NGkvZHBKQT09",
         hindi_1 = 'https://us04web.zoom.us/j/78913483995?pwd=bHdjSnk2dkZ5YjBhcTYzUENES04vdz09',
         chemistry = 'https://us05web.zoom.us/j/88142967614?pwd=dk5UMFVVN0ZrMkxMWFMvczVKQ2JNQT09';



         var routine = {
         monday: {
            english_1, civics, hindi_2
         },
         tuesday: {
            physics, computer, chemistry, hindi_1
         },
         wednesday: {
            geography, english_2, biology, math
         },
         thursday: {
            english_1, civics, hindi_2
         },
         friday: {
            physics, computer, chemistry, hindi_1
         },
         saturday: {
            geography, english_2, biology, math
         },
      }
      var daysAry = 'sunday,monday,tuesday,wednesday,thursday,friday,saturday';
      daysAry = daysAry.split(',');
      var selBox = op('#chooseDay'),
         subjectPan = op('.data');

      var dateObj = new Date(),
         day = daysAry[dateObj.getDay()];

      makeDay();
      function makeDay() {
         for (val of daysAry) {
            var elem = `<option ${(val == day) ? 'selected' : ''}>${val}</option>`;
            selBox.insertAdjacentHTML('beforeend', elem)
         }
         selBox.insertAdjacentHTML('beforeend', '<option>routine</option>')
      }
      makeRoutine();
      function makeRoutine() {
         op('#dataHead').innerHTML = "";

         var dayX = selBox.value;
         subjectPan.innerHTML = '';
         if (!op('#down')) {
            subjectPan.insertAdjacentHTML('afterend', "<p class='hint button' id='down'>Download as App.</p>");
         }
         try { op('#hint').remove() } catch { };
         try { subjectPan.classList.remove('table'); } catch { };
         if (routine[dayX]) {
            makeSubject(dayX);
            subjectPan.insertAdjacentHTML('afterend', "<p class='hint' id='hint'>If any link is invalid then you can contact <a href='mailto:priyanshu90069@gmail.com' target='_blank'>Priyanshu</a>.</p>")
         } else if (dayX == "sunday") {
            op('#dataHead').innerHTML = "No meetings for Today.";
            subjectPan.innerHTML = "<h1>Relaxing Sunday!</h1>"
         } else if (dayX == "routine") {
            showAll();
         }
      }
      function showAll() {
         var elem = `<table cellpadding="10" cellspacing='0' border="black"> <tr><th></th><th>First</th><th>Second</th><th>Third</th><th>Fourth</th></tr>`;
         for (val in routine) {
            elem += `<tr><th>${val}</th>`;
            for (sal in routine[val]) {
               elem += `<td>${sal.replace('_', ' ')}</td>`
            }
            elem += `</tr>`;
         }
         elem += `</table>`;
         subjectPan.innerHTML = elem;
         subjectPan.classList.add('table');
      }

      function makeSubject(dayX) {
         var time = 9, num = 0;
         for (val in routine[dayX]) {
            var elem = `<div class="sub flex c" onclick="window.open('${routine[dayX][val]}')" style="animation-delay: ${num / 8}s;">
   <div class="subName">${val.replace('_', ' ')}</div>
   <div class="timing">${time}:00 - ${time}:35</div>
   <button>Join Now</button>
   </div>`;
            subjectPan.insertAdjacentHTML('beforeend', elem);
            time++;
            num++;
         }
      }
      op('#myPic').addEventListener('click', opMenu);
      function opMenu() {
         var menu = op('.menu');
         menu.classList.toggle('active');
         setTimeout(() => {
            if (menu.classList.contains('active')) {
               op('#myPic').removeEventListener('click', opMenu);
               document.addEventListener('click', opMenu);
            } else {
               op('#myPic').addEventListener('click', opMenu);
               document.removeEventListener('click', opMenu);
            }
         }, 100)
      }
      function op(elem) { return document.querySelector(elem) }
      function opp(elem) { return document.querySelectorAll(elem) }
      var bgPan = op('.bg');
      makeBg();
      function makeBg() {
         for (a = 0; a < 10; a++) {
            var x = Math.ceil(Math.random() * window.innerWidth),
               y = Math.ceil(Math.random() * window.innerHeight),
               d = 30 + Math.ceil(Math.random() * 30),
               f = Math.ceil(Math.random() * 360);
            var elem = `<div style="left: ${x}px; top: ${y}px; animation-delay: ${-d / 10}s; width: ${d}px; height: ${d}px; filter: hue-rotate(${f}deg);"></div>`
            bgPan.insertAdjacentHTML('beforeend', elem);
         }
      }

      function addShareBt() {
         if (navigator.canShare()) {
            var bt = op('#share');
            bt.style.display = 'block';
            bt.onclick = () => {
               navigator.share(document.URL);
            }
         }
      }
      function remShareBt() {
         op('#share').style.display = 'none';
      }



      /*install*/



      var userName = localStorage.getItem('userName'), inName, inSub, sent = localStorage.getItem('sent'), whenSentUserData = localStorage.getItem('whenSentUserData');


      var sendObj = {
         opened: []
      },
         dataToSend = localStorage.getItem("dataToSend");
      edtabilishDate();

      updateOpenTime();

      function updateOpenTime() {
         var data = JSON.parse(localStorage.getItem('dataToSend'));
         data.opened.push(new Date().toLocaleDateString()+' || '+new Date().toLocaleTimeString());
         localStorage.setItem('dataToSend', JSON.stringify(data));
      }


      if ('serviceWorker' in navigator) {
         window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').then(function (registration) { console.log('ServiceWorker registration successful with scope: ', registration.scope); }, function (err) { console.log('ServiceWorker registration failed: ', err); }); });
      }
      let deferredPrompt; var downBtn = document.querySelector('#down'); downBtn.style.display = "none"; addShareBt();
      window.addEventListener('beforeinstallprompt', (e) => {
         e.preventDefault(); deferredPrompt = e; remShareBt(); downBtn.style.display = ""; downBtn.addEventListener('click', (e) => {
            deferredPrompt.prompt(); deferredPrompt.userChoice.then((choiceResult) => {
               if (choiceResult.outcome === 'accepted') {
                  console.log('User accepted the install prompt');
               } else { console.log('User dismissed the install prompt'); }
            });
         });
      });

      if ((!sent) && isDownLoaded()) {
         document.body.insertAdjacentHTML('afterbegin', `<iframe src='numDown.html' onload="send()">`);
      }


      function sendData(first, second) {
         var frame = op('iframe'),
            ffield = frame.contentWindow.document.querySelector('#name'),
            sfield = frame.contentWindow.document.querySelector('#down'),
            sub = frame.contentWindow.document.querySelector('#sub');
         ffield.value = userName ? userName : navigator.appVersion;
         sfield.value = first;
         sub.click();
         localStorage.setItem('whenSentUserData', new Date().toDateString());
      }
      function send(first, second) {
         var frame = op('iframe'),
            ffield = frame.contentWindow.document.querySelector('#name'),
            sfield = frame.contentWindow.document.querySelector('#down'),
            sub = frame.contentWindow.document.querySelector('#sub');
         if (!userName) {
            userName = prompt("Enter your name to Proceed.");
         }
         localStorage.setItem('userName', userName);

         ffield.value = userName ? userName : navigator.appVersion;
         sfield.value = second;
         sub.click();
         localStorage.setItem('sent', true);
      }

      if (new Date().getDay() == 1) {
         if (whenSentUserData != new Date().toDateString()) {
            var useData = JSON.parse(localStorage.getItem('dataToSend'));

            document.body.insertAdjacentHTML('afterbegin', `<iframe src='numDown.html' onload='sendData(${JSON.stringify(useData.opened)})'>`);
         }
      }
      function edtabilishDate() {
         if (!localStorage.getItem('dataToSend')) {
            localStorage.setItem('dataToSend', JSON.stringify(sendObj));
         }
      }
      function isDownLoaded() {
         return (window.matchMedia('(display-mode: standalone)').matches);
         localStorage.setItem('sent', true);
      }



/*advaertisement*/

      var adAry=[
['https://i.ytimg.com/vi/Rw24UGLMXhI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfbHu5YlDV7azfsg4zkhxs6NQ2cw','https://www.youtube.com/watch?v=Rw24UGLMXhI'],
['https://i.ytimg.com/vi/BYfcXFCJHAY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFRH3jf8hOuA1yw01nZ8S7DS5cLA','https://www.youtube.com/watch?v=BYfcXFCJHAY'],
['https://i.ytimg.com/vi/rMk6sUtXy4o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjjwPWVcr9m47D5T72PSPFsMpsiQ','https://www.youtube.com/watch?v=rMk6sUtXy4o'],
['https://i.ytimg.com/vi/MBWdI4zfCbU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQ_hJhe_uED2zjtD0MQvcPY7YTLQ','https://www.youtube.com/watch?v=MBWdI4zfCbU'],
['https://i.ytimg.com/vi/MMTC6q9uX-k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBG2MHlreI6bq4kBqybNiEIkeU6hQ','https://www.youtube.com/watch?v=MMTC6q9uX-k'],
['https://i.ytimg.com/vi/xOu3Oi0a6Cg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwo4E79RY6RE4d3ROv4UQNO3iOnQ','https://www.youtube.com/watch?v=xOu3Oi0a6Cg'],
['https://i.ytimg.com/vi/UaKhU2YbF6s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6O3Z2Vg0Al8Y63x5jSlS33L-4Yw','https://www.youtube.com/watch?v=xOu3Oi0a6Cg'],
['https://i.ytimg.com/vi/PMQ6ffMQkZI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDphAfjMDGqKE1o-rY4kjFETSwnsw','https://www.youtube.com/watch?v=PMQ6ffMQkZI'],
['https://i.ytimg.com/vi/vUHdyZMoCag/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCevQ6wXnlkkrxvZkBCBFLONgYzNw','https://www.youtube.com/watch?v=vUHdyZMoCag'],
['https://i.ytimg.com/vi/f-guRzISPBA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDASLBdAT9iKm0MJVkWJr7sovfRKA','https://www.youtube.com/watch?v=f-guRzISPBA'],
['https://i.ytimg.com/vi/wYodVZESHgY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRq5RHoIWvFZkeaZdJX0OmOBoWLA','https://www.youtube.com/watch?v=wYodVZESHgY'],
['https://i.ytimg.com/vi/5arvXv4mJfg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_U5gwn3csZ7MyM-EQX2XZ7m06Rg','https://www.youtube.com/watch?v=5arvXv4mJfg'],
['https://i.ytimg.com/vi/KHdUjlxN3xQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCCyT6GFJ7T0j8qj9K_PIngkRm1xg','https://www.youtube.com/watch?v=KHdUjlxN3xQ'],
['https://i.ytimg.com/vi/zoP6Wmo7M1g/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2N_LW00bSpG0e-mwdFOI4Gd9c8Q','https://www.youtube.com/watch?v=zoP6Wmo7M1g'],
['https://i.ytimg.com/vi/eL6xEgGRpBE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRVMxySPqD2-2gmSZf5tBoYCcMtA','https://www.youtube.com/watch?v=eL6xEgGRpBE']
];

      var adData=adAry[Math.floor(Math.random()*adAry.length)];
      op(".adBox a").setAttribute('href',adData[1]);
      op(".adBox img").setAttribute('src',adData[0]);
      function adLoaded(){
         log('caeme');
         op(".adBox img").style.opacity=1
      }