export const API_URL = "http://localhost:3000";

export interface lusters {
  id: number;
  name: string;
  price: {
    new: number;
    old: number;
  };
  image: string;
  availability: {
    moscow: number;
    orenburg: number;
    saintPetersburg: number;
  };
  type: Array<{
    pendant: string;
    nightlights: string;
  }>;
  rating: number;
  goodsOfDay: boolean;
}

export const getLusters = (): Promise<lusters[]> =>
  fetch(`${API_URL}/lusters`).then((res) => res.json());

interface UpdateLusterRaitingArgs {
  id: lusters["id"];
  rating: lusters["rating"];
}

export const updateLusterRating = ({
  id,
  rating,
}: UpdateLusterRaitingArgs): Promise<lusters> =>
  fetch(`${API_URL}/lusters/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rating }),
  }).then((res) => res.json());
