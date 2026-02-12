import Hero from '@/components/Hero';
import ErrorContent from './_components/ErrorContent';

const NotFound = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-background">
            <Hero title="404 Error" breadcrumb="Error" />
            <ErrorContent />
        </div>
    );
};

export default NotFound;
