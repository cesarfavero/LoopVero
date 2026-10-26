# `SandBoxAgentDeletedError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/box.ts` · [Module README](../../../../../modules/core/ports/box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489512-489515](../../../../../../reference/runtime/host-main.cjs#L489512-L489515) | `method` | no | `message = "This agent was deleted, so it gets no desktop monitor."` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489512-489515](../../../../../../reference/runtime/host-main.cjs#L489512-L489515) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:489512

Calls written directly in this body: `super`.

Assignment or increment targets: `this.name`.

SHA-256 of the source span: `15f2717ac8959aa51447f14eec3b59f549588a5ba0745f0640101e9c3b887911`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
