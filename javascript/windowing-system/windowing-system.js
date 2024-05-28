// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (width, height) {
  this.width = width
  this.height = height
}

export function Position(x = 0, y = 0) {
  this.x = x
  this.y = y
}

Position.prototype.move = function (x, y) {
  this.x = x
  this.y = y
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300)
  const newPosition = new Position(100, 150)

  programWindow.resize(newSize)
  programWindow.move(newPosition)

  return programWindow
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(newSize) {
    this.#resizeHeight(newSize.height)
    this.#resizeWidth(newSize.width)
  }

  #resizeHeight(newHeight) {
    const maxHeight = this.screenSize.height - this.position.y

    if (newHeight > maxHeight) {
      this.size.height = maxHeight
    } else if (newHeight < 1) {
      this.size.height = 1
    } else {
      this.size.height = newHeight
    }
  }

  #resizeWidth(newWidth) {
    const maxWidth = this.screenSize.width - this.position.x

    if (newWidth > maxWidth) {
      this.size.width = maxWidth
    } else if (newWidth < 1) {
      this.size.width = 1
    } else {
      this.size.width = newWidth
    }
  }

  move(newPosition) {
    this.#moveX(newPosition.x)
    this.#moveY(newPosition.y)
  }

  #moveX(newX) {
    const maxX = this.screenSize.width - this.size.width - this.position.x

    if (newX > maxX) {
      this.position.x = maxX
    } else if (newX < 0) {
      this.position.x = 0
    } else {
      this.position.x = newX
    }
  }

  #moveY(newY) {
    const maxY = this.screenSize.height - this.size.height - this.position.y

    if (newY > maxY) {
      this.position.y = maxY
    } else if (newY < 0) {
      this.position.y = 0
    } else {
      this.position.y = newY
    }
  }
}
