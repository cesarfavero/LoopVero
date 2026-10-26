# `createUserSkillsCacheService`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/user-skills-cache/user-skills-cache-service.ts` · [Module README](../../../../../../modules/host/extensions/user-skills-cache/user-skills-cache-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784627-784701](../../../../../../../reference/runtime/host-main.cjs#L784627-L784701) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784627-784701](../../../../../../../reference/runtime/host-main.cjs#L784627-L784701) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:784627

Calls written directly in this body: `createDebouncePolicy`, `createSingleFlight`, `deps.debounce.wrap`, `new AbortController`, `new WatchedDirectory`, `publishSoon`, `watch4.setOnChange`.

SHA-256 of the source span: `bcc258c96cd20e47dad9cc878ff7ee45ed3fc266e00ba73502f22c9c65d9bb21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
