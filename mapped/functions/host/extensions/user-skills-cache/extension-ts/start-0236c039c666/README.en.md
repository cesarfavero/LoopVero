# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/user-skills-cache/extension.ts` · [Module README](../../../../../../modules/host/extensions/user-skills-cache/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784839-784864](../../../../../../../reference/runtime/host-main.cjs#L784839-L784864) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784839-784864](../../../../../../../reference/runtime/host-main.cjs#L784839-L784864) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784839

Calls written directly in this body: `context2.onStop`, `createDeadlinePolicy`, `createSandCursorBackendClient`, `createUserSkillsCacheDebounce`, `createUserSkillsCachePublishRetry`, `createUserSkillsCacheService`, `getGlobalSkillsDir`, `getSandRootDir`.

SHA-256 of the source span: `311809b346773486ce0f58aee088709774456101cea0c121e1f25fdf98dbe58e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
