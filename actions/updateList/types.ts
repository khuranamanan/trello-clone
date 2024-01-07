import { z } from "zod";
import { ActionState } from "@/lib/createSafeAction";
import { UpdateList } from "./schema";
import { List } from "@prisma/client";

export type InputType = z.infer<typeof UpdateList>;
export type ReturnType = ActionState<InputType, List>;
