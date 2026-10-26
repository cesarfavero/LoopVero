# `createServerTranscriptTail/cursorsForConnect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:713730-713751](../../../../../../../reference/runtime/host-main.cjs#L713730-L713751) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:713730-713751](../../../../../../../reference/runtime/host-main.cjs#L713730-L713751) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:713730

Calls written directly in this body: `.filter`, `.sort`, `agents.values`, `kept.map`, `listed.slice`.

Assignment or increment targets: `state.needsRehydrate`.

SHA-256 of the source span: `83cdd60ffbca6caa0cb028ef92963bbf68bbb8f031559921e432d6f5e49ad753`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
