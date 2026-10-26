# `renderNamedAgentSelfDocumentBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-meta-agent/self-document.js` · [Module README](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/self-document-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647549-647560](../../../../../../../reference/runtime/host-main.cjs#L647549-L647560) | `FunctionDeclaration` | no | `contents` |
| [evaluation:439209-439220](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439209-L439220) | `FunctionDeclaration` | no | `contents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647549-647560](../../../../../../../reference/runtime/host-main.cjs#L647549-L647560) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:439209-439220](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439209-L439220) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:647549

Calls written directly in this body: `.join`, `.replaceAll`, `contents.trim`, `rawBody.replaceAll`.

SHA-256 of the source span: `bd64f425ac232d8cd1b7c0bf56a045907f7cb2215676beb4e79cca56df997de8`.

### evaluation:439209

Calls written directly in this body: `.join`, `.replaceAll`, `contents.trim`, `rawBody.replaceAll`.

SHA-256 of the source span: `bd64f425ac232d8cd1b7c0bf56a045907f7cb2215676beb4e79cca56df997de8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
