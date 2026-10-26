# `createFindMeetingTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773590-773601](../../../../../../reference/runtime/host-main.cjs#L773590-L773601) | `FunctionDeclaration` | no | `deps` |
| [evaluation:572816-572827](../../../../../../reference/runtime/sand-eval-runner.cjs#L572816-L572827) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773590-773601](../../../../../../reference/runtime/host-main.cjs#L773590-L773601) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572816-572827](../../../../../../reference/runtime/sand-eval-runner.cjs#L572816-L572827) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773590

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `7131e295c4a3a9e5beb98210a10bcd503ec375aa8a084aaba97f2daacfa83346`.

### evaluation:572816

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `7131e295c4a3a9e5beb98210a10bcd503ec375aa8a084aaba97f2daacfa83346`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
