# `computeDesktopHealthMetadata`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/desktop-health-forwarder.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/desktop-health-forwarder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731441-731465](../../../../../../../reference/runtime/host-main.cjs#L731441-L731465) | `FunctionDeclaration` | no | `snapshot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731441-731465](../../../../../../../reference/runtime/host-main.cjs#L731441-L731465) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:731441

Calls written directly in this body: `brandLiteralEnumList`, `desktopHealthOverall`, `logFields`, `new Set`, `problems.flatMap`, `problems.map`, `snapshot.components.filter`.

SHA-256 of the source span: `2410817d202f9688816c60fe2ce21d6567a06ad6ebb02f2071836ccfc564d32e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
