import { z } from "zod";
import { ActionState } from "@/lib/createSafeAction";
import { UpdateCard } from "./schema";
import { Card } from "@prisma/client";

export type InputType = z.infer<typeof UpdateCard>;
export type ReturnType = ActionState<InputType, Card>;
