# IMPROVEMENTS.md

### API Call Timing
Although this is `mockData`, I currently have the mock-API call during `componentDidMount()`. Considering that I am fetching the whole data right from the start, should the "real" API call be implemented, this may potentially cause sluggish loading and unpleasant UX. Instead, it should fetch on `query` submits, and only retreive the emails within the date range or single date matching.

### Search Logic
In the current UI/UX design, queries must be in `YYYY/MM/DD` format for both single date queries and date range queries. To provide better UX down the line, queries should incorporate fuzzy logic and a advance filtering feature to for "text" search and wildcard searches.

### Other possible improvements may include:
- Pagination
- Lazy Load
- Search History
- Cache (quicker access to recently viewed emails)
- Modal Popups/Alerts instead of browser default `alert()` for cleaner UI
