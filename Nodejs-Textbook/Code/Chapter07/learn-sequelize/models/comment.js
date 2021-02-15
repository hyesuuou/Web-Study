const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            comment: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
                defalutValue: Sequelize.NOW,
            },
        
        },{
            sequelize,
            timestamps: false,  // 자동으로 날짜 컬럼을 추가하는 기능
            modelName: 'Comment', // 모델 이름을 설정한다.(노드 프로젝트에서 사용) 
            tableName: 'comments', // 실제 데이터베이스의 테이블 이름이 된다.
            paranoid: false, // deletedAt
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',         
        });
    }

    static associations(db){}
};