# sequelize model:generate --name user --attributes username:string,email:string,password:string
# sequelize model:generate --name collection --attributes plant_id:integer,user_id:integer
# sequelize model:generate --name wishlist --attributes plant_id:integer,user_id:integer
# sequelize model:generate --name sensor --attributes user_id:integer,data:integer
sequelize model:generate --name plant_collection --attributes plant_name:string,plant_id:integer,moisture:string,temperature_range:string,shade_tolerance:string,image_url:string
