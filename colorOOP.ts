function Color(r:number,g:number,b:number, a?:number) {
  this.r= r;
  this.g = g;
  this.b = b;
  this.a = a;

  if (this.r > 255|| this.g > 255 || this.b > 255) {
    console.error("Invalid color value, must be between 0 and 255");
  }
}
Color.prototype.rgb = function () {
  if (this.a) {
    console.log(`R:${this.r} G:${this.g} B:${this.b} a:${this.a}`);
  } else {
       console.log(`R:${this.r} G:${this.g} B:${this.b}`);
      }

  };
  



Color.prototype.hex = function () {
  console.log ("#" + (1 << 24 | this.r << 16 | this.g << 8 |this.b).toString(16).slice(1));

}

const red = new Color(255,0,0,0.2);
red.rgb();
red.hex();
