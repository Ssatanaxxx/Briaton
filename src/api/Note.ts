import { useEffect, useState } from "react";
import { z } from "zod";
import { validateResponse } from "./validateResponse";

export const NoteSchema = z.object({
  id: z.string(),
  title: z.string(),
  text: z.string(),
  createdAt: z.number(),
});

export type Note = z.infer<typeof NoteSchema>;

export const NoteListSchema = z.array(NoteSchema);

export type NoteList = z.infer<typeof NoteListSchema>;

export const FetchNoteListSchema = z.object({
  list: NoteListSchema,
});

export type FetchNoteListResponse = z.infer<typeof FetchNoteListSchema>;

export async function fetchNoteList(): Promise<FetchNoteListResponse> {
  return fetch("/api/note")
    .then((response) => response.json())
    .then((data) => FetchNoteListSchema.parse(data));
}

interface Idle {
  status: "idle";
}

interface Loading {
  status: "pending";
}

interface Success {
  status: "success";
  data: NoteList;
}

interface Error {
  status: "error";
  error: unknown;
}

type RequestState = Idle | Loading | Success | Error;

export function useNoteList() {
  const [noteState, setNoteState] = useState<RequestState>({ status: "idle" });

  useEffect(() => {
    if (noteState.status === "pending") {
      fetchNoteList()
        .then((data) => {
          setNoteState({ status: "success", data: data.list });
        })
        .catch((error) => setNoteState({ status: "error", error }));
    }
  }, [noteState]);

  useEffect(() => {
    setNoteState({ status: "pending" });
  }, []);

  const refetch = () => {
    setNoteState({ status: "pending" });
  };

  return {
    noteState,
    refetch,
  };
}

export async function createNote(title: string, text: string): Promise<void> {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, text }),
  });
  await validateResponse(response);
  return undefined;
}
