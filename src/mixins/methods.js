export default {
  data() {
    return {
      liveTime: ""
    };
  },
  methods: {
    getNow: function() {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var format = hours > 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      const formatted = hours + ":" + minutes + ":" + seconds + format;
      const today = new Date();
      const newDate =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      this.liveTime = formatted + " " + "-" + " " + newDate;
    }
  }
};
