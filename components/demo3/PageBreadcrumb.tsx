import Link from "next/link";

type PageBreadcrumbProps = {
  current: string;
  homeHref?: string;
  parents?: Array<{ label: string; href: string }>;
};

export function PageBreadcrumb({ current, homeHref = "/demo3", parents = [] }: PageBreadcrumbProps) {
  return <nav className="pageBreadcrumb" aria-label="パンくずリスト">
    <ol>
      <li><Link href={homeHref}>HOME</Link></li>
      {parents.map(({ label, href }) => <li key={href}><Link href={href}>{label}</Link></li>)}
      <li><strong aria-current="page">{current}</strong></li>
    </ol>
  </nav>;
}
