import React from "react";

export default function DashboardLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <body>dashboard{children}</body>
    );
}
