# `createSandTaskTool`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: subagents](../../components/subagents/README.en.md) · [Index](../../README.en.md)

**Primary source:** [host-main.cjs:763474-763547](../../../reference/runtime/host-main.cjs#L763474-L763547). Static analysis of the original snapshot; names preserved from the bundle.

## Responsibility

`createSandTaskTool(args)` creates the subagent delegation tool. The singular name matters: this is not the `createSandTaskTools` factory for documentary tasks.

## Construction

Combines parent resources with the remote box's read executor; supplies initial configuration without tools, a tool session, and a summarization handler; passes allowed types and models to the generic `createTaskTool`. Disables custom model IDs, automatic explore, and mandatory server-side execution; enables client-side execution, completion notifications, and a hint against polling.

## Context and models

The default requires a self-contained prompt because the child does not see the conversation. The forked-executor variant depends on an executor being present in the configurations and the `executorForkContext` gate; in that variant, new executors can inherit the parent's context. The effort/model parameter appears only if the executor profile allows it. Resume retains context from a previous execution instead of always creating a new child.

## Prefetch

If `turn.subagentLaunchPrefetch` exists, the tool receives a wrapper that starts loading review context when streaming arguments begin. This brings work forward; it neither waives review nor proves that the launch was approved.

## Boundaries

Client-side describes the execution alternative used by the agent's client; it does not automatically mean the local Mac. The factory is not an operating-system sandbox. Generic task code, the host controller, and specific policies determine execution, cancellation, and persistence.
