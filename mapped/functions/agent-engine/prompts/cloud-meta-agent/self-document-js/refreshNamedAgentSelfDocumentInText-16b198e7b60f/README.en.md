# `refreshNamedAgentSelfDocumentInText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-meta-agent/self-document.js` · [Module README](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/self-document-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647567-647580](../../../../../../../reference/runtime/host-main.cjs#L647567-L647580) | `FunctionDeclaration` | no | `text3, contents` |
| [evaluation:439227-439240](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439227-L439240) | `FunctionDeclaration` | no | `text3, contents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647567-647580](../../../../../../../reference/runtime/host-main.cjs#L647567-L647580) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:439227-439240](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439227-L439240) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:647567

Calls written directly in this body: `SELF_DOCUMENT_BLOCK_REGEX.test`, `renderNamedAgentSelfDocumentBlock`, `text3.indexOf`, `text3.replace`, `text3.slice`.

SHA-256 of the source span: `4c1f65a742f247784f00b043a6c717a5a06428fa86519a5e8c904e78c9e0998b`.

### evaluation:439227

Calls written directly in this body: `SELF_DOCUMENT_BLOCK_REGEX.test`, `renderNamedAgentSelfDocumentBlock`, `text3.indexOf`, `text3.replace`, `text3.slice`.

SHA-256 of the source span: `4c1f65a742f247784f00b043a6c717a5a06428fa86519a5e8c904e78c9e0998b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
