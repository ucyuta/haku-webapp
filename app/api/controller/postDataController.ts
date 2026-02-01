import { Urls } from "~/Urls";
import { app } from "../server";
import { z } from "zod";
import type { Request, Response } from "express";

const articleRequestBodyScheme = z.object({
    
});

type articleRequestBody = z.infer<typeof articleRequestBodyScheme>;

app.post(
    Urls.articleData.api,
    (req: Request<{}, any, articleRequestBody>, res: Response) => {
        
    }
)