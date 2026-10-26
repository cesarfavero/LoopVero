# `sanitizeStreamResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/conversation-state.ts` · [README do módulo](../../../../../modules/core/runner/conversation-state-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529511-529551](../../../../../../reference/runtime/sand-eval-runner.cjs#L529511-L529551) | `FunctionDeclaration` | não | `ctx, result, modelId, onResolvedModelId, streamObserver` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529511-529551](../../../../../../reference/runtime/sand-eval-runner.cjs#L529511-L529551) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529511

Chamadas escritas diretamente neste corpo: `.then`, `Promise.all`, `result.usage.then`, `sanitizeFullStream`.

SHA-256 do trecho: `97f6f3a6f7d41b77a0bf94c69f79d6c38d127521e7f6fe32b53ec46c85147220`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
