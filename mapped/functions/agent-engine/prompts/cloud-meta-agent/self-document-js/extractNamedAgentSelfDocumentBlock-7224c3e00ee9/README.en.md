# `extractNamedAgentSelfDocumentBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-meta-agent/self-document.js` · [Module README](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/self-document-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647561-647566](../../../../../../../reference/runtime/host-main.cjs#L647561-L647566) | `FunctionDeclaration` | no | `text3` |
| [evaluation:439221-439226](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439221-L439226) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647561-647566](../../../../../../../reference/runtime/host-main.cjs#L647561-L647566) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:439221-439226](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439221-L439226) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:647561

Calls written directly in this body: `SELF_DOCUMENT_BLOCK_REGEX.exec`.

SHA-256 of the source span: `adff8139c166691a143365fecb8aaf0a0e95d9041efe56e0ca71e53fe2a56f2f`.

### evaluation:439221

Calls written directly in this body: `SELF_DOCUMENT_BLOCK_REGEX.exec`.

SHA-256 of the source span: `adff8139c166691a143365fecb8aaf0a0e95d9041efe56e0ca71e53fe2a56f2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
