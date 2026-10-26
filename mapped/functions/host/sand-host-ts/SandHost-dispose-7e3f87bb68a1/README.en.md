# `SandHost.dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786663-786671](../../../../../reference/runtime/host-main.cjs#L786663-L786671) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786663-786671](../../../../../reference/runtime/host-main.cjs#L786663-L786671) | 0 | 0 | 3 | 0 | 0 | 0 |

### host:786663

Calls written directly in this body: `.dispose`, `.suspendWakes`, `Promise.all`, `this.hostExtensions.api`, `this.hostExtensions.stop`, `this.stopResumeOwnership`, `this.transcript.dispose`.

SHA-256 of the source span: `f82d32fb8d8b45503738cefba1a8faa38efb88c669ee02f82505d566df78dc0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
