import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

export default function () {

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 250,
          background: '#D9CB04',
          width: '100%',
          height: '100%',
          justifyContent:'center',
          textAlign:'center',
          alignContent:"center",
          alignItems:"center",
          fontWeight:"bold"
        }}
      >
        Azguer
      </div>
    )
  )
}