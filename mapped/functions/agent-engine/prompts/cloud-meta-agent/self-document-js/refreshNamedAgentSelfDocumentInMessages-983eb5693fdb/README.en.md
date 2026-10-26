# `refreshNamedAgentSelfDocumentInMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/cloud-meta-agent/self-document.js` · [Module README](../../../../../../modules/agent-engine/prompts/cloud-meta-agent/self-document-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:647581-647637](../../../../../../../reference/runtime/host-main.cjs#L647581-L647637) | `FunctionDeclaration` | yes | `ctx, messages2, getNamedAgentSelfDocument, privacyMode` |
| [evaluation:439241-439297](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439241-L439297) | `FunctionDeclaration` | yes | `ctx, messages, getNamedAgentSelfDocument, privacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:647581-647637](../../../../../../../reference/runtime/host-main.cjs#L647581-L647637) | 1 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:439241-439297](../../../../../../../reference/runtime/sand-eval-runner.cjs#L439241-L439297) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:647581

Calls written directly in this body: `getNamedAgentSelfDocument`, `logger59.warn`, `messages2.map`.

Assignment or increment targets: `contents`.

SHA-256 of the source span: `1abbad0b14f11d5c1c0910702cc2df20604a91e7f22bd951e7f98bce6728319f`.

### evaluation:439241

Calls written directly in this body: `getNamedAgentSelfDocument`, `logger36.warn`, `messages.map`.

Assignment or increment targets: `contents`.

SHA-256 of the source span: `05a94c30ba63d419ba17bf153911bc0392f45b1929b56ac90172980909e53f93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
