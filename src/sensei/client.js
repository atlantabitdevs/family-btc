// src/utils/sensei.ts
import SenseiClient from '@l2-technology/sensei-client';

const senseiHost = 'http://localhost:3000';
const senseiClient = new SenseiClient({ basePath: senseiHost });

export default senseiClient;