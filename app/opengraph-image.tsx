import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "アルファコミュニケーションズ株式会社";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = await readFile(join(process.cwd(), "public/alpha-logo.jpeg"), "base64");

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{width:"100%",height:"100%",display:"flex",alignItems:"center",padding:"76px 92px",background:"linear-gradient(135deg, #ffffff 0%, #edf8ff 58%, #dff2ff 100%)",color:"#102f49",fontFamily:"sans-serif"}}>
      <div style={{display:"flex",width:"100%",alignItems:"center",gap:"48px"}}>
        <img src={`data:image/jpeg;base64,${logo}`} width={170} height={170} alt=""/>
        <div style={{display:"flex",flexDirection:"column"}}>
          <span style={{fontSize:"27px",letterSpacing:"0.16em",color:"#177bc4"}}>ALPHA COMMUNICATIONS</span>
          <strong style={{marginTop:"22px",fontSize:"58px",lineHeight:1.2}}>ALPHA COMMUNICATIONS</strong>
          <span style={{marginTop:"24px",fontSize:"25px",letterSpacing:"0.08em",color:"#587486"}}>TOTAL OFFICE COMMUNICATION PARTNER</span>
        </div>
      </div>
    </div>,
    size,
  );
}
