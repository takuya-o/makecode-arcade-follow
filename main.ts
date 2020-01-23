let はじめてのスプライト = sprites.create(img`
8 8 8 8 8 . . . . . . . . . . . 
8 . . . 8 . . . . . . . . . . . 
8 . . . 8 . . . . . . . . . . . 
8 . . . 8 . . . . . . . . . . . 
8 8 8 8 8 . . . 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 . . . 8 . . . 
. 8 8 8 8 8 . 8 8 . . . 8 . . . 
. 8 . . 8 . . . 8 8 . . 8 . . . 
. 8 . . 8 . . 8 8 8 8 8 8 . . . 
. 8 . . 8 . . . 8 . . . . . . . 
. 8 . . . 8 8 8 . . . . . . . . 
. . 8 8 . . . . . . . . . . . . 
. . . . 8 8 . 8 8 8 . . . . . . 
. . . . . . . 8 . 8 . . . . . . 
. . . . . . . 8 8 8 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(はじめてのスプライト)
let myEnemy = sprites.create(img`
. f f f . . . . . . . . f f f . 
f f c . . . . . . . f c b b c . 
f c c . . . . . . f c b b c . . 
c f . . . . . . . f b c c c . . 
c f f . . . . . f f b b c c . . 
f f f c c . c c f b c b b c . . 
f f f c c c c c f b c c b c . . 
. f c 3 c c 3 b c b c c c . . . 
. c b 3 b c 3 b b c c c c . . . 
c c b b b b b b b b c c . . . . 
c b 1 b b b 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
f b c b b b c b b b b f . . . . 
. f 1 f f f 1 b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, SpriteKind.Enemy)
はじめてのスプライト.setPosition(80, 60)
myEnemy.follow(はじめてのスプライト, 10)
