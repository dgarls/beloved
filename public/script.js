panels = document.getElementsByClassName('panel');
menu = document.getElementById("menu");
menuIcon = document.getElementById("menuIcon");
currentPanel = 0;
len = panels.length - 1;
menuOpen = false;
analysisText = `&nbsp;&nbsp;&nbsp;&nbsp;In Toni Morrison’s novel <i>Beloved</i>, the final chapter serves to conclude the ideas of love, trauma and acceptance. Beloved has been banished from 124 by the collective force of the community of women, saving Sethe from her parasitic grasp. Beloved, in this final chapter, symbolizes the ubiquitous mental affliction on African Americans caused by countless years of slavery and dehumanization. In the final pages, Morrison takes on a disembodied perspective and reveals the fate of Beloved along with the effect that she had on the community around 124, ultimately concluding that, in order to truly heal traumatic wounds and prevent intergenerational trauma, people must not dwell on the painful woes of the past but instead move forward through an emotional acknowledgement of one's history, while also recognizing the benefits of forgetting a traumatizing past.
<br><br>&nbsp;&nbsp;&nbsp;&nbsp;At the beginning of the passage, the narrator establishes Beloved as a widely impactful and acknowledged figure, yet paradoxically forgettable despite her impact on the community. Morrison describes the contradictory circumstances of Beloved’s notoriety, stating, “Everybody knew what she was called, but nobody anywhere knew her name.” The community of 124 knew of Beloved and the damage she caused Sethe, but they didn’t truly know who she was and opted to forget her. Her lack of a name symbolizes not only the struggle that mothers experience during slavery, opting to not name their children due to the likelihood of them dying young, but it also signifies Morrison’s focus on hopefulness for a brighter future. Rather than dwelling on Beloved’s name and who she is, the community moves on. Beloved’s legacy is forgotten and her memory fades into nature, “[erupting] into her separate parts.” The idea that she splits into separate parts demonstrates Beloved’s multifaceted meaning, representing not only the lives lost in the horrific era of slavery, but also as a universal symbol for grief and pain as a result of historical trauma. Just as Beloved separates into distinct parts, some representing grief and pain while others represent love, those dealing with trauma must also separate their history into different pieces in order to more effectively deal with their abuse. More broadly, the community’s focus on forgetting Beloved supports the idea that forgetting a painful past can be an effective way of dealing with trauma, moving away from history into a brighter future filled with hope. Furthermore, the narrator states that the community believed that “remembering seemed unwise,” willingly forgetting Beloved because thinking about her is not productive to repairing the damage she left. This assertion demonstrates that ruminating on abuse suffered in the past is an unhelpful and damaging process which prevents one from moving forward. 
<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Despite the community’s aim to forget Beloved, the narrator depicts Beloved as ubiquitous and hidden within every inch of the community’s lives, illustrating the difficulty in forgetting past pain or trauma. The narrator describes that, “Occasionally, however, the rustle of a skirt hushes when they wake,” insinuating that the spirit of Beloved follows the lives of all those who came into contact with her long after she had been banished. Even after forgetting Beloved, her impact on the community remains hidden in the hushed corners of their lives, appearing in small moments when the community seems to finally forget her. Her constant appearance in the lives of others reflects how traumatic and painful memories are never truly forgotten but rather stowed in the subconscious of those who experienced them. Memories of abuse may seem to fade, but they always seem to appear in associations made many years ago. Photos of family, the movement of fabric, a breeze during sleep can all bring back long-forgotten memories of that abuse. Beloved had been banished for a long time, but her impact still shakes the people she interacted with. Similarly, even after slavery had been outlawed for decades, the remnants of the physical and emotional oppression still haunted the lives of many African Americans. Trauma stays with people even long after the event occurred, requiring those to find a way to deal with the memories in a healthy manner.
<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Throughout the passage, the narrator repeats the phrase “this is not a story to pass on” in order to establish a contradicting idea between telling Sethe and Beloved’s story while also saying to keep it hidden, ultimately illustrating that passing on a traumatic story can be a way to heal trauma when presented in a respectful and meaningful manner. The community of African Americans who experienced Beloved did not carry on her tale and tried to heal their grief and pain through forgetting, keeping her story inside. Morrison, through presenting Beloved’s story as a symbol of the lives lost during the tragic struggle of slavery, thus contradicts the narrator’s assertion that her story is not to be passed on. While the community strives to forget her, Morrison pushes the reader to remember Sethe and Beloved’s story as a way of honoring the African American lives that were lost as a result of enslavement. By writing a story about a historical figure which fought against the sins of slavery, Sethe and Beloved’s story is passed on, demonstrating that remembering painful times can be an effective way of dealing with suffering when done in a respectful manner, focused primarily on how to heal those wounds.
<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Beloved’s last chapter assumes a disembodied perspective, focusing on the disappearance and lasting effects of Beloved on the community around 124. Beloved, acting as a symbol not only for pain and grief but also love and hopefulness, helps conclude the ideas of how to heal wounds left by trauma and the importance of dealing with past abuse in a meaningful and healthy way.`;

