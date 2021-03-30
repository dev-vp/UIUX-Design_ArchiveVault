/* ******************* */
/* Mock Data Generator */
/* ******************* */

// In production, this would be replaced with a asynchronous API call.

let mockData = [];

function generateRandomNum (min, max){
  return Math.floor(Math.random() * (max - min) + min);
};

function characterGenerator (numOfCharacter, letterCase){
  let arrayOfCharCode = [];
  for(let i = 0; i < numOfCharacter; i++){
    if(letterCase === 'uppercase'){
      arrayOfCharCode.push(generateRandomNum(65,90)) //UTF-16 (A-Z)
    } else {
      arrayOfCharCode.push(generateRandomNum(97,122)) //UTF-16 (a-z)
    }
  };
  return String.fromCharCode(...arrayOfCharCode);
};

function generateDate (startDate, endDate) {
  let start = startDate || new Date(2020, 0, 1);
  let end = endDate || new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

function generateMockData (num){
  if(typeof num === 'string'){console.error('This cannot be a string. The argument must be a number.')};

  for(let i = 0; i < num; i++){
    mockData.push(
      {
        From: `${characterGenerator(10)}@email.com`,
        To: `${characterGenerator(10)}@email.com`,
        Subject: `[${characterGenerator(8, 'uppercase')}] Nostrud duis cupidatat laboris veniam anim.`,
        Date: generateDate(),
        Attachment: (generateRandomNum(0,8) < generateRandomNum(0,10))
      }
    )
  };
  return mockData;
};

export default generateMockData;
