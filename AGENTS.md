# Shopwell repository rules

This repository is an independently maintained Shopwell fork. Every AI coding agent
must read this file before changing files in this repository.

## Hard rules

- Preserve UTF-8 and existing user changes.
- The project and every Shopwell-owned publishable subpackage use Apache License 2.0.
- Every project-owned package/composer manifest must declare `Apache-2.0`.
- Root and registered project-owned `LICENSE` files must contain the standard,
  unmodified Apache License 2.0 text.
- Original upstream license texts, copyright notices, and trademark notices belong
  verbatim in the root `NOTICE`. Do not brand, shorten, or delete them.
- Do not create `LICENSE.upstream-*` files; upstream legal material is centralized
  in `NOTICE`.
- Dependency lock files may truthfully contain third-party license metadata. Never
  rewrite dependency licenses to look like Shopwell licenses.
- Do not use merge or cherry-pick to synchronize the unrelated upstream history.
- Do not force-push or copy upstream tags unless the user explicitly requests it.
- Before committing, run the repository's normal validation and, when the sibling
  control checkout is present, run:

  ```bash
  ../sync-upstream/bin/syncctl audit-license conflicts
  ../sync-upstream/bin/syncctl audit-upstream-dependencies conflicts
  ```

- Runtime code and workflows must not depend on `shopware/*`, `shopwarelabs/*`,
  `@shopware-ag/*`, or their GitHub repositories. A `shopwell-shop/*` Action
  dependency must have a matching entry in the control registry.
- A failed license or dependency audit blocks commit, push, release, and sync completion.
- Changes to LICENSE, NOTICE, project-owned manifests, or upstream license inventory
  must be reflected in `../sync-upstream/config/repos.json` in the same task.
