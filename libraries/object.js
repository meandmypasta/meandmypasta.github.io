
var WorldObject = class WorldObject {

    
    constructor(world, x, y, object_width=0, object_height=0) {
        this.world = world;
        this.x = x;
        this.y = y;
        this.object_width = object_width;
        this.object_height = object_height;
    }
    
    get_x() {
        return this.x
    }
    
    get_y() {
        return this.y
    }
    
    draw_object() {}
    
    update_object() {}
    
    get_rect_points() {}
    
    interact() {}
}