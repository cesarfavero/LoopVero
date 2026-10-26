# `BoxLogShipper.loadOffsets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731137-731158](../../../../../../../reference/runtime/host-main.cjs#L731137-L731158) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731137-731158](../../../../../../../reference/runtime/host-main.cjs#L731137-L731158) | 2 | 1 | 1 | 3 | 0 | 1 |

### host:731137

Calls written directly in this body: `.catch`, `JSON.parse`, `Object.entries`, `offsetsSchema.safeParse`, `this.offsets.set`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `3f8f204992613889367fc17a38310fc7ff6d5ce33ff5ca0e8777310cf6a73f81`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
