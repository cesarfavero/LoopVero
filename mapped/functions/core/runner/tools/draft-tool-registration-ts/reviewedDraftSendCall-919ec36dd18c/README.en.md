# `reviewedDraftSendCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756082-756085](../../../../../../../reference/runtime/host-main.cjs#L756082-L756085) | `FunctionDeclaration` | no | `emission` |
| [evaluation:542003-542006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542003-L542006) | `FunctionDeclaration` | no | `emission` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756082-756085](../../../../../../../reference/runtime/host-main.cjs#L756082-L756085) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:542003-542006](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542003-L542006) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:756082

Calls written directly in this body: `buildDraftSendCall`, `isHostedGmailRoute`.

SHA-256 of the source span: `89dad2047b4c4c4cd65c897b2fd184be83186ed5e38bbe1cf2faf5c6d79917a6`.

### evaluation:542003

Calls written directly in this body: `buildDraftSendCall`, `isHostedGmailRoute`.

SHA-256 of the source span: `89dad2047b4c4c4cd65c897b2fd184be83186ed5e38bbe1cf2faf5c6d79917a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
