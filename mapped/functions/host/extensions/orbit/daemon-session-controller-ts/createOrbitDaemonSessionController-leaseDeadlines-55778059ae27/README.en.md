# `createOrbitDaemonSessionController/leaseDeadlines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706072-706085](../../../../../../../reference/runtime/host-main.cjs#L706072-L706085) | `FunctionDeclaration` | no | `expiresAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706072-706085](../../../../../../../reference/runtime/host-main.cjs#L706072-L706085) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:706072

Calls written directly in this body: `Number`, `deps.clock.monotonicNow`, `deps.clock.now`, `expiresAt.getTime`, `new ConnectError`.

Explicit throw targets: `ConnectError`.

SHA-256 of the source span: `a4069ec993f57a839a54a1941e6e2dc0fbfdaf7bf708ad393c44a8cd7e01accc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
