import { ACTIONS_CORS_HEADERS, ActionGetResponse, ActionPostRequest, ActionPostResponse, createPostResponse } from "@solana/actions";


const img = "https://media.istockphoto.com/id/1272478640/vector/retro-light-text-quiz-time-retro-light-bulb-vector-stock-illustration.jpg?s=612x612&w=0&k=20&c=ZCiSSDczdpCRGZcMzTNzStJYy8wwHomb39D0HFVjVb0="
export const GET = async (req: Request) => {
    const payload: ActionGetResponse = {
        title: "Solana Trivia",
        icon: img,
        description: "What is the best Solana project?",
        label: "Give 1 SOL 🤙🏻🤙🏻🤙🏻"
    }

    return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS,
    });
}