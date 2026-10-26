# `waitForWorkingStateOperation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/working-state-export-service.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/working-state-export-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785405-785426](../../../../../../../reference/runtime/host-main.cjs#L785405-L785426) | `FunctionDeclaration` | yes | `startOperation, control` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785405-785426](../../../../../../../reference/runtime/host-main.cjs#L785405-L785426) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:785405

Calls written directly in this body: `control.onProgress`, `control.signal.throwIfAborted`, `new Promise`, `startOperation`.

SHA-256 of the source span: `ce65cbc638edeb441f13afa71fe18e56616d7884632067d99b73701eca2a26ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
