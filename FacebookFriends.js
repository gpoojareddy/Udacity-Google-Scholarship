/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name : "Pooja",
    friends : 625,
    messages : ["hello, what is up!", "What are you doing?"],
    postMessage : function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage : function(index){
        facebookProfile.messages.splice(index,1);
    },
    addFriend : function(){
        return facebookProfile.friends++;
    },
    removeFriend : function(){
        return facebookProfile.friends--;
    }
};
