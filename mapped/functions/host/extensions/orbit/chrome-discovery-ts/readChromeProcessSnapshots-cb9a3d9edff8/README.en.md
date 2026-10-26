# `readChromeProcessSnapshots`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/chrome-discovery.ts` · [Module README](../../../../../../modules/host/extensions/orbit/chrome-discovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705281-705301](../../../../../../../reference/runtime/host-main.cjs#L705281-L705301) | `FunctionDeclaration` | yes | `procRoot, signal, readProcFile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705281-705301](../../../../../../../reference/runtime/host-main.cjs#L705281-L705301) | 3 | 1 | 2 | 1 | 1 | 1 |

### host:705281

Calls written directly in this body: `/^\d+$/.test`, `entry.isDirectory`, `isProcessGoneError`, `processes.push`, `readChromeProcessSnapshot`, `signal.throwIfAborted`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `3cd1a785c64cf32de4359bbb7c441a05c33212fa3f8b6319870657d9c9994b1e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
