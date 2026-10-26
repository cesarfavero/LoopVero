# `createComputerUseCoordination/prepareRemoteBox`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525403-525458](../../../../../../reference/runtime/sand-eval-runner.cjs#L525403-L525458) | `FunctionExpression` | não | `{ agentId, boxId, browserSurface }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525403-525458](../../../../../../reference/runtime/sand-eval-runner.cjs#L525403-L525458) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525403

Chamadas escritas diretamente neste corpo: `.catch`, `.then`, `chromePrepared.catch`, `chromePreparedBySubagent.set`, `chromeWaitBySubagent.delete`, `connection.then`, `deps.remoteBox.ensureReady`, `reached.then`, `withSandBoxTouchReason`.

SHA-256 do trecho: `a6d7796bc7bda4cf9ece0bd8d4ffcc35adea460fb2d4a2f38bda4a9332916d35`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
