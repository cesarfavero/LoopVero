# `listVault`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/secure-values/vault-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:767929-767943](../../../../../../../../reference/runtime/host-main.cjs#L767929-L767943) | `FunctionDeclaration` | sim | `deps, kind` |
| [evaluation:563445-563459](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563445-L563459) | `FunctionDeclaration` | sim | `deps, kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767929-767943](../../../../../../../../reference/runtime/host-main.cjs#L767929-L767943) | 7 | 0 | 2 | 1 | 0 | 0 |
| [evaluation:563445-563459](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563445-L563459) | 7 | 0 | 2 | 1 | 0 | 0 |

### host:767929

Chamadas escritas diretamente neste corpo: `.join`, `Promise.all`, `cardsBlock`, `chatValueNames`, `chatValuesBlock`, `contactsBlock`, `loginsBlock`, `settingsOnly`, `values.listSavedCards`, `values.listSavedContacts`, `values.listSavedLoginSummaries`.

SHA-256 do trecho: `c4e275204471a5b40cedbd5790e76ecbe0b629add721f7b1fd51be6948437baa`.

### evaluation:563445

Chamadas escritas diretamente neste corpo: `.join`, `Promise.all`, `cardsBlock`, `chatValueNames`, `chatValuesBlock`, `contactsBlock`, `loginsBlock`, `settingsOnly`, `values.listSavedCards`, `values.listSavedContacts`, `values.listSavedLoginSummaries`.

SHA-256 do trecho: `c4e275204471a5b40cedbd5790e76ecbe0b629add721f7b1fd51be6948437baa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
