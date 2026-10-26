# `discoverManagedChromeCdpPorts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/chrome-discovery.ts` · [Module README](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705223-705247](../../../../../../../reference/runtime/host-main.cjs#L705223-L705247) | `FunctionDeclaration` | yes | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705223-705247](../../../../../../../reference/runtime/host-main.cjs#L705223-L705247) | 2 | 1 | 1 | 3 | 0 | 1 |

### host:705223

Calls written directly in this body: `.sort`, `cdpPorts.add`, `errorLogTag`, `managedChromeCdpPortOf`, `new Set`, `options2.signal.throwIfAborted`, `readChromeProcessSnapshots`.

SHA-256 of the source span: `d9c30dd694c53b369c0e40c099688666bb2b60fe10cf61cd7a01f47c63e1d5a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
