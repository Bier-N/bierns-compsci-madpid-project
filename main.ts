scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . 
. . . . . . . . . . . b b b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d b b b b . . . . . . . . . . . 
. . . . . . . . b b b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b b b . . . . . . . . 
. . . . . . b b d 1 1 1 1 1 1 1 1 d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 d b b . . . . . . 
. . . . b b d 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 d b b . . . . 
. . . b d 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 d b . . . 
. . b d 1 1 1 1 1 d d d 1 1 1 d d d d d d d d d d d d d d d d d d d 1 1 1 d d d 1 1 1 1 1 d b . . 
. b d 1 1 1 1 1 d d 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d 1 1 1 d d 1 1 1 1 1 d b . 
. b 1 1 1 1 1 d 1 1 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 d 1 1 1 1 1 b . 
b d 1 1 1 1 1 d 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 1 1 1 1 1 1 d b 
b 1 1 1 1 1 d 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d 1 d 1 1 1 1 1 b 
b 1 1 1 1 1 d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d 1 1 1 1 1 b 
b 1 1 1 1 1 d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b d 1 1 1 1 1 b 
b 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b 1 1 1 1 1 1 b 
b d 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b d 1 1 1 1 1 d b 
. b 1 1 1 1 1 1 1 d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b d 1 1 1 1 1 1 b . 
. b d 1 1 1 1 1 1 1 d b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b b d 1 1 1 1 1 1 d b . 
. . b d 1 1 1 1 1 1 1 1 d b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d b b d 1 1 1 1 1 1 1 d b . . 
. . . b d 1 1 1 1 1 1 1 1 1 d b b b b b b d d d d d d d d d d d d d d 1 1 1 1 1 1 1 1 1 d b . . . 
. . . . b b d 1 1 1 1 1 1 1 1 1 1 1 d b b b b b b b b b d d d 1 1 1 1 1 1 1 1 1 1 1 d b b . . . . 
. . . . . . b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d b b . . . . . . 
. . . . . . . . b b b d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d b b b . . . . . . . . 
. . . . . . . . . . . b b b b b d d d 1 1 1 1 1 1 1 1 1 1 1 d d d b b b b b . . . . . . . . . . . 
. . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
info.setScore(0)
mySprite.setPosition(80, 120)
mySprite.say("You have one minute! Catch as many as you can!")
pause(6000)
info.startCountdown(60)
let mySprite2 = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Food)
mySprite2.setPosition(Math.randomRange(20, 140), 0)
for (let index = 0; index < 120; index++) {
    mySprite2.y += 1
    pause(10)
}
if (mySprite.overlapsWith(mySprite2)) {
    info.changeScoreBy(1)
    mySprite2.setPosition(Math.randomRange(20, 140), 0)
    mySprite2.vy += 2
    for (let index = 0; index < 120; index++) {
        mySprite2.y += 1
        pause(10)
    }
} else {
    mySprite2.setPosition(Math.randomRange(20, 140), 0)
    for (let index = 0; index < 120; index++) {
        mySprite2.y += 1
        pause(10)
    }
}
