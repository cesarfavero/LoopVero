# `createOrbitDaemonSessionController/closeSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:705957-705967](../../../../../../../reference/runtime/host-main.cjs#L705957-L705967) | `FunctionDeclaration` | yes | `openSession2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705957-705967](../../../../../../../reference/runtime/host-main.cjs#L705957-L705967) | 1 | 0 | 1 | 0 | 0 | 1 |

### host:705957

Calls written directly in this body: `openSession2.session.close`, `reportFailure`, `withdrawOperations`.

Assignment or increment targets: `state.currentSession`.

SHA-256 of the source span: `886140f30271a9695948203862827037074fc6d5b5f3e16ab3254f221a26e3f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
