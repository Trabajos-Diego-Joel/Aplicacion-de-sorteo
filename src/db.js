import { createClient } from "@supabase/supabase-js";

// SUpabase Connection.
export const supabase = createClient(
  "https://oyltvjfmloodupovoqoe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsI nJlZiI6Im95bHR2amZtbG9vZHVwb3ZvcW9lIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDY2MjgyMSwiZXhwIjoyMDA2MjM4ODIxfQ.SwX21h80-C0yk9K19vk_UerdvH8CwVVSJRrHX9Q8MJA"
);