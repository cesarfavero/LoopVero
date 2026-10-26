# `createOrbitDaemonSessionController/handleSessionRpcFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705907-705921](../../../../../../../reference/runtime/host-main.cjs#L705907-L705921) | `FunctionDeclaration` | no | `openSession2, stage, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705907-705921](../../../../../../../reference/runtime/host-main.cjs#L705907-L705921) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:705907

Calls written directly in this body: `beginRetirement`, `isLostSessionError`, `isProtocolDivergence`, `reportFailure`.

SHA-256 of the source span: `1117e81541712b02ba0a75083dae69d953659db7a93dc23273f3ef1bec5137e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
