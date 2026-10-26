# `createOrbitService/performDispose`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/orbit-service.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706339-706365](../../../../../../../reference/runtime/host-main.cjs#L706339-L706365) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706339-706365](../../../../../../../reference/runtime/host-main.cjs#L706339-L706365) | 3 | 1 | 2 | 0 | 2 | 1 |

### host:706339

Chamadas escritas diretamente neste corpo: `.map`, `Promise.allSettled`, `deps.log`, `deps.proxySupervisor.dispose`, `deps.sessionController.dispose`, `errorLogTag`, `new AggregateError`, `resetChromeDiscovery`, `results.filter`, `state.discoveryPolling.dispose`, `unsubscribe`.

Alvos de atribuição ou incremento: `state.disposed`, `state.generation`.

Alvos de lançamento explícito: `AggregateError`, `failures2[computed]`.

SHA-256 do trecho: `34bd39de7e16daa657936b37c5d6a6dc6dbeee83d44bd31d05e786ac1cf7b397`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
