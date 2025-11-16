export function TextLimit({ content, limit }) {
    const textLimited = content.length > limit ? `${content.substring(0, limit)}...` : content;

    return <p>{textLimited}</p>;
}