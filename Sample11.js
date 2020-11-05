osc(30,0.01,1)
.mult(noise(5).modulate(osc(5,2)).rotate(2))
.posterize([1,3,2].fast(0.2).smooth(1))
.out()
