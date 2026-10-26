# `createComputerUseCoordination/recordSessionMetrics`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525513-525522](../../../../../../reference/runtime/sand-eval-runner.cjs#L525513-L525522) | `FunctionExpression` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525513-525522](../../../../../../reference/runtime/sand-eval-runner.cjs#L525513-L525522) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525513

Chamadas escritas diretamente neste corpo: `sessionAutoReview.histogram`, `sessionDuration.histogram`.

SHA-256 do trecho: `939dc6e32cd9d4a3369a3060b7928ba67c1b7053ce2330497944bf553d26add1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
