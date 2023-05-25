import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const { GRID_COLUMNS, GRID_GAP, ROW_GAP, NAME_FONT_SIZE, DESC_FONT_SIZE, DESG_FONT_SIZE, RATING_SIZE } = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	title: {
		type: 'string',
	},
	titleColor: {
		type: 'string',
	},
	titleHoverColor: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	designationColor: {
		type: 'string',
	},
	descriptionColor: {
		type: 'string',
	},
	boxBgColor: {
		type: 'string',
	},
	designationHoverColor: {
		type: 'string',
	},
	descriptionHoverColor: {
		type: 'string',
	},
	boxBgHoverColor: {
		type: 'string',
	},
	ratingColor: {
		type: 'string',
	},
	...generateResRangleControlAttributes({
		controlName: GRID_COLUMNS,
		defaults: {
			[`${GRID_COLUMNS}DeskRange`]: 3,
			[`${GRID_COLUMNS}TabRange`]: 2,
			[`${GRID_COLUMNS}MobRange`]: 1,
		},
	}),
	...generateResRangleControlAttributes({
		controlGap: GRID_GAP,
		defaults: {
			[`${GRID_GAP}DeskRangeGap`]: 30,
			[`${GRID_GAP}TabRangeGap`]: 30,
			[`${GRID_GAP}MobRangeGap`]: 30,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: ROW_GAP,
		defaults: {
			[`${ROW_GAP}DeskRange`]: 30,
			[`${ROW_GAP}TabRange`]: 30,
			[`${ROW_GAP}MobRange`]: 30,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: NAME_FONT_SIZE,
		defaults: {
			[`${NAME_FONT_SIZE}DeskRange`]: 22,
			[`${NAME_FONT_SIZE}TabRange`]: 18,
			[`${NAME_FONT_SIZE}MobRange`]: 16,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: DESG_FONT_SIZE,
		defaults: {
			[`${DESG_FONT_SIZE}DeskRange`]: 22,
			[`${DESG_FONT_SIZE}TabRange`]: 18,
			[`${DESG_FONT_SIZE}MobRange`]: 16,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: DESC_FONT_SIZE,
		defaults: {
			[`${DESC_FONT_SIZE}DeskRange`]: 22,
			[`${DESC_FONT_SIZE}TabRange`]: 18,
			[`${DESC_FONT_SIZE}MobRange`]: 16,
		},
	}),
	...generateResRangleControlAttributes({
		controlName: RATING_SIZE,
		defaults: {
			[`${RATING_SIZE}DeskRange`]: 22,
			[`${RATING_SIZE}TabRange`]: 18,
			[`${RATING_SIZE}MobRange`]: 16,
		},
	}),
};

export default attributes;
