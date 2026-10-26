# `createComputerUseCoordination/allocateWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525390-525397](../../../../../../reference/runtime/sand-eval-runner.cjs#L525390-L525397) | `FunctionExpression` | não | `subagentAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525390-525397](../../../../../../reference/runtime/sand-eval-runner.cjs#L525390-L525397) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:525390

Chamadas escritas diretamente neste corpo: `.includes`, `windowBySubagent.get`, `windowBySubagent.set`, `windowBySubagent.values`.

SHA-256 do trecho: `7c05c141f5d8f6ed6171f9be3fdfa0ac05d32049885176b41a9a80c3534a3d60`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
