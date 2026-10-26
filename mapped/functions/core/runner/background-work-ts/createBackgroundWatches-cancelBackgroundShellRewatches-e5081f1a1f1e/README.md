# `createBackgroundWatches/cancelBackgroundShellRewatches`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490700-490708](../../../../../../reference/runtime/sand-eval-runner.cjs#L490700-L490708) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490700-490708](../../../../../../reference/runtime/sand-eval-runner.cjs#L490700-L490708) | 0 | 2 | 0 | 0 | 0 | 0 |

### evaluation:490700

Chamadas escritas diretamente neste corpo: `notifyShellWorkChanged`, `rewatch.cancel`, `shellRegistry.clearWork`, `shellRegistry.listWork`, `shellRewatches.clear`, `shellRewatches.values`.

SHA-256 do trecho: `2393f00c866fc16e1537e1ffa5fe9e3300fc6cf3476e7c77883dfdbc451ec77a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
