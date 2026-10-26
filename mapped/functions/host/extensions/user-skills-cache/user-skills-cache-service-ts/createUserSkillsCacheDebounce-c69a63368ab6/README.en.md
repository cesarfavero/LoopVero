# `createUserSkillsCacheDebounce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/user-skills-cache/user-skills-cache-service.ts` · [Module README](../../../../../../modules/host/extensions/user-skills-cache/user-skills-cache-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784610-784615](../../../../../../../reference/runtime/host-main.cjs#L784610-L784615) | `FunctionDeclaration` | no | `delayMs = USER_SKILLS_CACHE_PUBLISH_DEBOUNCE_MS` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784610-784615](../../../../../../../reference/runtime/host-main.cjs#L784610-L784615) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784610

Calls written directly in this body: `createDebouncePolicy`.

SHA-256 of the source span: `c0857c77aa4dedb804d767389a67d0e2828d600285bd3542ee6fb848fba2a292`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
