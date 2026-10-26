# `BoxLogShipper.listLogFiles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730912-730948](../../../../../../../reference/runtime/host-main.cjs#L730912-L730948) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730912-730948](../../../../../../../reference/runtime/host-main.cjs#L730912-L730948) | 5 | 2 | 2 | 2 | 0 | 2 |

### host:730912

Calls written directly in this body: `entry.isDirectory`, `entry.isFile`, `entry.name.endsWith`, `files.push`, `reportFallbackUnlessAbsent`, `sub.isFile`, `sub.name.endsWith`, `this.isExcludedSource`, `this.skip.has`, `this.subdirPattern.test`, `toSourceName`.

Assignment or increment targets: `complete`, `entries`, `subEntries`.

SHA-256 of the source span: `5f5469da6f939200c835bc8c062d4d3e63930047b61c522753c9388f54027ecc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
