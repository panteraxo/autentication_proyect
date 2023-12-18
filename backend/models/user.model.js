import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true,
    },
    email:{
        type:String,
        require:true,
        unique: true,
    },
    password:{
        type:String,
        require:true,
        
    },
    profilePicture:{
        type:String,
        default:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQMEAgUGB//EADIQAQACAQEGAggGAwEAAAAAAAABAgMRBBIhMUFRYXEFExUiMlOBkUJioaKx0TNSchT/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AP3EAAAAAAHE5Kx1B2KpzVjlEyj1/wCX9QXCqM1fGHUZKz1B2AAAAAAAAAAAA4veK+aMuTd4RzZ5mZ5g6vktbnPDwcoEAABKAHdL2ryldTJFuE8JZkwo2CrFk1923NaAAAAAAA4yX3Y8XbLktvWnsDmeaAQDz4DBt2fW04qTpEfF4gvzbbjpOlffnw5KPaFtf8caebGKPSxbdjtOl4mn11hp11jWOMPEatiz+rvFLT7tuHkD0RKEEtGG+9Gk84ZnVLbtolRrERySAAAADjLOlJZl+efd07yzgAIIvO7SbdomXizOs6zzl7WSN7HeO9Zh4vLgoACAAPYwW38NLdZiHavZ6zXBSJ7LEUShINGGdaR4LFOzzzhcoAAAAp2j8Kho2j4YnszoAAJeXtuCcWTej4Lfo9NFqxeJraImJ6SDxRty7Bx1xWjTtKn/AMeblux91FC7ZcE5snH4I+Jfi2CdY9ZaIjtDbSlcdd2lYiAT00AQAAXbPzt5L1Gzxzn6L1AAAAHGWNaSzNjJeu5aYByDjPlrhpvW49o7oOr3rSu9e0RHizX2/HHw1m36MOXLfLabXnWXCjd7Qj5f7j2hHy/3MII3e0I+X+51Xb6TPvVmPKdXngPZx5KZK60tE+XR08Wl7Y7Rak6TD1dnzRmpryt1gVaDqtd60R3QX4Y0p5rERwjRKgAAAAry03o1jnCwBjeZt+TezbvSnD6vZy49ferHHs8HPxz5P+p/kFYAgAAAAv2PJ6vPXjwtwlQmvOPOBXtNGGmkb09XOLHrO9b6QvAAAAAAAAAYts9H48+t6+7k7920B85m2fLgnTLSY8Y4xKp9PNYmNJiJjtLJl9H7PeZmKbsz1r/QPDHp29Ef6ZvvVx7Jy/Np9pEeePTr6In8eb7VaMXo3Z6ab1ZvP5v6B5GHDkzzpipM/wAPV2P0dTFpfL7146dIbq1rWNKxER2hIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQBGvGCs8vIALSa9AAmdEb06gCbcka8NQArx5kdOPMAJmYdRzAEgAAA//Z",
    },
},{timestamps:true});

const User = mongoose.model('User', userSchema);
export default User;