# `parsePromptSectionSnapshotsJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/frozen-prompt-section.ts` · [Module README](../../../../../modules/core/runner/frozen-prompt-section-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717085-717094](../../../../../../reference/runtime/host-main.cjs#L717085-L717094) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717085-717094](../../../../../../reference/runtime/host-main.cjs#L717085-L717094) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:717085

Calls written directly in this body: `JSON.parse`, `parsePromptSectionSnapshots`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `ee8399a8e69951521eb4cd9af99d7b3eb2d5549d0fbf23d11ef325853d75727b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
