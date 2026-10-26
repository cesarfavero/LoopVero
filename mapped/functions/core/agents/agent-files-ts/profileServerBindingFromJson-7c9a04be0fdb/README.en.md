# `profileServerBindingFromJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-files.ts` · [Module README](../../../../../modules/core/agents/agent-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490836-490847](../../../../../../reference/runtime/host-main.cjs#L490836-L490847) | `FunctionDeclaration` | no | `parsed2` |
| [evaluation:629051-629062](../../../../../../reference/runtime/sand-eval-runner.cjs#L629051-L629062) | `FunctionDeclaration` | no | `parsed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490836-490847](../../../../../../reference/runtime/host-main.cjs#L490836-L490847) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:629051-629062](../../../../../../reference/runtime/sand-eval-runner.cjs#L629051-L629062) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:490836

Calls written directly in this body: `isSandAgentOrigin`, `isSandAgentPurpose`, `profileHarnessFromJson`, `profileRoleFromJson`, `profileServerIdFromJson`.

SHA-256 of the source span: `94404e62b30cde785334fc91618789bfbdfa6e73dd35b079f6897db753e44e24`.

### evaluation:629051

Calls written directly in this body: `isSandAgentOrigin`, `isSandAgentPurpose`, `profileHarnessFromJson`, `profileRoleFromJson`, `profileServerIdFromJson`.

SHA-256 of the source span: `dcd11359aef048b7b4119a2fa59ce51cc00bfd032da2a88400f83ee3005e0079`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
