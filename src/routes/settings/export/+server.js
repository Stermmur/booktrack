import { getBooks } from "$lib/db.js";
import { error } from "@sveltejs/kit";

export async function GET({ locals }) {
    if (!locals.user) throw error(401, 'Unauthorized');

    try {
        const booksCollection = await getBooks();
        const userBooks = await booksCollection.find({ userId: locals.user.id }).toArray();
        const header = ["Title", "Author", "Genre", "Status", "Rating", "Release Date", "Finishing Date", "Notes"];
        
        const rows = userBooks.map(book => {
            const title = String(book.title || "").replace(/"/g, '""');
            const author = String(book.author || "").replace(/"/g, '""');
            const genre = String(book.genre || "").replace(/"/g, '""');
            const status = String(book.status || "").replace(/"/g, '""');
            const rating = book.rating || 0;
            const releaseDate = String(book.release_date || "").replace(/"/g, '""');
            const finishingDate = String(book.finishing_date || "").replace(/"/g, '""');
            const notes = String(book.notes || "").replace(/"/g, '""').replace(/\n/g, ' ');

            return `"${title}","${author}","${genre}","${status}","${rating}","${releaseDate}","${finishingDate}","${notes}"`;
        });

        const csvContent = [header.join(","), ...rows].join("\n");
        const utf8Bom = '\uFEFF';

        return new Response(utf8Bom + csvContent, {
            headers: {
                'Content-Type': 'text/csv; charset=utf-8',
                'Content-Disposition': `attachment; filename="booktrack_export_${new Date().toISOString().slice(0,10)}.csv"`
            }
        });
    } catch (err) {
        console.error("Export error:", err);
        throw error(500, "Failed to generate export");
    }
}