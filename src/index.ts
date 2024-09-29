import { name } from './common/config';
import { logger } from './common/logger';
import { Greeter } from './lib/greeter';

logger.info(Greeter(name));
