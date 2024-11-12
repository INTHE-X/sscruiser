/* 커스텀 설정 타이틀 클릭시 이벤트 */

const customTitlesBoxList = document.querySelectorAll(".customTitlesBox a");
customTitlesBoxList.forEach((otherlist) => {otherlist.classList.remove("active")});
setTimeout(() => {customTitlesBoxList[1].classList.add("active");}, 200);


/* 알람설정 박스 클릭시 오픈 */

const alarmBoxsOpenEvet = () => {

    const alarmSetBtn = document.querySelectorAll(".alarmSetBtn");
    const alarmSetup = document.querySelectorAll(".alarmSetup");
    const alarmBoxs = document.querySelectorAll(".alarmBoxs");

    alarmSetBtn.forEach((btn,idx) => {

       btn.addEventListener("click" , () => {

         if(btn.classList.contains("active")){
            return btn.classList.remove("active"),
            alarmSetup[idx].classList.remove("active"),
            alarmBoxs[idx].classList.remove("active");
         }

         console.log('zmfflr ');
         btn.classList.add("active");
         alarmSetup[idx].classList.add("active");
         alarmBoxs[idx].classList.add("active");

       })
    })
} 

alarmBoxsOpenEvet();


/* 설정저장 버튼 클릭시 팝업 오픈 */

function customSavePopEvet(){

   const customSaveBtn = document.querySelector(".customSaveBtn");
   const customSavePopWrappers = document.getElementById("customSavePopWrappers");
   let customPopHtmlFilePath = '/src/components/popUp/setupPop.html'; 

   if(customSaveBtn){

     let xhr = new XMLHttpRequest();
     xhr.open('GET',  customPopHtmlFilePath, true);
  
     xhr.onreadystatechange = function() {
  
     if (xhr.readyState == 4) {
         if (xhr.status == 200){
  
              try{
                    customSavePopWrappers.innerHTML = xhr.responseText;
                    let customsPopscripts = customSavePopWrappers.getElementsByTagName('script');
  
                    for (let i = 0; i < customsPopscripts.length; i++) {
                          let script = document.createElement('script');
  
                          if (customsPopscripts[i].src) {
                               script.src = customsPopscripts[i].src; // 외부 스크립트
                           } else {
                             script.textContent = customsPopscripts[i].textContent; // 인라인 스크립트
                           }
                          // 스크립트 로드 완료 후 실행
                          script.onload = () => { console.log(`설정저장팝업스크립트 ${i + 1} 로드 완료`);};
                          // 에러 핸들링
                          script.onerror = () => { console.error(`설정저장팝업스크립트 ${i + 1} 로드 실패: ${script.src || '인라인 스크립트'}`)};
 
                          document.body.appendChild(script); // 스크립트를 body에 추가하여 실행
                    }
                 }catch (error) {
                    console.log('설정저장팝업연결 오류:', error);
              }
        }else{
           console.error('HTTP 요청 실패:', xhr.status);
        }
       }
  
     };

     xhr.send();
     console.log('설정저장팝업작동');


     //레이아웃 저장버튼 클릭시 팝업 오픈
     customSaveBtn.addEventListener("click" , () => {

     const setupSavePopWrap = document.querySelector(".setupSavePopWrap");
     console.log(setupSavePopWrap);

        if(setupSavePopWrap){
          return setupSavePopWrap.classList.add("active");
        }
        setupSavePopWrap.classList.remove("active");

     });

   }

}

customSavePopEvet();