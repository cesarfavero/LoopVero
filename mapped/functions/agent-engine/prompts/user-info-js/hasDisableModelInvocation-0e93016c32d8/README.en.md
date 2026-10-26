# `hasDisableModelInvocation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640627-640642](../../../../../../reference/runtime/host-main.cjs#L640627-L640642) | `FunctionDeclaration` | no | `rule, useCache, featureFlags` |
| [evaluation:431241-431256](../../../../../../reference/runtime/sand-eval-runner.cjs#L431241-L431256) | `FunctionDeclaration` | no | `rule, useCache, featureFlags` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640627-640642](../../../../../../reference/runtime/host-main.cjs#L640627-L640642) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:431241-431256](../../../../../../reference/runtime/sand-eval-runner.cjs#L431241-L431256) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:640627

Calls written directly in this body: `disableModelInvocationByContent.get`, `disableModelInvocationByContent.set`, `readDisableModelInvocation`.

SHA-256 of the source span: `4ea17ca0b206c375ffbd1258e34a32fcfc8a40cd76720a02cc8cdff6c00bfd91`.

### evaluation:431241

Calls written directly in this body: `disableModelInvocationByContent.get`, `disableModelInvocationByContent.set`, `readDisableModelInvocation`.

SHA-256 of the source span: `4ea17ca0b206c375ffbd1258e34a32fcfc8a40cd76720a02cc8cdff6c00bfd91`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
