import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = () => {
    const [quote, setQuote] = useState({ text: '', author: '' });
    const [loading, setLoading] = useState(true);

    const getQuote = async () => {
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            const data = await response.json();
            setQuote({
                text: data.quote,
                author: data.author
            });
        }
        catch (error) {
            console.error('Error fetching quote:', error);
            setQuote({ text: 'Learning never exhausts the mind.', author: 'Leonardo da Vinci' });
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        getQuote();

    }, []);

    if (loading) return null;

    return (
        <div className="quote-container">
            <blockquote>
                "{quote.text}"
            </blockquote>
            <cite>- {quote.author}</cite>
        </div>
    );
};

export default Quote;
