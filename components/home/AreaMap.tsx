type Pin = { name: string; x: number; y: number; side: "l"|"r"; hq?: boolean };

const pins: Pin[] = [
  { name:"本社（福岡）", x:46, y:25.5, side:"l", hq:true },
  { name:"山口営業所", x:62, y:15, side:"r" },
  { name:"佐賀営業所", x:36, y:32.5, side:"l" },
  { name:"長崎営業所", x:29, y:44, side:"l" },
  { name:"熊本営業所", x:45, y:49, side:"r" },
  { name:"鹿児島営業所", x:38.5, y:77, side:"r" },
];

export function AreaMap({ mapSrc, className="" }: { mapSrc:string; className?:string }) {
  return <div className={`${className} acMapBox`}>
    <div className="acMapHead"><small>LOCAL NETWORK</small><b>福岡・九州・山口に<span>6</span>拠点</b></div>
    <div className="acMap"><img alt="福岡・九州・山口の対応エリア地図" src={mapSrc}/>{pins.map((pin,index)=><span key={pin.name} className={`acPin acPin--${pin.side}${pin.hq?" hq":""}`} style={{left:`${pin.x}%`,top:`${pin.y}%`,"--delay":`${index*.4}s`} as React.CSSProperties}><i/><em>{pin.name}</em></span>)}</div>
  </div>;
}
