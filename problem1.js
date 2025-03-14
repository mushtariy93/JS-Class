class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance (p1,p2){
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1=new Point(5,5);
const p2=new Point(9,8);
console.log(Point.distance(p1, p2));