passage = `&nbsp;&nbsp;&nbsp;&nbsp;"There is a loneliness that can be rocked. Arms crossed, knees drawn up; holding, holding on, this motion, unlike a ship’s, smooths and contains the rocker. It’s an inside kind—wrapped tight like skin. Then there is a loneliness that roams. No rocking can hold it down. It is alive, on its own. A dry and spreading thing that makes the sound of one’s own feet going seem to come from a far-off place.
<br>&nbsp;&nbsp;&nbsp;&nbsp;Everybody knew what she was called, but nobody anywhere knew her name. Disremembered and unaccounted for, she cannot be lost because no one is looking for her, and even if they were, how can they call her if they don’t know her name? Although she has claim, she is not claimed. In the place where long grass opens, the girl who waited to be loved and cry shame erupts into her separate parts, to make it easy for the chewing laughter to swallow her all away.

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;It was not a story to pass on.

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;They forgot her like a bad dream. After they made up their tales, shaped and decorated them, those that saw her that day on the porch quickly and deliberately forgot her. It took longer for those who had spoken to her, lived with her, fallen in love with her, to forget, until they realized they couldn’t remember or repeat a single thing she said, and began to believe that, other than what they themselves were thinking, she hadn’t said anything at all. So, in the end, they forgot her too. Remembering seemed unwise. They never knew where or why she crouched, or whose was the underwater face she needed like that. Where the memory of the smile under her chin might have been and was not, a latch latched and lichen attached its apple-green bloom to the metal. What made her think her fingernails could open locks the rain rained on?

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;It was not a story to pass on.

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;So they forgot her. Like an unpleasant dream during a troubling sleep. Occasionally, however, the rustle of a skirt hushes when they wake, and the knuckles brushing a cheek in sleep seem to belong to the sleeper. Sometimes the photograph of a close friend or relative—looked at too long—shifts, and something more familiar than the dear face itself moves there. They can touch it if they like, but don’t, because they know things will never be the same if they do.

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;This is not a story to pass on.

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Down by the stream in back of 124 her footprints come and go, come and go. They are so familiar. Should a child, an adult place his feet in them, they will fit. Take them out and they disappear again as though nobody ever walked there. 
By and by all trace is gone, and what is forgotten is not only the footprints but the water too and what it is down there. The rest is weather. Not the breath of the disremembered and unaccounted for, but wind in the eaves, or spring ice thawing too quickly. Just weather. Certainly no clamor for a kiss. 

<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Beloved."
`

const toggleMenu = () => {
    if (menuOpen) {
        menu.style.left = "-16%";
        menuOpen = false;
    }else{
        menuOpen = true;
        menu.style.left = "0";
    }
}

const nav = (n) => {
    window.scrollTo(0, panels[n].offsetTop);
    currentPanel = n;
}

const bringArrowDown = element => {
    if (currentPanel === 0 && element.id === 'upArrow') return;
    element.style.transform = "scale(2) translateY(5vh)";
}

const bringArrowUp = element => {
    if (currentPanel === len && element.id === 'downArrow') return;
    element.style.transform = "scale(2) translateY(-5vh)";
}

const moveDown = () => {
    currentPanel += 1;
    if (currentPanel >= len) {
        currentPanel = len;
        bringArrowDown(document.getElementById('downArrow'));
    }
    window.scrollTo(0, panels[currentPanel].offsetTop);
}

const moveUp = () => {
    currentPanel -= 1;
    if (currentPanel <= 0) {
        currentPanel = 0;
        bringArrowUp(document.getElementById('upArrow'));
    }
    window.scrollTo(0, panels[currentPanel].offsetTop);
}

const goHome = () => {
    window.scrollTo(0, 0);
    currentPanel = 0;
}

const showPassage = () =>{
    document.getElementById("analysisPortion").innerHTML = passage;
}

const showAnalysis = () => {
    document.getElementById("analysisPortion").innerHTML = analysisText;
}

window.onload = function(){ 
    //window.scrollTo(0, 0);
}
