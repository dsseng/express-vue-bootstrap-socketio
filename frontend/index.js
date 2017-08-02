window.onload = function () {
  Vue.use(bootstrapVue);

  var app = new Vue({
    el: '#app',
    data: {
      asd: "",
      dt: ""
    },
    methods: {
      send () {
        var data = {
          msg: app.asd
        };
        socket.emit("cs", JSON.stringify(data));
      }
    }
  });
  var socket = io();
  socket.on("sc", function (data) {
    var obj = JSON.parse(data);
    app.dt = obj.date;
  });
};
