/* 설정아이콘 버튼 클릭시 숨겨진 박스 오픈 */

const userManageHiddenBoxsOpenEvet = () => {

  const userHiddenBtn = document.querySelector(".userHiddenBtn");
  const userManageHiddenBoxs = document.querySelector(".userManageHiddenBoxs");


  userHiddenBtn.addEventListener("click" , () => {

     if(userHiddenBtn.classList.contains("active")){

       return userHiddenBtn.classList.remove("active"),
       userManageHiddenBoxs.classList.remove("active");

     }
     userHiddenBtn.classList.add("active");
     userManageHiddenBoxs.classList.add("active");
    
  })
}

userManageHiddenBoxsOpenEvet();



/* 셀렉박스 이벤트  */

const userManageSelectBoxEvet = () => {

    
     
   let userManageSelectBox01 = document.getElementById("userManageSelectBox01");
   let userManageSelectBox02 = document.getElementById("userManageSelectBox02");

   let userManageSelectsTitleBtn = document.querySelectorAll(".userManageSelectsTitleBtn");
   let userManageSelectList = document.querySelectorAll(".userManageSelectList");
   let userManageSelectListMember = document.querySelectorAll(".userManageSelectListMember");

     //최초의 셀렉박스값 설정 및 보여지는 셀렉박스 버튼의 최초 text값 담기
      const initialValues = () => {

         let list01 = '';
         let list02 = '';
      
         if(userManageSelectBox01.children){
         for(let i = 0; i <= userManageSelectBox01.children.length - 1; i++){
 
            list01 += `<li><p>${ userManageSelectBox01.children[i].value}</p></li>`;
            userManageSelectsTitleBtn[0].textContent = userManageSelectBox01.children[0].value;
         }
         userManageSelectListMember[0].innerHTML = list01;
 
        }

        if(userManageSelectBox02.children){
         for(let i = 0; i <= userManageSelectBox02.children.length - 1; i++){
 
            list02 += `<li><p>${ userManageSelectBox02.children[i].value}</p></li>`;
            userManageSelectsTitleBtn[1].textContent = userManageSelectBox02.children[0].value;
         }
         userManageSelectListMember[1].innerHTML = list02;
 
        }


 
       }
 
     initialValues();

    //셀렉박스 버튼 클릭 이벤트
    userManageSelectsTitleBtn.forEach((btns) => {

      btns.addEventListener("click", () => {

        const lists = btns.nextElementSibling;

        if(lists.classList.contains("active")){
           return lists.classList.remove("active"),
           btns.classList.remove("active");
        }
        
        userManageSelectList.forEach((otherList) => otherList.classList.remove("active"));
        userManageSelectsTitleBtn.forEach((otherbtns) => otherbtns.classList.remove("active"));
        
        btns.classList.add("active");
        lists.classList.add("active");

      })
 })




 //셀렉박스 리스트 클릭시 버튼에 담기
 userManageSelectListMember.forEach((lists , idx) => {

     lists.addEventListener("click", (e) =>{ 

 
        const thisTarget = e.target; //현재 클릭한 요소
        const targetBtns = thisTarget.parentElement.parentElement.parentElement.previousElementSibling;

          if(thisTarget.nodeName == "P"){
   
               targetBtns.textContent = thisTarget.textContent;
               userManageSelectList.forEach((allList) => allList.classList.remove("active"));
               userManageSelectsTitleBtn.forEach((allBtns) => allBtns.classList.remove("active"));


      
      }
       
     })

 })
}

userManageSelectBoxEvet();
