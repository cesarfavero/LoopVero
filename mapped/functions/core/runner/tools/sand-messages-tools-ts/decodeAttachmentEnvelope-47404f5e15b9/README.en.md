# `decodeAttachmentEnvelope`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777925-777941](../../../../../../../reference/runtime/host-main.cjs#L777925-L777941) | `FunctionDeclaration` | no | `raw` |
| [evaluation:577660-577676](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577660-L577676) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777925-777941](../../../../../../../reference/runtime/host-main.cjs#L777925-L777941) | 6 | 0 | 0 | 4 | 1 | 1 |
| [evaluation:577660-577676](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577660-L577676) | 6 | 0 | 0 | 4 | 1 | 1 |

### host:777925

Calls written directly in this body: `JSON.parse`.

Assignment or increment targets: `parsed2`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `040142c1248f23762f4ea5c96e36ea303f9ef86bf389506b4d8ec6f89d04c8a7`.

### evaluation:577660

Calls written directly in this body: `JSON.parse`.

Assignment or increment targets: `parsed`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `bc8aba1c77ee308d9ebf2f7d06dceeeea44bbbd1d0d2a6f7608465e8c8e21257`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
