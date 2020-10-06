
 window.addEventListener("load", function(){
 	document.querySelector(".preloader").classList.add("opacity-0");

 	setTimeout(function(){
 		document.querySelector(".preloader").style.display = "none";
 	},1000)
 })
// Portfolio Item Filter

const filterContainer=document.querySelector(".portfolio-filter"),
		filterButtons=filterContainer.children,
		totalFilterButton=filterButtons.length,
		portfolioContents=document.querySelectorAll(".portfolio-item"),
		totalPortfolioItems=portfolioContents.length;

		for(let i=0; i<totalFilterButton; i++){
			filterButtons[i].addEventListener("click", function(){
				filterContainer.querySelector(".active").classList.remove("active")
				this.classList.add("active");

				const filterValue=this.getAttribute("data-filter");
				for(let k=0; k<totalPortfolioItems; k++){
					if(filterValue === portfolioContents[k].getAttribute("data-category")){
						portfolioContents[k].classList.remove("hide");
						portfolioContents[k].classList.add("show");
					}
					else{
						portfolioContents[k].classList.remove("show");
						portfolioContents[k].classList.add("hide");
					}
					if(filterValue === "all"){
						portfolioContents[k].classList.remove("hide");
						portfolioContents[k].classList.add("show");
					}
				}

			})
		}

// LightBox

	const lightbox=document.querySelector(".lightbox"),
		lightboxPicture=lightbox.querySelector(".lightbox-picture"),
		lightboxExit = lightbox.querySelector(".lightbox-exit"),
		lightboxData=lightbox.querySelector(".caption"),
		lightboxCounter=lightbox.querySelector(".counter");
	let Index=0;

	for(let a=0; a<totalPortfolioItems; a++){
	 portfolioContents[a].addEventListener("click", function(){
	 	Index=a;
	 	changeItem();
	 	toggleLightbox();
	 })
	}

	function nextItem(){
		if(Index === totalPortfolioItems-1){
			Index=0;
		}
		else{
			Index++
		}
		changeItem();
	}

	function previousItem(){
		if(Index === 0){
			Index = totalPortfolioItems;
		}
		else{
			Index--;
		}
		changeItem();
	}

	function toggleLightbox(){
		lightbox.classList.toggle("open");
	}

	function changeItem(){
		imageSource = portfolioContents[Index].querySelector(".portfolio-image img").getAttribute("src");
		lightboxPicture.src=imageSource;
		lightboxData.innerHTML=portfolioContents[Index].querySelector("h4").innerHTML;
		lightboxCounter.innerHTML=(Index+1) + " of " + totalPortfolioItems;
	}

	// Lightbox Ends

	lightbox.addEventListener("click", function(event){
		if(event.target ===lightboxExit || event.target === lightbox){
			toggleLightbox();
		}

	})


	//Navigation Bar
		const navigation = document.querySelector(".navigator"),
			navigationList = navigation.querySelectorAll("li"),
			totalNavigationList = navigationList.length,
			allSection = document.querySelectorAll(".section"),
			totalSection = allSection.length;

		for(let i = 0; i < totalNavigationList; i++){
			const a = navigationList[i].querySelector("a");
			a.addEventListener("click", function(){

				removeBackSectionClass();

				for(let j = 0; j < totalNavigationList; j++){
					if(navigationList[j].querySelector("a").classList.contains("active")){
						//add previous section class
						addBackSectionClass(j)
					
					}
					navigationList[j].querySelector("a").classList.remove("active");

				}

			this.classList.add("active");
			showSection(this);

			if(window.innerWidth < 1200){
				leftSectionTogglerButton();	
			}

			})
		}
		
		function removeBackSectionClass(){
			for(let i = 0; i < totalSection; i++){
				allSection[i].classList.remove("previous-section");
			}
		}

		
		function addBackSectionClass(num){
				allSection[num].classList.add("previous-section");
		}

		function showSection(element){
			for(let i = 0; i < totalSection; i++){
				allSection[i].classList.remove("active");
			}
			const target = element.getAttribute("href").split("#")[1];		
			document.querySelector("#" + target).classList.add("active") 
					 
		}


		function updateNav(element){
			for(let i = 0; i < totalNavigationList; i++){
				navigationList[i].querySelector("a").classList.remove("active");
				const target = element.getAttribute("href").split("#")[1];
				if(target === navigationList[i].querySelector("a").getAttribute("href").split("#")[1]){
					navigationList[i].querySelector("a").classList.add("active");
				}
			}
			
		}

		document.querySelector(".button-click").addEventListener("click", function(){
			
			showSection(this);
			updateNav(this);
		})


		
		function updateNavigator(element){
			for(let i = 0; i < totalNavigationList; i++){
				navigationList[i].querySelector("a").classList.remove("active");	
				const target = element.getAttribute("href").split("#")[1];
				if(target === navigationList[i].querySelector("a").getAttribute("href").split("#")[1]){
					navigationList[i].querySelector("a").classList.add("active");
				}		
			}
		}


		const navigationButton = document.querySelector(".toggler"),
			left = document.querySelector(".left");

		navigationButton.addEventListener("click", () =>{
			leftSectionTogglerButton();
		})

		function leftSectionTogglerButton(){
			left.classList.toggle("open");
			navigationButton.classList.toggle("open");
			for(let i = 0; i < totalSection; i++){
				allSection[i].classList.toggle("open");
			}

		}






