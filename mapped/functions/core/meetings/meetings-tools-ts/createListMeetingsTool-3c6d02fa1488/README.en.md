# `createListMeetingsTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773581-773589](../../../../../../reference/runtime/host-main.cjs#L773581-L773589) | `FunctionDeclaration` | no | `deps` |
| [evaluation:572807-572815](../../../../../../reference/runtime/sand-eval-runner.cjs#L572807-L572815) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773581-773589](../../../../../../reference/runtime/host-main.cjs#L773581-L773589) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572807-572815](../../../../../../reference/runtime/sand-eval-runner.cjs#L572807-L572815) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773581

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `b7e9f7759e271a431a9f2e00a008473670e143a37047e40c98f7fd3bcd7d6c5f`.

### evaluation:572807

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `b7e9f7759e271a431a9f2e00a008473670e143a37047e40c98f7fd3bcd7d6c5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
