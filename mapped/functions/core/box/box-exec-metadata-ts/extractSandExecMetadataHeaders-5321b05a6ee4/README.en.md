# `extractSandExecMetadataHeaders`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-exec-metadata.ts` · [Module README](../../../../../modules/core/box/box-exec-metadata-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:678945-678960](../../../../../../reference/runtime/host-main.cjs#L678945-L678960) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:678945-678960](../../../../../../reference/runtime/host-main.cjs#L678945-L678960) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:678945

Calls written directly in this body: `ctx.get`, `getConversationId`, `getRequestId`, `isExecMetadataHeaderValue`.

Assignment or increment targets: `headers[computed]`.

SHA-256 of the source span: `bd65502ea5641b60fb864553a4516d3eaa59f3ebd35d7ab6854d5c29c4475247`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
