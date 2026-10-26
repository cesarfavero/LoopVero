# `createOrbitDaemonSessionController/reconcileConfiguration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705899-705906](../../../../../../../reference/runtime/host-main.cjs#L705899-L705906) | `FunctionDeclaration` | yes | `openSession2, configuration` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705899-705906](../../../../../../../reference/runtime/host-main.cjs#L705899-L705906) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:705899

Calls written directly in this body: `handleSessionRpcFailure`, `updateConfiguration`.

SHA-256 of the source span: `b28ffa4cd9c9c003916cc6765d7b0df9f1ab47a8b733856e4242d75756f94322`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
