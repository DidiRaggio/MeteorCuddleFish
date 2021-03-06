// Users = new Meteor.Collection('users');

// UserSchema = new SimpleSchema({
// 	name: {
// 		type: String,
// 		label: "Name"
// 	},
// 	pass: {
// 		type: String,
// 		label: "Password"
// 	},
// 	desc: {
// 		type: String,
// 		label: "Description"
// 	},
// 	author: {
// 		type: String,
// 		label: "Author",
// 		autoValue: function() {
// 			return this.userId
// 		}
// 	},
// 	createdAt: {
// 		type: Date,
// 		label: "Created At",
// 		autoValue: function(){
// 			return new Date()
// 		}
// 	}
// });

// Users.attachSchema( UserSchema );

// Schema = {};

// Schema.UserCountry = new SimpleSchema({
//     name: {
//         type: String
//     },
//     code: {
//         type: String,
//         regEx: /^[A-Z]{2}$/
//     }
// });

// Schema.UserProfile = new SimpleSchema({
//     firstName: {
//         type: String,
//         optional: true
//     },
//     lastName: {
//         type: String,
//         optional: true
//     },
//     birthday: {
//         type: Date,
//         optional: true
//     },
//     gender: {
//         type: String,
//         allowedValues: ['Male', 'Female'],
//         optional: true
//     },
//     organization : {
//         type: String,
//         optional: true
//     },
//     website: {
//         type: String,
//         regEx: SimpleSchema.RegEx.Url,
//         optional: true
//     },
//     bio: {
//         type: String,
//         optional: true
//     },
//     country: {
//         type: Schema.UserCountry,
//         optional: true
//     }
// });

// Schema.User = new SimpleSchema({
//     username: {
//         type: String,
//         // For accounts-password, either emails or username is required, but not both. It is OK to make this
//         // optional here because the accounts-password package does its own validation.
//         // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
//         optional: true,
//         custom: function () {
//             console.log(this);
//         }
//     },
//     emails: {
//         type: Array,
//         // For accounts-password, either emails or username is required, but not both. It is OK to make this
//         // optional here because the accounts-password package does its own validation.
//         // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
//         optional: true,
//         custom: function () {
//             console.log(this);
//         }
//     },
//     "emails.$": {
//         type: Object
//     },
//     "emails.$.address": {
//         type: String,
//         regEx: SimpleSchema.RegEx.Email
//     },
//     "emails.$.verified": {
//         type: Boolean
//     },
//     // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
//     registered_emails: { 
//         type: [Object], 
//         optional: true,
//         blackbox: true 
//     },
//     createdAt: {
//         type: Date
//     },
//     profile: {
//         type: Schema.UserProfile,
//         optional: true
//     },
//     // Make sure this services field is in your schema if you're using any of the accounts packages
//     services: {
//         type: Object,
//         optional: true,
//         blackbox: true
//     },
//     // Add `roles` to your schema if you use the meteor-roles package.
//     // Option 1: Object type
//     // If you specify that type as Object, you must also specify the
//     // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
//     // Example:
//     // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
//     // You can't mix and match adding with and without a group since
//     // you will fail validation in some cases.
//     roles: {
//         type: Object,
//         optional: true,
//         blackbox: true
//     },
//     // Option 2: [String] type
//     // If you are sure you will never need to use role groups, then
//     // you can specify [String] as the type
//     roles: {
//         type: [String],
//         optional: true
//     },
//     // In order to avoid an 'Exception in setInterval callback' from Meteor
//     heartbeat: {
//         type: Date,
//         optional: true
//     }
// });

// Meteor.users.attachSchema(Schema.User);

Schema = {};
Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    // organization : {
    //     type: String,
    //     regEx: /^[a-z0-9A-z .]{3,30}$/,
    //     optional: true
    // },
});

Schema.User = new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        autoform: {
            type: "hidden"
        }
    },
    username: {
        type: String,
        label: "Username",
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        custom: function () {
            console.log(this);
        }
    },
    emails: {
        optional: true,
        type: [Object],
        custom: function () {
            console.log(this);
        }
    },
    "emails.$.address": {
        optional: true,
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        optional: true,
        type: Boolean
    },
    createdAt: {
         type: Date,
         label: "Created At",
         autoValue: function(){
             return new Date()
         },
         autoform: {
            type: "hidden"
         }
     },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // password: {
    //     type: String,
    //     blackbox: true
    // },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Note that when using this package, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    // roles: {
    //     type: String,
    //     optional: true,
    //     blackbox: true,
    //     allowedValues: ['booker', 'provider', 'admin']
    // }
});

Meteor.users.attachSchema(Schema.User);