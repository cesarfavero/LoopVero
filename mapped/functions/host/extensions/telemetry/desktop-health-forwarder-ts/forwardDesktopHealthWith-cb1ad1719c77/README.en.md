# `forwardDesktopHealthWith`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/desktop-health-forwarder.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/desktop-health-forwarder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731473-731493](../../../../../../../reference/runtime/host-main.cjs#L731473-L731493) | `FunctionDeclaration` | yes | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731473-731493](../../../../../../../reference/runtime/host-main.cjs#L731473-L731493) | 3 | 0 | 1 | 4 | 0 | 0 |

### host:731473

Calls written directly in this body: `computeDesktopHealthMetadata`, `decideDesktopHealthForward`, `deps.emit`, `deps.getLast`, `deps.now`, `deps.readRaw`, `deps.setLast`, `desktopHealthLevel`, `desktopHealthOverall`, `parseDesktopHealthSnapshot`.

SHA-256 of the source span: `a2b7a238262b2d1f01a883d5d90003dfb57d80674e0bbd42649330a031c433ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
