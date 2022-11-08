namespace SpriteKind {
    export const cursor = SpriteKind.create()
    export const newCursor = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridRow += -1
    cursorY += -10
    drawGrid()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += -1
    cursorX += -10
    drawGrid()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridCol += 1
    cursorX += 10
    drawGrid()
})
function drawGrid () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let gridSpace of row) {
            if (gridSpace == 1) {
                gridSprite = sprites.create(img`
                    f f 7 7 7 7 7 7 7 7 
                    7 f 7 7 7 7 7 7 7 7 
                    7 f f f 7 7 7 7 7 7 
                    7 7 7 f f 7 7 7 7 7 
                    7 7 7 7 f f 7 7 7 7 
                    7 7 7 7 7 f f 7 7 7 
                    7 7 7 7 7 7 f f 7 7 
                    7 7 7 7 7 7 7 f 7 7 
                    7 7 7 7 7 7 7 f f f 
                    7 7 7 7 7 7 7 7 7 7 
                    `, SpriteKind.Player)
                gridSprite.left = currentX
                gridSprite.top = currentY
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
    newCurser.left = currentX
    newCurser.top = currentY
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    cursorGridRow += 1
    cursorY += 10
    drawGrid()
})
let gridSprite: Sprite = null
let currentX = 0
let currentY = 0
let gridSprites: Sprite[] = []
let newCurser: Sprite = null
let grid: number[][] = []
grid = []
for (let row = 0; row <= 11; row++) {
    grid.push([])
    for (let column = 0; column <= 15; column++) {
        grid[row].push(1)
    }
}
newCurser = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 
    3 3 . . . . . . 3 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 . . . . . . . . 3 
    3 3 . . . . . . 3 3 
    3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.cursor)
let cursorGridCol = 0
let cursorGridRow = 0
let cursorX = 0
let cursorY = 0
newCurser.z = 10
drawGrid()
