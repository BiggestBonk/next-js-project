import postgres from 'postgres'

const connectionString =
  'postgresql://neondb_owner:npg_Wmqu9Dv0tGTQ@ep-morning-sunset-a7207zvq.ap-southeast-2.aws.neon.tech/neondb?sslmode=require'

console.log('Connecting to:', connectionString.split('@')[1])

export const sql = postgres(connectionString, { ssl: 'require' })
