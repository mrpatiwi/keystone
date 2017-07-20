const keystone = require('../.');

const Types = keystone.Field.Types;

const User = new keystone.List('User', {
	track: true,
	icon: 'user',
});

User.add({
	name: {
		type: Types.Name,
		required: true,
		initial: true,
	},
	email: {
		type: Types.Email,
		required: true,
		index: true,
		initial: true,
	},
	location: {
		type: Types.Location,
		initial: true,
		map: true,
	},
	password: {
		type: Types.Password,
		required: true,
		initial: true,
	},
}, {
	heading: 'Permissions',
}, {
	admin: {
		label: 'Can access Admin interface',
		type: Boolean,
		initial: true,
		default: true,
		index: true,
	},
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function canAccessKeystone () {
	return this.admin;
});

/**
 * Registration
 */
User.defaultSort = '-createdAt';
User.defaultColumns = 'name, email, admin';
User.register();
