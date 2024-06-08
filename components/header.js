import Link from "next/link"
export default function Header() {
    return (
        <>
            <p><Link href="/law/1">개인정보보호법</Link></p>
            <p><Link href="/law/2">전자서명법</Link></p>
            <p><Link href="/law/3">정보통신기반보호법</Link></p>
            <p><Link href="/law/4">정보통신망이용촉진및정보보호등에관한법률</Link></p>
            <p><Link href="/law/5">신용정보의이용및보호에관한법률</Link></p>
            <p><Link href="/law/6">전자금융거래법</Link></p>
            <p><Link href="/law/7">통신비밀보호법</Link></p>
            <p><Link href="/law/8">위치정보의보호및이용등에관한법률</Link></p>
        </>
    )
}

{/* <p key={1} className={classes.sidebarItem}>
            <Link href={'/law/1'}>개인정보보호법</Link>
          </p>
          <p key={2} className={classes.sidebarItem}>
            <Link href={'/law/2'}>전자서명법</Link>
          </p>
          <p key={3} className={classes.sidebarItem}>
            <Link href={'/law/3'}>정보통신기반보호법</Link>
          </p>
          <p key={4} className={classes.sidebarItem}>
            <Link href={'/law/4'}>정보통신망이용촉진및정보보호등에관한법률</Link>
          </p>
          <p key={5} className={classes.sidebarItem}>
            <Link href={'/law/5'}>신용정보의이용및보호에관한법률</Link>
          </p>
          <p key={6} className={classes.sidebarItem}>
            <Link href={'/law/6'}>전자금융거래법</Link>
          </p>
          <p key={7} className={classes.sidebarItem}>
            <Link href={'/law/7'}>통신비밀보호법</Link>
          </p>
          <p key={8} className={classes.sidebarItem}>
            <Link href={'/law/8'}>위치정보의보호및이용등에관한법률</Link>
          </p> */}