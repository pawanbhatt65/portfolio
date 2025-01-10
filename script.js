document.addEventListener("DOMContentLoaded",()=>{
    const body=document.body;

    const workElmId=document.getElementById("work")
    const downloadCvBtn=document.querySelector(".download-cv-btn")
    const eduListTabElm=document.querySelector(".edu-list-tab")
    const eduListItemElms=document.querySelectorAll(".edu-list-item")
    const eduContentDataElms=document.querySelectorAll(".edu-content-data")
    const contactFormElm=document.contactForm;
    const nameElm=document.getElementById("name")
    let nameErrorElm=document.getElementById("nameError")
    const phoneElm=document.getElementById("phone")
    let phoneErrorElm=document.getElementById("phoneError")
    const emailElm=document.getElementById("email")
    let emailErrorElm=document.getElementById("emailError")
    const subjectElm=document.getElementById("subject")
    let subjectErrorElm=document.getElementById("subjectError")
    const messageElm=document.getElementById("message")
    let messageErrorElm=document.getElementById("messageError")
    let letterCount=document.querySelector(".letter-count")
    const textareaGroupElm=document.getElementById("textareaGroup")
    const barIconClassElm=document.querySelector(".bar-icons-class")
    const backdropMenuModel=document.querySelector(".backdrop-menu-model")
    const menuModel=document.querySelector(".menu-model")
    const closeMenuModelElm=document.querySelector(".closeMenuModel")
    const bottomToTopElm=document.querySelector(".bottom-to-top")
    const headerSectionElm=document.querySelector(".header-section")
    const navMenuItemLinkElm=document.querySelectorAll(".navMenuItemLink")
    const backdropContactModelElm=document.querySelector(".backdrop-contact-model")
    const modelContainerElm=document.querySelector(".model-container")
    const closeContactModelElm=document.querySelectorAll(".closeContactModel")
    const windowScrolledElm=document.getElementById("windowScrolled")
    const currentWordElm=document.getElementById("currentWord")

    const enterNameHandler=(event, error, errorMessage) =>{
        const nameValue=event.target.value;
        const nameAndSpace = /^[a-zA-Z\s]*$/;
        if(nameValue.trim().length===0) {
            error.textContent=errorMessage;
        } else if (!nameAndSpace.test(nameValue)){
            error.textContent="Please enter only letters!"
        } else {
            error.textContent="";
        }
    }
    const enterNumberHandler=(event, error, errorMessage)=>{
        const phoneValue = event.target.value;
        const onlyNumber = /^[0-9]+$/;
        if(phoneValue.trim().length===0) {
            error.textContent=errorMessage;
        } else if (!onlyNumber.test(phoneValue)){
            error.textContent="Please enter only number!";
        }else {
            error.textContent="";
        }
    }
    const enterEmailHandler=(event, error,errorMessage) =>{
        const emailValue = event.target.value;
        const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if(emailValue.trim().length===0) {
            error.textContent=errorMessage;
        } else if (!emailRegEx.test(emailValue)){
            error.textContent="Please enter valid email address!"
        } else {
            error.textContent=""
        }
    }
    const enterSubjectHandler=(event, error, errorMessage) => {
        const subjectValue=event.target.value;
        if(subjectValue.trim().length===0) {
            error.textContent=errorMessage;
        }else {
            error.textContent=""
        }
    }
    const preventFormSubmitHandler=(event, input, error, errorMessage) => {
        event.preventDefault()
        input.focus()
        error.textContent=errorMessage;
    }
    closeContactModelElm.forEach(item=>{
        item.addEventListener("click", e=>{
            e.stopPropagation()
            backdropContactModelElm.classList.remove("active")
            modelContainerElm.classList.remove("active")
            body.style.overflow="auto"
        })
    })
    backdropContactModelElm.addEventListener("click",e=>{
        e.stopPropagation()
        backdropContactModelElm.classList.remove("active")
        modelContainerElm.classList.remove("active")
        body.style.overflow="auto"
    })

    workElmId.addEventListener("click", eventW=>{
        // eventW.stopPropagation()
        const workBox=eventW.target.closest(".workBox")

        const descriptionShowHide=workBox.querySelector(".descriptionShowHide")
        const readMoreLessBtn=workBox.querySelector(".readMoreLessBtn")

        readMoreLessBtn.addEventListener("click", e=>{
            e.preventDefault()
            // e.stopPropagation()
            if(descriptionShowHide.classList.contains("small")){
                descriptionShowHide.classList.replace("small","large")
                e.target.textContent="Read Less"
            } else if(descriptionShowHide.classList.contains("large")) {
                descriptionShowHide.classList.replace("large","small")
                e.target.textContent="Read More"
            } else {
                descriptionShowHide.classList.add("small")
                e.target.textContent="Read More"
            }
        })
    })

    downloadCvBtn.addEventListener("click",e=>{
        e.preventDefault()
        const link=document.createElement("a")
        link.download="pawan-php-laravel.pdf"
        link.href="assets/cv/pawan-php-laravel.pdf"
        link.dispatchEvent(new MouseEvent("click"))
    })

    eduListTabElm.addEventListener("click", e=>{
        const eduListItem=e.target.closest(".edu-list-item")

        if(!eduListItem) return;
        eduListItemElms.forEach(item=>{
            item.classList.remove("edu-list-item-active")
        })
        eduListItem.classList.add("edu-list-item-active")

        eduContentDataElms.forEach(item=>{
            item.classList.remove("active")
        })
        const getDataset=eduListItem.dataset.tab;
        // console.log(getDataset)
        document.querySelector(`.edu-content-${getDataset}`).classList.add("active")
    })

    nameElm.addEventListener("keyup", e=>{
        enterNameHandler(e, nameErrorElm, "Please enter your name!")
    })
    phoneElm.addEventListener("keyup", e=>{
        enterNumberHandler(e, phoneErrorElm, "Please enter your number!")
    })
    emailElm.addEventListener("keyup", e=>{
        enterEmailHandler(e, emailErrorElm, "Please enter your email address!")
    })
    subjectElm.addEventListener("keyup",e=>{
        enterSubjectHandler(e, subjectErrorElm, "Please enter your subject!")
    })
    letterCount.textContent="0/500";
    messageElm.addEventListener("keyup", e=>{
        const subjectValue=e.target.value;
        if(subjectValue.trim().length===0) {
            messageErrorElm.textContent="Please enter your message!";
            textareaGroupElm.classList.add("error-add")
        }else {
            messageErrorElm.textContent=""
            textareaGroupElm.classList.remove("error-add")
        }
        if(subjectValue.length<=500) {
            letterCount.textContent=`${subjectValue.length}/500`;
        } else if (subjectValue.length===0) {
            letterCount.textContent="0/500"
        } else if (messageErrorElm.textContent){
        }
    })
    contactFormElm.addEventListener("submit",event=>{
        event.preventDefault()
        const name=event.target.name.value;
        const phone=event.target.phone.value;
        const email=event.target.email.value;
        const subject=event.target.subject.value;
        const message=event.target.message.value;

        if(name.trim().length===0) {
            preventFormSubmitHandler(event, nameElm, nameErrorElm, "Please enter your name!")
            return false;
        } else if (nameErrorElm.textContent) {
            preventFormSubmitHandler(event, nameElm, nameErrorElm, "Enter your valid name!")
            return false;
        } else if (phone.trim().length===0) {
            preventFormSubmitHandler(event, phoneElm, phoneErrorElm,"Please enter your phone number!")
            return false;
        } else if (phoneErrorElm.textContent) {
            preventFormSubmitHandler(event, phoneElm, phoneErrorElm,"Enter your valid phone number!")
            return false;
        } else if (email.trim().length===0){
            preventFormSubmitHandler(event, emailElm, emailErrorElm,"Please enter your email address!")
            return false;
        } else if (emailErrorElm.textContent){
            preventFormSubmitHandler(event, emailElm, emailErrorElm,"Enter your valid email address!")
            return false;
        } else if (subject.trim().length===0) {
            preventFormSubmitHandler(event, subjectElm, subjectErrorElm,"Please enter your subject!")
            return false;
        } else if (subjectErrorElm.textContent) {
            preventFormSubmitHandler(event, subjectElm, subjectErrorElm,"Enter your valid subject!")
            return false;
        } else if (message.trim().length===0){
            preventFormSubmitHandler(event, messageElm, messageErrorElm,"Please enter your message!")
            return false;
        } else if (messageErrorElm.textContent) {
            preventFormSubmitHandler(event, messageElm, messageErrorElm,"Enter your valid message!")
            return false;
        } else {
            const adminParams = {
                name: name,
                phone: phone,
                email: email,
                subject: subject,
                message: message
            };
            emailjs.send("service_edftqu7",
            "template_2lc1p9w", adminParams)
            .then(() => {
                // console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
            
            // Send email to sender
            const senderParams = {
                email: email
            };
            emailjs.send("service_edftqu7","template_cdip0lg", senderParams)
                .then(() => {
                    // console.log('Sender email sent successfully!');
                }, (error) => {
                    console.error('Failed to send sender email:', error);
            });

            backdropContactModelElm.classList.add("active")
            modelContainerElm.classList.add("active")
            body.style.overflow="hidden"

            // Clear form fields
            event.target.reset();
        }
    })

    barIconClassElm.addEventListener("click", e=>{
        e.preventDefault()
        backdropMenuModel.classList.add("active")
        menuModel.classList.add("active")
        body.style.overflow="hidden"
    })
    closeMenuModelElm.addEventListener("click",e=>{
        e.stopPropagation()
        backdropMenuModel.classList.remove("active")
        menuModel.classList.remove("active")
        body.style.overflow="auto"
    })
    backdropMenuModel.addEventListener("click", e=>{
        e.stopPropagation()
        backdropMenuModel.classList.remove("active")
        menuModel.classList.remove("active")
        body.style.overflow="auto"  
    })

    window.addEventListener("scroll", e=>{
        if(this.window.pageYOffset>300) {
            bottomToTopElm.classList.add("show")
            headerSectionElm.classList.add("scroll-ref")
            windowScrolledElm.classList.add("window-scrolled")
        } else {
            bottomToTopElm.classList.remove("show")
            headerSectionElm.classList.remove("scroll-ref")
            windowScrolledElm.classList.remove("window-scrolled")
        }
    })
    bottomToTopElm.addEventListener("click", function(e){
        e.preventDefault()
        window.scrollTo({top: 0, behavior: "smooth"})
    })

    navMenuItemLinkElm.forEach(item=>{
        item.addEventListener("click", e=>{
            e.preventDefault()
            if(e.target.classList.contains("menu--link")){
                const id=e.target.getAttribute("href")
                document.querySelector(id).scrollIntoView({behavior: "smooth"})
                backdropMenuModel.classList.remove("active")
                menuModel.classList.remove("active")
                body.style.overflow="auto"
            }
        })
    })

    currentWordElm.innerText=""
    const words=["HTML", "JavaScript", "PHP", "Laravel"];
    let index=0;
    const interval = setInterval(() => {
        currentWordElm.innerText=words[index]
        index=(index+1) % words.length
      }, 2000);
      setTimeout(() => {
        clearInterval(interval);
    }, 10000);
})