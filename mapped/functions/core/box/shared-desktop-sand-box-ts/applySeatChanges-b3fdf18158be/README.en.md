# `applySeatChanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:554263-554306](../../../../../../reference/runtime/host-main.cjs#L554263-L554306) | `FunctionDeclaration` | no | `table, changes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554263-554306](../../../../../../reference/runtime/host-main.cjs#L554263-L554306) | 15 | 2 | 0 | 4 | 0 | 0 |

### host:554263

Calls written directly in this body: `assignments.delete`, `assignments.get`, `assignments.set`, `new Map`, `tokens.delete`, `tokens.get`, `tokens.set`, `unstarted.delete`, `unstarted.has`, `unstarted.set`.

Assignment or increment targets: `changed`.

SHA-256 of the source span: `17b8d95fde463c1d6dc33cf678d599eb40a436ea99b06e363e01aa276e7b0b89`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
