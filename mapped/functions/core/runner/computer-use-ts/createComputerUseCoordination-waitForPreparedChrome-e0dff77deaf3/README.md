# `createComputerUseCoordination/waitForPreparedChrome`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/computer-use.ts` · [README do módulo](../../../../../modules/core/runner/computer-use-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525459-525481](../../../../../../reference/runtime/sand-eval-runner.cjs#L525459-L525481) | `FunctionExpression` | não | `agentId, signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525459-525481](../../../../../../reference/runtime/sand-eval-runner.cjs#L525459-L525481) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:525459

Chamadas escritas diretamente neste corpo: `Promise.resolve`, `boundedChromeWait`, `chromeWaitBySubagent.has`, `ended.then`, `new Promise`, `performance.now`.

SHA-256 do trecho: `8195999c1fe1c40ec9d17a95735a435219b4fcfae4bf4e2eb02780212f69d38a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
