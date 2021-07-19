module.exports = (sequelize, DataTypes) => {

    const MAESitRep = sequelize.define("MAESitRep" , {
        attendancest1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attendancest2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attendancesto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fourhourspatientst1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fourhourspatientst2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fourhourspatientsto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fourtwelvehourspatients: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
       twelvehourspatients: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        emergencyadmissionst1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        emergencyadmissionst2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        emergencyadmissionsto: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        admissionstother: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return MAESitRep

};