# `AutomationCompletionMiddleware.injectPending`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/runner/automation-completion-middleware.ts` · [README do módulo](../../../../../modules/core/runner/automation-completion-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:586364-586411](../../../../../../reference/runtime/sand-eval-runner.cjs#L586364-L586411) | `method` | não | `ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:586364-586411](../../../../../../reference/runtime/sand-eval-runner.cjs#L586364-L586411) | 7 | 3 | 0 | 1 | 0 | 1 |

### evaluation:586364

Chamadas escritas diretamente neste corpo: `completionIdOf`, `completionMessages.push`, `createAutomationCompletionPromptMessage`, `errorLogTag`, `existingMessages.slice`, `isAutomationCompletionPromptMessage`, `logger100.warn`, `this.injectedIds.add`, `this.injectedIds.has`, `this.innerExecutor.appendMessages`, `this.innerExecutor.clearMessages`, `this.innerExecutor.getMessages`, `this.isRenamedSpelling`, `this.source.drain`, `this.source.stageForCheckpoint`.

Alvos de atribuição ou incremento: `completions`, `this.restoredInjectedIds`, `trailingUserStart`.

SHA-256 do trecho: `15564fd3f6f8813926e96ca0ef1b3982a93338bc12a72d96a84f584905344b9f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
