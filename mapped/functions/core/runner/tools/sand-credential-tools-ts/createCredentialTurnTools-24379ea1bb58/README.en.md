# `createCredentialTurnTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752025-752062](../../../../../../../reference/runtime/host-main.cjs#L752025-L752062) | `FunctionDeclaration` | no | `host` |
| [evaluation:525091-525128](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525091-L525128) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752025-752062](../../../../../../../reference/runtime/host-main.cjs#L752025-L752062) | 7 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:525091-525128](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525091-L525128) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:752025

Calls written directly in this body: `brokeredLoginRoute`, `buildsOnePasswordConnectTools`, `createBrokeredCredentialTools`, `createCredentialProviderStatusTool`, `createCredentialTools`, `createOnePasswordConnectTools`, `loginFormGuidanceFor`, `savedLoginLister`.

SHA-256 of the source span: `fd24ec19f4e72df38f994fdbb8fee33ea2743b137941eec34fa23e6516ccf091`.

### evaluation:525091

Calls written directly in this body: `brokeredLoginRoute`, `buildsOnePasswordConnectTools`, `createBrokeredCredentialTools`, `createCredentialProviderStatusTool`, `createCredentialTools`, `createOnePasswordConnectTools`, `loginFormGuidanceFor`, `savedLoginLister`.

SHA-256 of the source span: `fd24ec19f4e72df38f994fdbb8fee33ea2743b137941eec34fa23e6516ccf091`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
