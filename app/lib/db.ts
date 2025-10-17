import postgres from 'postgres'

console.log('=== DB Connection Debug ===')
console.log('POSTGRES_URL env var:', process.env.POSTGRES_URL)
console.log('POSTGRES_URL type:', typeof process.env.POSTGRES_URL)
console.log('POSTGRES_URL length:', process.env.POSTGRES_URL?.length)
console.log('========================')

export const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })
