import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { imageURL } from "@/sanity/utils/common.utils";

const imageStyle = (image) => {
    const Margin = (p)=>{
        switch (p) {
            case 'left': return '0 0 0 0';
            case 'center': return '0 auto 0 auto';
            case 'right': return '0 0 0 auto';
            default: break;
        }
    }
    const Width = (w)=>{
        switch (w) {
            case 'half': return '50%';
            case 'full': return '100%';
            default: break; 
        }
    }

    return { width: Width(image.width), margin: Margin(image.position) }
}

const customComponents = {
    // Customize how block content is rendered
    block: {
        // Example: Custom rendering for heading types
        h1: ({ children }) => <h1 className="text-textColor1 text-4xl font-bold">{children}</h1>,
        h2: ({ children }) => <h2 className="text-textColor1 text-3xl font-bold">{children}</h2>,
        h3: ({ children }) => <h3 className="text-textColor1 text-2xl font-bold">{children}</h3>,
        h4: ({ children }) => <h4 className="text-textColor1 text-xl font-bold">{children}</h4>,
        h5: ({ children }) => <h5 className="text-textColor1 text-lg font-bold">{children}</h5>,
        h6: ({ children }) => <h6 className="text-textColor1 text-base font-bold">{children}</h6>,
        normal: ({ children }) => <p className="text-base">{children}<>&nbsp;</></p>,
        blockquote: ({children}) => <q>{children}</q>
    },
    // Customize how marks are rendered
    marks: {
        strong: ({ children }) => <strong className='text-textColor2'>{children}</strong>,
        em: ({ children }) => <em>{children}</em>,
        link: ({ value, children }) => (
            <Link href={value?.href} target={value?.blank?"_blank":''} rel="noopener noreferrer" className="text-buttonColor hover:underline">
                {children}
            </Link>
        ),
        code: ({children}) => <code className='p-1 bg-backgroundColor3 rounded-md'>{children}</code>,
        left: ({children}) => <div className='text-left w-full'>{children}</div>,
        center: ({children}) => <div className='text-center w-full'>{children}</div>,
        right: ({children}) => <div className='text-right w-full'>{children}</div>,
        textColor: ({children, value}) => <span style={{color: value.value}}>{children}</span>,
        highlightColor: ({children, value}) => <span style={{background: value.value}}>{children}</span>
    },
    // Customize how lists are rendered
    list: {
        bullet: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal ml-5">{children}</ol>,
    },
    // Customize how list items are rendered
    listItem: {
        bullet: ({ children }) => <li className="mb-1">{children}</li>,
        number: ({ children }) => <li className="mb-1">{children}</li>,
    },
    // Customize inline elements
    types: {
        image: ({ value }) => (
            <img
                src={imageURL(value)}
                alt={value?.alt || 'Image'}
                className={`block p-1`}
                style={imageStyle(value)}
            />
        ),
    },
};

export default function CustomPortableText({ value }) {
    return <PortableText value={value} components={customComponents} />;
}

