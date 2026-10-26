# `describeMessageQuote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/reactions.ts` · [Module README](../../../../modules/core/reactions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739417-739421](../../../../../reference/runtime/host-main.cjs#L739417-L739421) | `FunctionDeclaration` | no | `entry, maxChars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739417-739421](../../../../../reference/runtime/host-main.cjs#L739417-L739421) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:739417

Calls written directly in this body: `.replace`, `.trim`, `normalized.slice`, `quotableEntryText`.

SHA-256 of the source span: `308537acb9f8a11173eaa5ebd9d809ab5a394e0da33212aa55b35b60c5260e70`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
