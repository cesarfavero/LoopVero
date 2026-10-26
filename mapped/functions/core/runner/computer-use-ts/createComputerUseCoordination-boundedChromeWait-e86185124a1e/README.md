# `createComputerUseCoordination/boundedChromeWait`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525318-525333](../../../../../../reference/runtime/sand-eval-runner.cjs#L525318-L525333) | `ArrowFunctionExpression` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525318-525333](../../../../../../reference/runtime/sand-eval-runner.cjs#L525318-L525333) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:525318

Chamadas escritas diretamente neste corpo: `chromePreparedBySubagent.get`, `chromeWaitBySubagent.get`, `chromeWaitBySubagent.set`, `new Promise`.

Alvos de atribuição ou incremento: `wait2`.

SHA-256 do trecho: `c5a4a2ef21db6c41c86a5206a4a9c0d10b6c51562ac406d129c4ba4be1f257a3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
