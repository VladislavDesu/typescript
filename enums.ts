// ENUM
const enum Constants {
    dir = "./",
    path = "src/",
    build = "build/"
}

Constants.dir;

// Constants Build JS
// "./" /* dir */;

// ---------------------

enum Directions {
    Top = 2,
    Right = 4,
    Bottom = 6,
    Left = 8
}

Directions[2];
Directions.Right;
Directions["Bottom"];

// Directions Build JS
// var Directions;
// (function (Directions) {
//     Directions[Directions["Top"] = 2] = "Top";
//     Directions[Directions["Right"] = 4] = "Right";
//     Directions[Directions["Bottom"] = 6] = "Bottom";
//     Directions[Directions["Left"] = 8] = "Left";
// })(Directions || (Directions = {}));

export {}