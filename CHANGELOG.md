# admin-web

## 1.4.1

### Patch Changes

- 6015bb9: The sidebar menu follows permissions only (web-shared 1.2.0), so a visible item always opens, also for the super admin.

## 1.4.0

### Minor Changes

- ed54488: The profile address editor now selects official administrative regions and saves their codes.

### Patch Changes

- 6004291: The Vite dev server pre-bundles the Unovis `striptags` dependency so pages with charts load in the browser. Development only.

## 1.3.0

### Minor Changes

- 728c737: Sub-pages go back with `BackButton` from `@mts241alikhlash/ui` 1.3.1, left of the card title and labelled with where it leads, and breadcrumbs name the record a page is about instead of "Detail" or "Ubah"; long crumbs truncate. Another user's profile gets a back button and their name in the breadcrumb. The profile and address tabs use floating labels with every field tied to its label, including the birth date picker. Role, user-account and school-profile forms use the same back button, and role and account forms name what they edit.

### Patch Changes

- 728c737: Badges take `rounded-md` from `@mts241alikhlash/ui` 1.2.1. Audit log code labels and the permission counter use the badge radius; the role form cards and the files card use the standard page-card ring and shadow; the role confirm and user-role dialogs use the default dialog radius.

## 1.2.0

### Minor Changes

- eeda27d: Search fields use `SearchInput` from `@mts241alikhlash/ui` 1.2.0: one icon, height and text size on every list, no zoom on iOS, and `DataTable`'s built-in filter follows it.

## 1.1.0

### Minor Changes

- 6dc5f25: Icons come from `@lucide/vue` (replacing the deprecated `lucide-vue-next`), with `@mts241alikhlash/ui` and `web-shared` 1.1.0.

## 1.0.1

### Patch Changes

- c412aae: Update @mts241alikhlash/ui to 1.0.1.

## 1.0.0

### Major Changes

- First stable release.
