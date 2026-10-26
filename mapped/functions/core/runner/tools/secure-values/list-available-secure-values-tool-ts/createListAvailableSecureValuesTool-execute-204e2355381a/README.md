# `createListAvailableSecureValuesTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/list-available-secure-values-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/list-available-secure-values-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767310-767347](../../../../../../../../reference/runtime/host-main.cjs#L767310-L767347) | `ArrowFunctionExpression` | sim | `ctx, args, d` |
| [evaluation:562829-562866](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562829-L562866) | `ArrowFunctionExpression` | sim | `ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767310-767347](../../../../../../../../reference/runtime/host-main.cjs#L767310-L767347) | 9 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:562829-562866](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L562829-L562866) | 9 | 0 | 3 | 4 | 0 | 0 |

### host:767310

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.reduce`, `Promise.all`, `String`, `d.secureValues.listMetadata`, `d.secureValues.listSavedCards`, `d.secureValues.listSavedLogins`, `listedSite`, `metadata3.filter`, `renderAvailableSecureValues`, `renderSavedCards`, `renderSavedLogins`, `savedCards.slice`, `secureValueLists.increment`, `secureValueResultCountBucket`.

SHA-256 do trecho: `dc65eede531ca818dfd8489efd9475ce90a9c17e3aeb26391dba04f6b5f051f8`.

### evaluation:562829

Chamadas escritas diretamente neste corpo: `.filter`, `.join`, `.reduce`, `Promise.all`, `String`, `d.secureValues.listMetadata`, `d.secureValues.listSavedCards`, `d.secureValues.listSavedLogins`, `listedSite`, `metadata3.filter`, `renderAvailableSecureValues`, `renderSavedCards`, `renderSavedLogins`, `savedCards.slice`, `secureValueLists.increment`, `secureValueResultCountBucket`.

SHA-256 do trecho: `dc65eede531ca818dfd8489efd9475ce90a9c17e3aeb26391dba04f6b5f051f8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
