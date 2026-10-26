# `resolveRequestUserFormOffer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779051-779075](../../../../../../../../reference/runtime/host-main.cjs#L779051-L779075) | `FunctionDeclaration` | no | `runner, host` |
| [evaluation:578785-578809](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578785-L578809) | `FunctionDeclaration` | no | `runner, host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779051-779075](../../../../../../../../reference/runtime/host-main.cjs#L779051-L779075) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:578785-578809](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578785-L578809) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:779051

Calls written directly in this body: `host.gates.secureValues`, `offersUserFormInParent`, `resolveRequestUserFormGateState`.

SHA-256 of the source span: `aa8fb6ef2e2e8ac8619db2865c22f94e1974b9d88fd1b451662d84a6dbc78c5b`.

### evaluation:578785

Calls written directly in this body: `host.gates.secureValues`, `offersUserFormInParent`, `resolveRequestUserFormGateState`.

SHA-256 of the source span: `aa8fb6ef2e2e8ac8619db2865c22f94e1974b9d88fd1b451662d84a6dbc78c5b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
