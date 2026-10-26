# `resolveOrbitCaptureEligibility`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/orbit-service.ts` · [Module README](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706379-706402](../../../../../../../reference/runtime/host-main.cjs#L706379-L706402) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706379-706402](../../../../../../../reference/runtime/host-main.cjs#L706379-L706402) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:706379

Calls written directly in this body: `deps.auth.peekAccessToken`, `deps.experiments.checkFeatureGate`, `deps.privacyMode.get`, `parseJwtPayload`.

SHA-256 of the source span: `81f3a919a19d6ed7e55db2dca8b67e1622803fa858b6f999efd43f0c9fe57f75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
