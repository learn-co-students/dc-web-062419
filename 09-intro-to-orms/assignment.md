1.  Write the SQL to create tables for Books (id, title, author_id) and Authors (id, name)

```sql
CREATE TABLE books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author_id INTEGER);
```

```sql
CREATE TABLE authors (
    id INTEGER PRIMARY KEY,
    name TEXT,
```

2.  Write the SQL to get all Authors

```sql
SELECT * FROM authors;
```

3.  Write the SQL to create a new author, given the author's name

```sql
INSERT INTO authors (name) VALUES ("Bob");
```

4.  Write the SQL to get all Books by a given author, given the author's id (27)
```sql
SELECT * FROM books where author_id = 27
```

5.  Write the SQL to get all Books by a given author, given the author's name ("Mark Twain")

```sql
SELECT * FROM books 
    JOIN authors 
    ON authors.id = books.author_id 
    WHERE authors.name = "Mark Twain"; 
```

6.  Write the SQL to update a Book's title
