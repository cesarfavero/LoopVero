# `createTurnAgentComposition/buildAgentForRun/check`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-agent-composition.ts` · [README do módulo](../../../../../modules/core/runner/turn-agent-composition-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588152-588152](../../../../../../reference/runtime/sand-eval-runner.cjs#L588152-L588152) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588152-588152](../../../../../../reference/runtime/sand-eval-runner.cjs#L588152-L588152) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:588152 usa retorno implícito de arrow function.

### evaluation:588152

Chamadas escritas diretamente neste corpo: `host.inference.checkExternalSendBeforeSend`.

SHA-256 do trecho: `8d8752554ab30d121bf8518944ffebc0d610f5fc16ed17918882c571b69f531a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
