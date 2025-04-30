import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/dqj0xg3zv/image/upload/v1698236484/avatars/default-avatar.png',
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
