'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useContext, useRef } from 'react';

function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 1 }} // New page is already there
                animate={{ opacity: 1 }}
                exit={{
                    rotateY: -120, // Turn further to simulate a complete flip
                    x: -100, // Move slightly left
                    skewY: 5, // Skew simulates the drag/flexibility of paper
                    zIndex: 50,
                    boxShadow: '-40px 10px 80px rgba(0,0,0,0.4)', // Deeper shadow
                    transition: { duration: 0.9, ease: [0.645, 0.045, 0.355, 1.000] }
                }}
                className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden bg-editorial-bg perspective-[2000px]"
                id="page-content"
                style={{
                    transformOrigin: 'left center',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                }}
            >
                <FrozenRouter>{children}</FrozenRouter>

                {/* Deep Spine Shadow (The Crease) */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-50"
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 1 }}
                    style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 15%, transparent 100%)' }}
                    transition={{ duration: 0.9 }}
                />

                {/* Page Curve Highlight */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-50"
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0.5 }}
                    style={{ background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.9) 8%, transparent 25%)' }}
                    transition={{ duration: 0.9 }}
                />
            </motion.div>
        </AnimatePresence>
    );
}
