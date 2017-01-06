/**
 * Created by shidfar on 05/01/2017.
 */

var users = {
    "1": {
        "id":"1",
        "name":"shidfar",
        "messages":[1, 2, 4]
    },
    "2": {
        "id":"2",
        "name":"shidfar1",
        "messages":[3, 2, 1]
    },
    "3": {
        "id":"3",
        "name":"shidfar11",
        "messages":[1, 3, 1]
    }
};

var messages = {
    1:{id:23, text:"Some text 23 1"},
    2:{id:24, text:"Some text 24 2"},
    3:{id:25, text:"Some text 25 3"},
    4:{id:26, text:"Some text 26 4"}
};

exports.getMessages = function (userid) {
    return users.messages.map(function (mid) {
        return messages[mid];
    })
};

exports.users = users;