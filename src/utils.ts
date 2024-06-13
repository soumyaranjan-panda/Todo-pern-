import {Client} from 'pg';

export async function getClient(){
    const client = new Client('postgresql://soumyaranjan:eYe-rI0mpBWHzPtj1sM_SA@acidic-buffalo-4998.7s5.aws-ap-south-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full');
    await client.connect();
    return client;
}
//hey there