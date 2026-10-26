# `createComputerUseCoordination/recordToolCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525383-525387](../../../../../../reference/runtime/sand-eval-runner.cjs#L525383-L525387) | `ArrowFunctionExpression` | não | `tool` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525383-525387](../../../../../../reference/runtime/sand-eval-runner.cjs#L525383-L525387) | 3 | 0 | 0 | 0 | 0 | 0 |

### evaluation:525383

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `browserToolCalls.find`, `browserToolCalls.snapshot`, `browserToolCalls.waitFor`.

SHA-256 do trecho: `2cc7d3f6bf202712096d1d07b4e3df0ba941c48042c7e5bc1192b35f1253df50`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
