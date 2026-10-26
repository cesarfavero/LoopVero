# `resolveBranchRoot2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript-threads.ts` · [Module README](../../../../../modules/shared/transcript/transcript-threads-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490377-490389](../../../../../../reference/runtime/host-main.cjs#L490377-L490389) | `FunctionDeclaration` | no | `entry, branchedById` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490377-490389](../../../../../../reference/runtime/host-main.cjs#L490377-L490389) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:490377

Calls written directly in this body: `branchedById.get`, `new Set`, `replyToOf`, `seen.add`, `seen.has`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `f26dce45715e20d777a616214f8bcc0c789796abe6ca5e3d28f7ba98ae85c0f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
