export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <header>
                {/* <h1>Settings</h1> */}
            </header>
            <main>
                {children}
                <div>Hello & Welcome</div>
            </main>
        </div>
    );  
}