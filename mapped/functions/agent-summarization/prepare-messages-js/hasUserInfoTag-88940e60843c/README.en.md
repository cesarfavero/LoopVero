# `hasUserInfoTag`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/prepare-messages.js` · [Module README](../../../../modules/agent-summarization/prepare-messages-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620512-620519](../../../../../reference/runtime/host-main.cjs#L620512-L620519) | `FunctionDeclaration` | no | `message` |
| [evaluation:304866-304873](../../../../../reference/runtime/sand-eval-runner.cjs#L304866-L304873) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620512-620519](../../../../../reference/runtime/host-main.cjs#L620512-L620519) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304866-304873](../../../../../reference/runtime/sand-eval-runner.cjs#L304866-L304873) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:620512

Calls written directly in this body: `.join`, `.map`, `USER_INFO_TAG_REGEX.test`, `content.filter`, `content.search`, `isRedactedString`.

SHA-256 of the source span: `ffa66518db43f3433c8c253f34ca1ee9729230d42b2e19afafc7fb71004c8f61`.

### evaluation:304866

Calls written directly in this body: `.join`, `.map`, `USER_INFO_TAG_REGEX.test`, `content.filter`, `content.search`, `isRedactedString`.

SHA-256 of the source span: `004e0f29cb51d44abdf8e17bde0ba6d84e005bacd9713a51e6ddb64ecabbbfe1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
