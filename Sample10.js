// Modified disintegration
// by Ritchse
// instagram.com/ritchse

osc(2,4,2).modulate(noise(6),0.1).diff(o0)
  	.modulateScrollY(osc(5).modulate(osc().rotate(0.5),.11))
	.scale(.72).color(50,1,22)
  	.out()
