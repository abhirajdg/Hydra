osc(10,-0.2,2).mult(noise(5,0.3)).modulateScale(osc(10,-0.5,2).colorama(5).kaleid(15)).repeat(2,1)
  .modulateKaleid(shape(5, -0.4))
  .modulate(o0,-0.05)
  .out(o0)

  solid().out()
