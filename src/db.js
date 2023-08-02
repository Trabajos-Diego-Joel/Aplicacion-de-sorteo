import { createClient } from "@supabase/supabase-js";

// SUpabase Connection.
export const supabase = createClient(
  "https://rnakbdlosebdbhlnqdfz.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuYWtiZGxvc2ViZGJobG5xZGZ6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDk5Njg0OCwiZXhwIjoyMDA2NTcyODQ4fQ.NNo5G0oRWxJCTUswBFkWYrGmB1Qtg_6tiqi_JX0_PsA"
);