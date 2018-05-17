class Location(object):
    
    def __init__(self, x, y):
        self.x = x
        self.y = y
        
    def move(self, deltaX, deltaY):
        return Location(self.x + deltaX, self.y + deltaY)
    
    def getX(self):
        return self.x
    
    def getY(self):
        return self.y
    
    def distFrom(self, other):
        ox = other.x
        oy = other.y
        xDist = self.x - ox
        yDist = self.y - oy
        return (xDist**2 + yDist**2)**0.5
    
    def __str__(self):
        return '<' + str(self.x) + ', ' + str(self.y) + '>'

class Field(object):
    
    def __init__(self):
        self.walkers = {}
        
    def addWalker(self, walker, loc):
        if walker in self.walkers:
            raise ValueError('Duplicate walker')
        else:
            self.walkers[walker] = loc
            
    def moveWalker(self, walker):
        if not walker in self.walkers:
            raise ValueError('Walker not in field')
        xDist, yDist = walker.takeStep()
        currentLocation = self.walkers[walker]
        #use move method of Location to get new location
        self.walkers[walker] = currentLocation.move(xDist, yDist)
        
    def getLoc(self, walker):
        if not walker in self.walkers:
            raise ValueError('Walker not in field')
        return self.walkers[walker]



import math

class Walker(object):
    def __init__(self, name):
        self.name = name

    
class LatticeWalker(Walker):
    def takeStep(self):
        stepChoices = [(0.0,1.0), (0.0,-1.0), (1.0, 0.0), (-1.0, 0.0)]
        return (random.choice(stepChoices))

class AngledWalker(Walker):
    def takeStep(self):
        angle = random.uniform(0,360)
        return (math.cos(angle), math.sin(angle))



import random

def walk(f, w, numsteps):
    start = f.getLoc(w)
    for s in range(numsteps):
        f.moveWalker(w)
    return start.distFrom(f.getLoc(w))

def LsimWalks(numsteps, numtrials):
    homer = LatticeWalker('Homer')
    origin = Location(0,0)
    distances = []
    for t in range(numtrials):
        f = Field()
        f.addWalker(homer, origin)
        distances.append(walk(f, homer, numtrials))
    return distances

def AsimWalks(numsteps, numtrials):
    homer = AngledWalker('Homer')
    origin = Location(0,0)
    distances = []
    for t in range(numtrials):
        f = Field()
        f.addWalker(homer, origin)
        distances.append(walk(f, homer, numtrials))
    return distances

def walkerTest(walkertype, numtrials):
    for numsteps in [10, 100, 1000, 10000, 1000000]:
        distances = simWalks(walkertype, numsteps, numtrials)
        print 'Random walk of ' + str(numsteps) + ' steps'
        print ' Mean =', sum(distances)/len(distances)
        print ' Max =', max(distances),'Min =', min(distances)

from pylab import plot,show

Lavgdist = [0]
Aavgdist = [0]
print 'running...'
for i in range(1, 1000):
    Lavgdist.append(sum(LsimWalks(i,50))/50)
#    Aavgdist.append(sum(LsimWalks(i,2))/2)

plot(Lavgdist, 'r+')
#graphs distance from the origin over 1000 trials
show()
