const bookshelf = require('../config/bookshelf');

const Notification = bookshelf.Model.extend({
   tableName:'notifications'
});

module.exports = bookshelf.model('Notification',Notification);

module.exports.create = (notification) => {
    return new Notification({
        content:notification.content,
        grade_id:notification.grade_id,
        user_id:notification.user_id
    }).save();
};
// notificationID = ID
module.exports.find = async (notificationID) => {
    const notification = await Notification.where('id', notificationID).fetch();
    return notification;
};
// notificationID = ID
module.exports.update = async (notificationID,notification) => {
    await Notification.where('id', notificationID).save({
       content:notification.name,
       sended_bots_at:notification.sended_bots_at || this.sended_bots_at,
       sended_mails_at:notification.sended_mails_at || this.sended_mails_at
    },{
        method: 'update',
        patch: true
    });
    return true;
};
// notificationID = ID
module.exports.delete = async (notificationID) => {
    await Notification.where('id', notificationID).destroy();
    return true;
};
