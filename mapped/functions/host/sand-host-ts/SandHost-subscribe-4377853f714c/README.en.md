# `SandHost.subscribe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786573-786596](../../../../../reference/runtime/host-main.cjs#L786573-L786596) | `method` | no | `listener, surface = SAND_CLIENT_SURFACE_DESKTOP` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786573-786596](../../../../../reference/runtime/host-main.cjs#L786573-L786596) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:786573

Calls written directly in this body: `.api`, `.openRequest`, `listener`, `this.listeners.set`, `this.noteEventStreamListeners`, `this.requireHostExtensions`.

SHA-256 of the source span: `bd587ba69ec6634bbd0c040053904dd33ff6f654695b73a08641c67b70f5e178`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
