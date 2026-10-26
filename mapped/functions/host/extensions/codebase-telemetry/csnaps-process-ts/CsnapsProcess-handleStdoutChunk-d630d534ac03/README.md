# `_CsnapsProcess.handleStdoutChunk`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/csnaps-process.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-process-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541579-541603](../../../../../../../reference/runtime/host-main.cjs#L541579-L541603) | `method` | não | `chunk` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541579-541603](../../../../../../../reference/runtime/host-main.cjs#L541579-L541603) | 4 | 2 | 0 | 1 | 2 | 1 |

### host:541579

Chamadas escritas diretamente neste corpo: `new CsnapsProcessError`, `new Set`, `seenResponseIds.add`, `seenResponseIds.has`, `this.fail`, `this.pendingRequests.has`, `this.responseDecoder.decode`, `this.settlePendingRequest`.

Alvos de lançamento explícito: `CsnapsProcessError`.

SHA-256 do trecho: `ad5a3216bfb7f037f7e1beb825e144617bfeabb9807381c250fd18b3f4a9ace2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
