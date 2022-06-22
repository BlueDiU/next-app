import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';

const style: CSSProperties = {
  color: '#0070f3',
  fontWeight: 'bold',
  textDecoration: 'underline',
};

interface IProps {
  text: string;
  href: string;
}

function ActiveLink({ text, href }: IProps) {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
}

export default ActiveLink;
