import SenseiClient from '@l2-technology/sensei-client';

const senseiHost = 'https://nap.fyi/';
const senseiClient = new SenseiClient({ basePath: senseiHost });

export default senseiClient;