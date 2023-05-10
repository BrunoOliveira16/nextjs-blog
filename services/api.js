import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://olnlqikdfldaraswnewt.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sbmxxaWtkZmxkYXJhc3duZXd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2NTMyMTMsImV4cCI6MTk5OTIyOTIxM30._UuC9WGTh-GRa5BIQ6urhAFqzF8bHFKW73wTlZTpGCM",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sbmxxaWtkZmxkYXJhc3duZXd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM2NTMyMTMsImV4cCI6MTk5OTIyOTIxM30._UuC9WGTh-GRa5BIQ6urhAFqzF8bHFKW73wTlZTpGCM"
    }
})