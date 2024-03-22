import MainNavigation from "@/app/ui/common/menu";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className={"flex h-screen"}>
            <MainNavigation/>
            <div className={"flex-grow p6 md:overflow-y-auto md:p12"}>
                {children}
            </div>
        </div>
    );
}