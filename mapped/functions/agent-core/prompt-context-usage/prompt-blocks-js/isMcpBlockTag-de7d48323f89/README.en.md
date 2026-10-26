# `isMcpBlockTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-blocks.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476144-476146](../../../../../../reference/runtime/host-main.cjs#L476144-L476146) | `FunctionDeclaration` | no | `tagName2` |
| [evaluation:255454-255456](../../../../../../reference/runtime/sand-eval-runner.cjs#L255454-L255456) | `FunctionDeclaration` | no | `tagName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476144-476146](../../../../../../reference/runtime/host-main.cjs#L476144-L476146) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255454-255456](../../../../../../reference/runtime/sand-eval-runner.cjs#L255454-L255456) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476144

Calls written directly in this body: `tagName2.startsWith`.

SHA-256 of the source span: `a6ebdf5ef254133e32fa74ffb7c3551bd61b54f66bcc26854e5d777c378d1f63`.

### evaluation:255454

Calls written directly in this body: `tagName.startsWith`.

SHA-256 of the source span: `491aa3ed7836d5f12e15d631c9731220b69cd2bbb8e563530ed8926c1c7b24f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
