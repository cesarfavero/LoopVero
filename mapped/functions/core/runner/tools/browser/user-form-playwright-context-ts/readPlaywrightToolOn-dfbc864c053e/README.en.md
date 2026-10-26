# `readPlaywrightToolOn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/user-form-playwright-context.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/user-form-playwright-context-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767512-767544](../../../../../../../../reference/runtime/host-main.cjs#L767512-L767544) | `FunctionDeclaration` | yes | `ctx, exec2, server, toolName, args` |
| [evaluation:563029-563061](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563029-L563061) | `FunctionDeclaration` | yes | `ctx, exec2, server, toolName, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767512-767544](../../../../../../../../reference/runtime/host-main.cjs#L767512-L767544) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:563029-563061](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563029-L563061) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:767512

Calls written directly in this body: `.map`, `.then`, `Object.entries`, `Object.fromEntries`, `exec2.executeTool`, `new McpArgs`, `withTimeout`.

SHA-256 of the source span: `3593881f3776ba13e4b4ffff1bc975ecdef53248ca55cb26e847dd363b98a4ea`.

### evaluation:563029

Calls written directly in this body: `.map`, `.then`, `Object.entries`, `Object.fromEntries`, `exec2.executeTool`, `new McpArgs`, `withTimeout`.

SHA-256 of the source span: `6a21bf32d3873a5e88cf5fa6db4cc21fb13f89ffd2fb72f08bca5ef34fe5f286`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
