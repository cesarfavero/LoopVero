# `SandLocalExecBridge.registerProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/local-exec/local-exec-bridge.ts` · [Module README](../../../../../../modules/host/extensions/local-exec/local-exec-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682093-682129](../../../../../../../reference/runtime/host-main.cjs#L682093-L682129) | `method` | no | `send` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682093-682129](../../../../../../../reference/runtime/host-main.cjs#L682093-L682129) | 0 | 0 | 0 | 1 | 0 | 1 |

### host:682093

Calls written directly in this body: `send`, `this.byId.set`, `this.deps.clock.now`, `this.deps.reportProvider`, `this.providers.add`.

SHA-256 of the source span: `27f92085fd62ebf635252fee5fce7ad2599aea745e3259e20c77e9ea81c0a054`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
