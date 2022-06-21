import Link from 'next/link';
import { useRouter } from 'next/router';

function ActiveLink({ text, href }) {
  const { asPath } = useRouter();

  const style = {
    color: '#0070f3',
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <Link href={href}>
      <a style={asPath === href ? style : null}>{text}</a>
    </Link>
  );
}

export default ActiveLink;
