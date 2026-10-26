# `describeClaimedInbox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/claim-email-inbox-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764794-764801](../../../../../../../reference/runtime/host-main.cjs#L764794-L764801) | `FunctionDeclaration` | no | `address, draftsOnly` |
| [evaluation:558162-558169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558162-L558169) | `FunctionDeclaration` | no | `address, draftsOnly` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764794-764801](../../../../../../../reference/runtime/host-main.cjs#L764794-L764801) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558162-558169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558162-L558169) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:764794

Calls written directly in this body: `.join`.

SHA-256 of the source span: `baae82affb5250a8cd89eeba50a6cddbf2a93a3394b3d0c3316a74d1b43b7226`.

### evaluation:558162

Calls written directly in this body: `.join`.

SHA-256 of the source span: `baae82affb5250a8cd89eeba50a6cddbf2a93a3394b3d0c3316a74d1b43b7226`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
