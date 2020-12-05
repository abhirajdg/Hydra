osc(20,-0.2,2).mult(noise(5)).modulateScale(osc(20,-0.2,2).kaleid(15)).repeat(4,8)
  .modulate(o0,-0.01)
  .modulateKaleid(shape(6,0.02,15))
  .out(o0)

  solid().out()
