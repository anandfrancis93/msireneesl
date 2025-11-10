import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume - Ms. Irene | ESL Instructor',
  description: 'Download the professional resume of Ms. Irene, experienced ESL instructor with over 10 years of teaching experience.',
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
