# `extensionOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/media-extensions.ts` · [Module README](../../../../../modules/shared/media/media-extensions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496971-496975](../../../../../../reference/runtime/host-main.cjs#L496971-L496975) | `FunctionDeclaration` | no | `name18` |
| [evaluation:480734-480738](../../../../../../reference/runtime/sand-eval-runner.cjs#L480734-L480738) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496971-496975](../../../../../../reference/runtime/host-main.cjs#L496971-L496975) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480734-480738](../../../../../../reference/runtime/sand-eval-runner.cjs#L480734-L480738) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:496971

Calls written directly in this body: `.toLowerCase`, `Math.max`, `base.lastIndexOf`, `base.slice`, `name18.lastIndexOf`, `name18.slice`.

SHA-256 of the source span: `303fff808b3fb7e70206c7b0bfdf4def5960796c9bb79baddaa6ee46efed9e0f`.

### evaluation:480734

Calls written directly in this body: `.toLowerCase`, `Math.max`, `base.lastIndexOf`, `base.slice`, `name18.lastIndexOf`, `name18.slice`.

SHA-256 of the source span: `303fff808b3fb7e70206c7b0bfdf4def5960796c9bb79baddaa6ee46efed9e0f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
