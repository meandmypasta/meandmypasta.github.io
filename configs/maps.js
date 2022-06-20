
stoner_room_map = {
    'grid_size': 30,
    'tiles': [
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 3, 4, 1, 1, 1, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 1, 1, 2, 2, 1, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 1, 1, 2, 2, 1, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 1, 1, 1, 1, 1, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, 29, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
    ],
    'passages': [ // maps tile coordinates to (new_map_idx, entry_coordinates_tubple)
        {i: 8, j: 11, destination_id: 0, new_x: 30 * 10, new_y: 30 * 13}
    ],
    'objects': [
        stoner_dude_1
    ]
}

room_map = {
    'grid_size': 30,
    'tiles': [
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, 34, 35, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, -1, -1, -1,],
        [-1, -1, -1, 32, 36, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, -1, -1, -1,],
        [-1, -1, -1, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, 29, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,],
    ],
    'passages': [
        {i: 8, j: 11, destination_id: 0, new_x: 30 * 14, new_y: 30 * 7}
    ],
    'objects': [
        test_canvas
    ]
}

home_map = {
    'grid_size': 30,
    'tiles': [
        [9, 9, 9, 9, 9, 9, 13, 21, 18, 18, 18, 18, 18, 18, 23, 5, 5, 5, 5, 5],
        [9, 14, 15, 9, 10, 9, 13, 19, 19, 19, 19, 19, 19, 19, 22, 6, 6, 6, 6, 6],
        [9, 16, 17, 9, 9, 9, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
        [9, 9, 9, 9, 10, 9, 13, 0, 0, 0, 0, 0, 47, 48, 48, 49, 0, 0, 6, 6],
        [9, 9, 9, 9, 9, 14, 15, 0, 0, 0, 0, 0, 40, 29, 41, 42, 0, 0, 5, 5],
        [9, 9, 9, 9, 9, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6],
        [9, 9, 9, 9, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
        [9, 9, 9, 9, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6],
        [9, 9, 9, 9, 13, 0, 0, 0, 50, 51, 51, 52, 0, 0, 0, 0, 0, 0, 5, 5],
        [9, 9, 9, 9, 13, 0, 0, 0, 53, 54, 54, 55, 0, 0, 0, 0, 0, 0, 6, 6],
        [9, 9, 9, 9, 13, 0, 0, 0, 37, 38, 45, 39, 0, 0, 0, 0, 0, 0, 5, 5],
        [9, 9, 9, 9, 13, 0, 0, 0, 40, 29, 41, 42, 56, 0, 0, 0, 0, 0, 6, 6],
        [9, 9, 9, 9, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [9, 9, 9, 9, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [9, 21, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
    ],
    'passages': [
        {i: 13, j: 4, destination_id: 1, new_x: 30 * 8, new_y: 30 * 10},
        {i: 9, j: 11, destination_id: 2, new_x: 30 * 8, new_y: 30 * 10},
        {i: 19, j: 12, destination_id: 3, new_x: 30 * 2, new_y: 30 * 19}
    ],
    'objects': [
        old_man_1,
        stoner_house_sign
    ]

}

fields_map = {
    'grid_size': 30,
    'tiles': [
        [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 23, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 23, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        [19, 21, 18, 18, 18, 18, 18, 18, 18, 18, 23, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 20, 19, 19, 19, 19, 57, 19, 19, 19, 22, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6],
        [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 1],
        [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 1],
        [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 1, 1],
        [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 1, 1],
        [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1],
        [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 1, 1, 1],
        [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    'passages': [
        {i: 0, j: 19, destination_id: 0, new_x: 30 * 18, new_y: 30 * 13},
        {i: 6, j: 3, destination_id: 4, new_x: 30 * 9, new_y: 30 * 13}
    ],
    'objects': [
        old_man_2
    ],
    'scrolling': true

}

cave_map = {
    'grid_size': 30,
    'tiles': [
        [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 64, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 58, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
        [60, 60, 60, 60, 60, 62, 58, 58, 58, 58, 59, 58, 58, 58, 61, 60, 60, 60, 60, 60, 60],
    ],
    'passages': [ // maps tile coordinates to (new_map_idx, entry_coordinates_tubple)
        {i: 10, j: 14, destination_id: 3, new_x: 30 * 6, new_y: 30 * 5}
    ],
    'objects': [
        stoner_dude_2,
        cave_sign
    ]
}

map_registry = {
    0: home_map,
    1: room_map,
    2: stoner_room_map,
    3: fields_map,
    4: cave_map
}