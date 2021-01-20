// 배열
var members = ['egoing', 'k8805', 'hoya'];
console.log(members[1]);

// 반복문으로 배열의 요소 출력하기
var i=0;
while (i < members.length){
  console.log('array loop', members[i]);
  i = i+1;
}


// 객체
var roles = {
  'programmer':'egoing',
  'designer' : 'k8805',
  'member' : 'hoya'
};

console.log(roles.designer);  // k8805
console.log(roles['designer']);

// 반복문으로 객체 요소 모두 출력하기
for (var name in roles){
  console.log('Object =>',name, 'value =>', roles[name]);
}
