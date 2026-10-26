# `sanitizePromptSessionUsage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-state.ts` · [README do módulo](../../../../../modules/core/runner/conversation-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529625-529670](../../../../../../reference/runtime/sand-eval-runner.cjs#L529625-L529670) | `FunctionDeclaration` | não | `session, resolvedModelTracker = createSandResolvedModelTracker(), onResolvedModelId, streamObserver, untrackedStreamObserver` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529625-529670](../../../../../../reference/runtime/sand-eval-runner.cjs#L529625-L529670) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529625

Chamadas escritas diretamente neste corpo: `resolvedModelTracker.get`, `session.getModelId`.

SHA-256 do trecho: `ebe68f03562ac73bd24d1f1d122323bbc923c2c3d3587c3f75c6803d7c1a5834`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
