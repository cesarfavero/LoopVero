# `normalizeDesktopDownReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/desktop-health-forwarder.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/desktop-health-forwarder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731352-731359](../../../../../../../reference/runtime/host-main.cjs#L731352-L731359) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731352-731359](../../../../../../../reference/runtime/host-main.cjs#L731352-L731359) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:731352

Calls written directly in this body: `/^exit--?[0-9]+$/.test`, `/^signal-SIG[A-Z0-9]+$/.test`.

SHA-256 of the source span: `b72950d15c8e5d4b91b0b94ac5ecec47c419128a46ea6557b7b770419cedfc7d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
