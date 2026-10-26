# `createComputerUseCoordination/recordTurnEnded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525491-525494](../../../../../../reference/runtime/sand-eval-runner.cjs#L525491-L525494) | `FunctionExpression` | não | `turnUsage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525491-525494](../../../../../../reference/runtime/sand-eval-runner.cjs#L525491-L525494) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:525491

Chamadas escritas diretamente neste corpo: `mergeTurnUsage`.

Alvos de atribuição ou incremento: `turnEndedCount`, `usage`.

SHA-256 do trecho: `61d42f4f026b88019dea1170cce8f899700f2adae2a542948036d24b6a4b678a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
