

module.exports = {
  list : function (fileList){
    var list = '<ul>';
    var i = 0;
    while (i < fileList.length){
      list = list + `<li><a href="/?id=${fileList[i]}">${fileList[i]}</a></li>`;
      i=i+1;
    }

    list = list + '</ul>'
    return list;
  },

  homehtml : function(list){
    return `
    <!doctype html>
    <html>
    <head>
      <title>Todo-Home</title>
      <meta charset="utf-8">
    </head>
    <body>
      ${list}
    </body>
    </html>
    `;
  },
  dailyhtml : function(date,body,button){
    // 지금 이거 dailyto.html 복붙한거임
    return `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>To-do Daily</title>
        <link rel="stylesheet" href="../dailytodo.css">

      </head>
      <body>
        <div class="check_page">
          <a href="dailytodo.html" style="color:powderblue">Daily</a>
          <span class="tab">&#9;</span>
          <a href="weektodo.html">Weekly</a>
          <span class="tab">&#9;</span>
          <a href="monthtodo.html">Monthly</a>
        </div>

        <div class=left>

        </div>

        <div class="center">
          <div class="center_date">
            <div id="today_date">
              ${date}
            </div>
          </div>
          <div class="center_top">
            <form action="/dailytodo_create_process" method="post">
              <input type="hidden" name="id" value="${date}">
              <input id="input_todo" type="text" name="todo" placeholder="할 일을 입력하세요.">
              <input id="input_todo_button" type="submit" value="추가">
            </form>
          </div>

          <div class="center_bottom">
            <ul id="todo_list">
              ${body}
            </ul>
          </div>
        </div>

        <div class="right">

        </div>

      </body>
      <script src="../script.js"></script>
    </html>
    `;
  }
}
