# `parseStoredConfigTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716464-716471](../../../../../../reference/runtime/host-main.cjs#L716464-L716471) | `FunctionDeclaration` | no | `parsed2` |
| [evaluation:627178-627185](../../../../../../reference/runtime/sand-eval-runner.cjs#L627178-L627185) | `FunctionDeclaration` | no | `parsed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716464-716471](../../../../../../reference/runtime/host-main.cjs#L716464-L716471) | 4 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627178-627185](../../../../../../reference/runtime/sand-eval-runner.cjs#L627178-L627185) | 4 | 0 | 0 | 2 | 0 | 0 |

### host:716464

Calls written directly in this body: `cronTrigger`, `isTriggerParseFailure`, `normalizeSchedule`, `parseStoredTrigger`.

SHA-256 of the source span: `0e0b3fafdf076a36a00798663f81a6bf71c9d7fb8c18bdd2e63cdd965e3fd636`.

### evaluation:627178

Calls written directly in this body: `cronTrigger`, `isTriggerParseFailure`, `normalizeSchedule`, `parseStoredTrigger`.

SHA-256 of the source span: `0cfe8d9b33a474a014ec82dad2d38fb48639a2a5d0d5b990207a87fe640cc4ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
