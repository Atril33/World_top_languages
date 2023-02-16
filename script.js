const myMenu = document.querySelector('.bars');
const myShow = document.querySelector('.bigbar_links');
const myClose = document.querySelector('.myclose');

function myMobile() {
  if (myShow.style.display === 'none') {
    myShow.style.display = 'block';
  } else {
    myShow.style.display = 'none';
  }
}
myMenu.addEventListener('click', myMobile);

function myMobileClose() {
  if (myShow.style.display === 'block') {
    myShow.style.display = 'none';
  }
}
myClose.addEventListener('click', myMobileClose);

const myMain = document.getElementById('mymain');

const mySpeakersData = [
  {
    speakerPic: 'Images/speaker/David Walsh.png',
    name: 'David Walsh',
    speakerTitle: 'Senior Software Engineer ',
    speakerPara: 'David Walsch is a former Senior Software Engineer and evangelist for Mozilla.',
  },
  {
    speakerPic: 'Images/speaker/Piotr Kowalski.png',
    name: 'Piotr Kowalski',
    speakerTitle: 'JavaScript developer',
    speakerPara: 'Piotr Kowalski is an open-source enthusiast and seasoned JavaScript developer.',
  },
  {
    speakerPic: 'Images/speaker/Szymon Piłkowski.png',
    name: 'Szymon Piłkowski',
    speakerTitle: 'JavaScript developer',
    speakerPara: 'Szymon Pilkowski is an experienced JavaScript Developer with a passion for all kinds of experiments, focusing on HTML5 and NodeJS.',
  },
  {
    speakerPic: 'Images/speaker/Ben Nadel.png',
    name: 'Ben Nadel',
    speakerTitle: 'JavaScript developer',
    speakerPara: 'Ben Nadel is the co-founder and a principal engineer at InVision App, Inc, a company that is at the forefront of the design and UX revolution.',
  },
  {
    speakerPic: 'Images/speaker/Shawn Wang.png',
    name: 'Shawn Wang',
    speakerTitle: 'JavaScript developer',
    speakerPara: 'Shawn Wang is a JavaScript developer who has worked on React and serverless JavaScript at Two Sigma, Netlify and AWS.',
  },
  {
    speakerPic: 'Images/speaker/Tania Rascia.png',
    name: 'Tania Rascia',
    speakerTitle: 'avaScript/TypeScript developer',
    speakerPara: 'Tania is a Senior Software Engineer specializing in modern JavaScript/TypeScript and architectural designer.',
  },
];

const newSection = document.createElement('section');
newSection.classList = 'feature_speaker';
myMain.appendChild(newSection);

const speakerText = document.createElement('div');
speakerText.classList = 'speaker_text';
newSection.appendChild(speakerText);

const headingText = document.createElement('h1');
headingText.classList = 'speakerh1';
headingText.innerText = 'Featured Speakers';
speakerText.appendChild(headingText);

const baseLine = document.createElement('div');
baseLine.classList = 'hr';
speakerText.appendChild(baseLine);

const mySpeakerTabs = document.createElement('div');
mySpeakerTabs.classList = 'speaker_tabs';
newSection.appendChild(mySpeakerTabs);

for (let i = 0; i < mySpeakersData.length; i += 1) {
  const mySpeakerTab = document.createElement('div');
  mySpeakerTab.classList = 'speaker_tab';
  mySpeakerTabs.appendChild(mySpeakerTab);

  const mySpeakerImages = document.createElement('div');
  mySpeakerImages.classList = 'speaker_images';
  mySpeakerTab.appendChild(mySpeakerImages);

  const myChessImage = document.createElement('img');
  myChessImage.src = 'Images/speaker/my_absolute.jpg';
  myChessImage.classList = 'chess_img';
  mySpeakerImages.appendChild(myChessImage);

  const myPersonImage = document.createElement('img');
  myPersonImage.src = `${mySpeakersData[i].speakerPic}`;
  myPersonImage.classList = 'person_img';
  mySpeakerImages.appendChild(myPersonImage);

  const mySpeakerDatile = document.createElement('div');
  mySpeakerDatile.classList = 'speaker_datile';
  mySpeakerTab.appendChild(mySpeakerDatile);

  const mySpeakerName = document.createElement('h1');
  mySpeakerName.classList = 'speaker_name';
  mySpeakerName.innerText = `${mySpeakersData[i].name}`;
  mySpeakerDatile.appendChild(mySpeakerName);

  const mySpeakerTitle = document.createElement('h2');
  mySpeakerTitle.classList = 'speaker_title';
  mySpeakerTitle.innerText = `${mySpeakersData[i].speakerTitle}`;
  mySpeakerDatile.appendChild(mySpeakerTitle);

  const mySpeakerBorder = document.createElement('div');
  mySpeakerBorder.classList = 'speaker_border';
  mySpeakerDatile.appendChild(mySpeakerBorder);

  const mySpeakerDes = document.createElement('p');
  mySpeakerDes.classList = 'speaker_des';
  mySpeakerDes.innerText = `${mySpeakersData[i].speakerPara}`;
  mySpeakerDatile.appendChild(mySpeakerDes);
}
