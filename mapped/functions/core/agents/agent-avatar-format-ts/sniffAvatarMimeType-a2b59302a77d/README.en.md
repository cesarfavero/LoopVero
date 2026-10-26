# `sniffAvatarMimeType`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-avatar-format.ts` · [Module README](../../../../../modules/core/agents/agent-avatar-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494481-494498](../../../../../../reference/runtime/host-main.cjs#L494481-L494498) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:543642-543659](../../../../../../reference/runtime/sand-eval-runner.cjs#L543642-L543659) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494481-494498](../../../../../../reference/runtime/host-main.cjs#L494481-L494498) | 6 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:543642-543659](../../../../../../reference/runtime/sand-eval-runner.cjs#L543642-L543659) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:494481

Calls written directly in this body: `.replace`, `.toLowerCase`, `.trimStart`, `Math.min`, `bytes.toString`, `head.includes`, `head.startsWith`.

SHA-256 of the source span: `733277102ec5fb7bd65da448e431309c846e135ee14634d3993c3419cc3635fe`.

### evaluation:543642

Calls written directly in this body: `.replace`, `.toLowerCase`, `.trimStart`, `Math.min`, `bytes.toString`, `head.includes`, `head.startsWith`.

SHA-256 of the source span: `733277102ec5fb7bd65da448e431309c846e135ee14634d3993c3419cc3635fe`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
