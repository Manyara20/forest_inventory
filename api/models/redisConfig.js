import Redis from 'ioredis';

export const redisClient = new Redis({
    port: 6379, 
    host: "127.0.1.1",
  });


  export const tryRedisConnection= async ()=>{
    try {
        const result = await redisClient.ping();
        console.log('Connected to Redis:', result);
    } 
    catch (error) {
        console.error('Error connecting to Redis:', error);
    }

  }