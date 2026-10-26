# `normalizeDesktopComponentName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/desktop-health-forwarder.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/desktop-health-forwarder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731341-731351](../../../../../../../reference/runtime/host-main.cjs#L731341-L731351) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731341-731351](../../../../../../../reference/runtime/host-main.cjs#L731341-L731351) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:731341

Calls written directly in this body: `DESKTOP_COMPONENT_KINDS.find`, `DESKTOP_COMPONENT_NAME_PATTERN.exec`.

Assignment or increment targets: `scope`.

SHA-256 of the source span: `0524eaf910c7ebca5a211d515e5d8f092dcb336e72771c6f99c7455f170eff83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
