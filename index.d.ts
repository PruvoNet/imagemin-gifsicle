import {type Plugin} from 'imagemin';

export interface Options {
	/** Reduce the number of distinct colors in each output GIF (2-256). */
	colors?: number;
	/** Interlace gif for progressive rendering. @default false */
	interlaced?: boolean;
	/**
	 * Select an optimization level between 1 and 3.
	 * @see https://github.com/imagemin/imagemin-gifsicle#optimizationlevel
	 * @default 1
	 */
	optimizationLevel?: 1 | 2 | 3;
}

declare const imageminGifsicle: (options?: Options) => Plugin;

export default imageminGifsicle;
