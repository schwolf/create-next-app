import {NextResponse} from 'next/server'
import {Config} from 'sst/node/config'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs' 
export const fetchCache = 'force-no-store'
export const revalidate = 0

export async function GET(){
    const secretVal = Config.SECRET_VAL1
    const stage = Config.STAGE
    return NextResponse.json({
        hello: "World", 
        stage: stage, 
        secretVal: secretVal, 
    }, {status: 200})
}