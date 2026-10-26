# `SandHost.reportProcessCrash`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786382-786387](../../../../../reference/runtime/host-main.cjs#L786382-L786387) | `method` | no | `_error, kind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786382-786387](../../../../../reference/runtime/host-main.cjs#L786382-L786387) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:786382

Calls written directly in this body: `.logs.reportHostCrash`, `this.hostExtensions.api`.

SHA-256 of the source span: `ca32ea93c58a4bc70a09e74c47d6600a9e3050d1a38f4131141e4ee66144ba77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
