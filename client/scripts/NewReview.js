var __slice = [].slice;
(function(e, t) {
 var n;
 n = function() {
 function t(t, n) {
 var r, i, s, o = this;
 this.options = e.extend({}, this.defaults, n);
 this.$el = t;
 s = this.defaults;
 for (r in s) {
 i = s[r];
 if (this.$el.data(r) != null) {
 this.options[r] = this.$el.data(r)
 }
 }
 this.createStars();
 this.syncRating();
 this.$el.on("mouseover.starrr", "img", function(e) {
             return o.syncRating(o.$el.find("img").index(e.currentTarget) + 1)
             });
 this.$el.on("mouseout.starrr", function() {
             return o.syncRating()
             });
 this.$el.on("click.starrr", "img", function(e) {
             return o.setRating(o.$el.find("img").index(e.currentTarget) + 1)
             });
 this.$el.on("starrr:change", this.options.change)
 }
 t.prototype.defaults = {
 rating: void 0,
 numStars: 5,
 change: function(e, t) {}
 };
 t.prototype.createStars = function() {
 var e, t, n;
 n = [];
 for (e = 1, t = this.options.numStars; 1 <= t ? e <= t : e >= t; 1 <= t ? e++ : e--) {
 n.push(this.$el.append("<img src='../assets/review_leaf_empty.png' width='18' height='18'></img>"))
 }
 return n
 };
 t.prototype.setRating = function(e) {
 if (this.options.rating === e) {
 e = void 0
 }
 this.options.rating = e;
 this.syncRating();
 return this.$el.trigger("starrr:change", e)
 };
 t.prototype.syncRating = function(e) {
 var t, n, r, i;
 e || (e = this.options.rating);
 if (e) {
 for (t = n = 0, i = e - 1; 0 <= i ? n <= i : n >= i; t = 0 <= i ? ++n : --n) {
 this.$el.find("img").eq(t).attr('src', '../assets/review_leaf_filled.png');
 }
 }
 if (e && e < 5) {
 for (t = r = e; e <= 4 ? r <= 4 : r >= 4; t = e <= 4 ? ++r : --r) {
 this.$el.find("img").eq(t).attr('src', '../assets/review_leaf_empty.png');
 }
 }
 if (!e) {
 return this.$el.find("img").attr('src', '../assets/review_leaf_empty.png');
 }
 };
 return t
 }();
 return e.fn.extend({
                    starrr: function() {
                    var t, r;
                    r = arguments[0], t = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
                    return this.each(function() {
                                     var i;
                                     i = e(this).data("star-rating");
                                     if (!i) {
                                     e(this).data("star-rating", i = new n(e(this), r))
                                     }
                                     if (typeof r === "string") {
                                     return i[r].apply(i, t)
                                     }
                                     })
                    }
                    })
 })(window.jQuery, window);
$(function() {
  return $(".starrr").starrr()
  })


$(function(){
  
  $('.starrr').on('starrr:change', function(e, value){
                  var nota = $(this).find('.nota');
                  nota.val(value);
                  });
  });
function esconder(a){
    $(a).addClass('hidden');
}
function mostrar(){
    if    ($('.btaval').hasClass('hidden')){
        $('.btaval').removeClass('hidden');
    }
}
function test(){
    $(".formtest").submit(function(e){
                          var result = $(this).serialize();
                          alert(result.);
                          e.preventDefault();
                          });
}
