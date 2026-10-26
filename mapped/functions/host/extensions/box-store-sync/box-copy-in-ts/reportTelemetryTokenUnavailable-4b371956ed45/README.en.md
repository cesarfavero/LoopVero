# `reportTelemetryTokenUnavailable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482892-482901](../../../../../../../reference/runtime/host-main.cjs#L482892-L482901) | `FunctionDeclaration` | no | `reported2, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482892-482901](../../../../../../../reference/runtime/host-main.cjs#L482892-L482901) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:482892

Calls written directly in this body: `boundedErrorClass`, `reportBoxStoreDiagnostic`, `reported2.add`, `reported2.has`.

SHA-256 of the source span: `45ee7b6d672f226efe3581128c8a592ee8a91d363b3144ca29926fdc47c03fc4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
