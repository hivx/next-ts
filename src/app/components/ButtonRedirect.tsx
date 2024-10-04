'use client'
import { StyledButton } from '@/app/styled/Global.styled';
import { useRouter } from 'next/navigation';

interface RedirectProps {
  redirectTo: string;
}

export default function ButtonRedirect({ redirectTo }: RedirectProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/' + redirectTo);
    // redirect('/' + redirectTo);
  };

  return <StyledButton onClick={handleNavigate}>Goto {redirectTo}</StyledButton>;
}
