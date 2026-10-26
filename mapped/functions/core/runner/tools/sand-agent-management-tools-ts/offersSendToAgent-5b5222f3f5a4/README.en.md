# `offersSendToAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757366-757369](../../../../../../../reference/runtime/host-main.cjs#L757366-L757369) | `FunctionDeclaration` | no | `host` |
| [evaluation:543389-543392](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543389-L543392) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757366-757369](../../../../../../../reference/runtime/host-main.cjs#L757366-L757369) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:543389-543392](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543389-L543392) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:757366

Calls written directly in this body: `host.gates.automationSendToAgent`.

SHA-256 of the source span: `c8e747c4c855c29fef304011cc6a2eb294fcaab09afed7a67962d30057df954f`.

### evaluation:543389

Calls written directly in this body: `host.gates.automationSendToAgent`.

SHA-256 of the source span: `c8e747c4c855c29fef304011cc6a2eb294fcaab09afed7a67962d30057df954f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
