# `createRemoteBoxResourceAccessor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/remote-box-resources.ts` · [Module README](../../../../../modules/core/runner/remote-box-resources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534401-534742](../../../../../../reference/runtime/sand-eval-runner.cjs#L534401-L534742) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534401-534742](../../../../../../reference/runtime/sand-eval-runner.cjs#L534401-L534742) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:534401

Calls written directly in this body: `.some`, `Object.values`, `accessor.register`, `host.autoReviewGate.currentModes`, `host.getConversationId`, `host.resolveBoxId`, `new RegistryResourceAccessor`, `new WeakSet`, `wrapBackgroundShellExecutorForAudit`, `wrapShellStreamExecutorForAudit`.

SHA-256 of the source span: `8785b8268bbb312ae21060b1e53ca2a9912e960fe87e55a386f0e99719983a12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
