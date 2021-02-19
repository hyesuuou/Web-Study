const Sequelize = require('sequelize');

// 사용자 정보를 저장하는 모델
module.exports = class User extends Sequelize.Model {
    static init(sequelize){
        return super.init ({
            email:{
                type: Sequelize.STRING(40),
                allowNull: true,
                unique: true,
            },
            nick: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            provider: {
                type: Sequelize.STRING(10),
                allowNull: false,
                defaultValue: 'local',
            },
            snsId: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    
    static associate(db) {
        db.User.hasMany(db.Post);
        db.User.belogsToMany(db.User,{
            foreignKey: 'followingId',
            as: 'Followers',
            through: 'Follow',
        });
        db.User.belogsToMany(db.User,{
            foreignKey: 'followerId',
            as: 'Followings',
            through: 'Follow',
        });
    }
};