# `_MeetingsTools.formatTime`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773544-773546](../../../../../../reference/runtime/host-main.cjs#L773544-L773546) | `method` | no | `atMs` |
| [evaluation:572770-572772](../../../../../../reference/runtime/sand-eval-runner.cjs#L572770-L572772) | `method` | no | `atMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773544-773546](../../../../../../reference/runtime/host-main.cjs#L773544-L773546) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572770-572772](../../../../../../reference/runtime/sand-eval-runner.cjs#L572770-L572772) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773544

Calls written directly in this body: `.toISOString`, `new Date`.

SHA-256 of the source span: `a6dc215e3e45b1ae01988a2945de7d49309365741de4faee8f27371e313ff6dc`.

### evaluation:572770

Calls written directly in this body: `.toISOString`, `new Date`.

SHA-256 of the source span: `a6dc215e3e45b1ae01988a2945de7d49309365741de4faee8f27371e313ff6dc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
