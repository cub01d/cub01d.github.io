import pylab
import random
import math


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



def calcr(y,yhat):
    # r^2 = (ssm-sse)/ssm
    ybar = float(sum(y))/len(y)
    ssm = sum(  [(y[i] - ybar)**2 for i in range(len(y))  ] )
    sse = sum(  [(y[i] - yhat[i])**2 for i in range(len(y))])

    return (((ssm-sse)/float(ssm))**.5)





class Walker(object):
    def __init__(self, name):
        self.name = name
    def __str__(self):
        return 'This walker is named ' + self.name
    
class LatticeWalker(Walker):
    def takeStep(self):
        stepChoices =\
            [(0.0,1.0), (0.0,-1.0), (1.0, 0.0), (-1.0, 0.0)]
        return random.choice(stepChoices)


def walk(f, w, numSteps):
    start = f.getLoc(w)
    for s in range(numSteps):
        f.moveWalker(w)
    return(start.distFrom(f.getLoc(w)))



#set line width
pylab.rcParams['lines.linewidth'] = 6
#set font size for titles
pylab.rcParams['axes.titlesize'] = 20
#set font size for labels on axes
pylab.rcParams['axes.labelsize'] = 20
#set size of numbers on x-axis
pylab.rcParams['xtick.major.size'] = 5
#set size of numbers on y-axis
pylab.rcParams['ytick.major.size'] = 5
#set size of markers
pylab.rcParams['lines.markersize'] = 10

LmeanDistances = []
AmeanDistances = []
  
def walkerTestP1(numTrials = 50):

    squareRootOfSteps = []
    for i in range(100):
        squareRootOfSteps.append(i**.5)
    for walker in [LatticeWalker, AngledWalker]:
        for numSteps in range(100):
            distances = simWalks(numSteps, numTrials, walker)
            [LmeanDistances,AmeanDistances][walker==AngledWalker].append(sum(distances)/len(distances))

    #latticewalker
    pylab.title('LatticeWalker Mean Distance from Origin')
    pylab.xlabel('Number of Steps')
    pylab.ylabel('Average Distance from Origin (50 trials)')
    pylab.plot(range(100), LmeanDistances, 'ro', label = 'LatticeWalker Mean Distance')
    LmeanDistances.remove(0.0)

    x = map(math.log, range(1,100))
    ly = map(math.log, LmeanDistances)
    ml,bl = pylab.polyfit(x, ly, 1)
    lhat = [math.e**bl * n**ml for n in range(100)]
    pylab.plot(range(100), lhat, 'r-', label = 'LatticeWalker Predicted Distance')
    pylab.legend()
    pylab.show()

    pylab.xlabel('Log ( Number of Steps )')
    pylab.ylabel('Log ( Average Distance (50 trials) )')
    pylab.plot(x, ly, 'ro', label = 'Log ( LatticeWalker Mean Distance )')
    pylab.plot(x, [ml*i + bl for i in x], 'r-', label = 'Log ( LatticeWalker Predicted Distance )')
    pylab.legend()
    pylab.show()

    pylab.title('LatticeWalker Residual Plot')
    pylab.xlabel('Number of Steps')
    pylab.ylabel('Residual Distance')
    LmeanDistances.insert(0,0.0)
    pylab.plot(range(100), [LmeanDistances[i]-lhat[i] for i in range(100)], 'ro')
    pylab.plot(range(100), [0 for i in range(100)], 'r-')
    pylab.show()

    
    #Angledwalker
    pylab.title('AngledWalker Mean Distance from Origin')
    pylab.xlabel('Number of Steps')
    pylab.ylabel('Average Distance from Origin (50 trials)')
    pylab.plot(range(100), AmeanDistances, 'b^', label = 'AngledWalker Mean distance')
    AmeanDistances.remove(0.0)

    ay = map(math.log, AmeanDistances)
    ma,ba = pylab.polyfit(x, ay, 1)
    ahat = [math.e**ba * n**ma for n in range(100)]
    pylab.plot(range(100), ahat, 'b-', label = 'AngledWalker Predicted Distance')
    pylab.legend()
    pylab.show()

    pylab.xlabel('Log ( Number of Steps )')
    pylab.ylabel('Log ( Average Distance (50 trials) )')
    pylab.plot(x, ay, 'bo', label = 'Log ( AngledWalker Mean Distance )')
    pylab.plot(x, [ma*i + ba for i in x], 'b-', label = 'Log ( AngledWalker Predicted Distance )')
    pylab.legend()
    pylab.show()

    pylab.title('AngledWalker Residual Plot')
    pylab.xlabel('Number of Steps')
    pylab.ylabel('Residual Distance')
    AmeanDistances.insert(0,0.0)
    pylab.plot(range(100), [AmeanDistances[i]-ahat[i] for i in range(100)], 'bo')
    pylab.plot(range(100), [0 for i in range(100)], 'b-')
    pylab.show()

    
    rL = calcr(LmeanDistances, lhat)
    rA = calcr(AmeanDistances, ahat)
    
#    print 'LatticeWalker Mean distances: ',LmeanDistances
    print 'rL: ', rL
    print 'rL^2: ', rL**2
#    print 'AngledWalker Mean distances: ', AmeanDistances
    print 'rA: ', rA
    print 'rA^2: ', rA**2







#Look at different kinds of walkers

class AngledWalker(Walker):
    def takeStep(self):
        angle = random.randrange(360)*math.pi/180.0
        return ( math.cos(angle), math.sin(angle))

# New version of simWalks

def simWalks(numSteps, numTrials, wClass):
    homer = wClass('Homer')
    origin = Location(0, 0)
    distances = []
    for t in range(numTrials):
        f = Field()
        f.addWalker(homer, origin)
        distances.append(walk(f, homer, numSteps))
    return distances


def walkerTestP(numTrials = 50):
    stepsTaken = [10, 100, 1000, 10000]
    for wClass in (LatticeWalker, AngledWalker):
        meanDistances = []
        for numSteps in range(100):
            distances = simWalks(numSteps, numTrials, wClass)
            meanDistances.append(sum(distances)/len(distances))
        pylab.plot(meanDistances,
                   label = dClass.__name__)
        pylab.title('Mean Distance from Origin')
        pylab.xlabel('Steps Taken')
        pylab.ylabel('Steps from Origin')
        pylab.legend(loc = 'upper left')
    pylab.show()

#walkerTestP()
walkerTestP1()
