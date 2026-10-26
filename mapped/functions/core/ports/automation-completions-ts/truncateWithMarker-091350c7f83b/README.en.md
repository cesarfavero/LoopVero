# `truncateWithMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/ports/automation-completions.ts` · [Module README](../../../../../modules/core/ports/automation-completions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716993-716996](../../../../../../reference/runtime/host-main.cjs#L716993-L716996) | `FunctionDeclaration` | no | `value, maxChars, marker17` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716993-716996](../../../../../../reference/runtime/host-main.cjs#L716993-L716996) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:716993

Calls written directly in this body: `value.slice`.

SHA-256 of the source span: `87c751ae37297d921b9c662993d787985b67e04f2f223b215e68f3b7b9e0c98a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
