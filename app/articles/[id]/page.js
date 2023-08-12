// import {useRouter} from "next/router";

const SingleArticle = ({ params }) => {
    // const router = useRouter();
    // const articleId = router.query.id
    return (
        <>
            <h1>An article { params.id }</h1>
        </>
    );
}

export default SingleArticle;
