# `toSourceName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731278-731280](../../../../../../../reference/runtime/host-main.cjs#L731278-L731280) | `FunctionDeclaration` | no | `fileName2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731278-731280](../../../../../../../reference/runtime/host-main.cjs#L731278-L731280) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:731278

Calls written directly in this body: `fileName2.endsWith`, `fileName2.slice`.

SHA-256 of the source span: `9a4dfd5debb16c886d2dd4082e66a9f961788e72287d026679ce932d6adc7ad5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
