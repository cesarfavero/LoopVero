# `createComputerUseCoordination/freeWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525398-525402](../../../../../../reference/runtime/sand-eval-runner.cjs#L525398-L525402) | `FunctionExpression` | não | `subagentAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525398-525402](../../../../../../reference/runtime/sand-eval-runner.cjs#L525398-L525402) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:525398

Chamadas escritas diretamente neste corpo: `chromePreparedBySubagent.delete`, `chromeWaitBySubagent.delete`, `windowBySubagent.delete`.

SHA-256 do trecho: `5f293e76792c77767a77517a78fe63beda2cc5eb0f3795cb5ae5a2796d748c13`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
