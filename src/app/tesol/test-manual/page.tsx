'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TestTechnicalManual from '@/components/TestTechnicalManual';

export default function TestManualPage() {
    const [activePage, setActivePage] = useState('tesol');

    return (
        <main className="min-h-screen bg-editorial-bg">
            <Navigation activePage={activePage} setActivePage={setActivePage} />
            <div className="pt-20">
                <TestTechnicalManual />
            </div>
            <Footer setActivePage={setActivePage} />
        </main>
    );
}
