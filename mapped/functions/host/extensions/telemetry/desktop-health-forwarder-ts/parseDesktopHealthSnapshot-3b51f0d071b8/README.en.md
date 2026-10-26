# `parseDesktopHealthSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/desktop-health-forwarder.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/desktop-health-forwarder-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731385-731432](../../../../../../../reference/runtime/host-main.cjs#L731385-L731432) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731385-731432](../../../../../../../reference/runtime/host-main.cjs#L731385-L731432) | 7 | 1 | 0 | 5 | 0 | 1 |

### host:731385

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `Math.max`, `Number.isSafeInteger`, `components.filter`, `components.reduce`, `componentsByName.get`, `componentsByName.set`, `componentsByName.values`, `isUnknownRecord2`, `mergeDesktopComponentHealth`, `new Map`, `normalizeCount`, `normalizeDesktopComponentName`, `normalizeDesktopDownReason`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `5f097d240286c23ba0e38cad5437d3dbc43fa320d8e5fc4ca7832a0995bdeded`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
