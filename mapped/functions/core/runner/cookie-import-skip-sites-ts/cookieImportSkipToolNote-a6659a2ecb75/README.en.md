# `cookieImportSkipToolNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/cookie-import-skip-sites.ts` · [Module README](../../../../../modules/core/runner/cookie-import-skip-sites-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775093-775095](../../../../../../reference/runtime/host-main.cjs#L775093-L775095) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:574740-574742](../../../../../../reference/runtime/sand-eval-runner.cjs#L574740-L574742) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775093-775095](../../../../../../reference/runtime/host-main.cjs#L775093-L775095) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574740-574742](../../../../../../reference/runtime/sand-eval-runner.cjs#L574740-L574742) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775093

Calls written directly in this body: `skipSitesInProse`.

SHA-256 of the source span: `8b9ab2f3fa815e73fd6ef8aa1594d485c8f3023fe9577bba506f30eac43ffd5c`.

### evaluation:574740

Calls written directly in this body: `skipSitesInProse`.

SHA-256 of the source span: `8b9ab2f3fa815e73fd6ef8aa1594d485c8f3023fe9577bba506f30eac43ffd5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
