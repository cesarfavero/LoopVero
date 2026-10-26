# `provisionSandBoxPromptArtifacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/box-reference-docs.ts` · [README do módulo](../../../../../modules/core/runner/box-reference-docs-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:558530-558543](../../../../../../reference/runtime/host-main.cjs#L558530-L558543) | `FunctionDeclaration` | sim | `facts = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:558530-558543](../../../../../../reference/runtime/host-main.cjs#L558530-L558543) | 2 | 0 | 1 | 0 | 1 | 0 |

### host:558530

Chamadas escritas diretamente neste corpo: `Promise.allSettled`, `Promise.resolve`, `ensureDataRootAlias`, `getSandRootDir`, `outcomes.find`, `writeSandBoxReferenceDocs`.

Alvos de lançamento explícito: `failed2.reason`.

SHA-256 do trecho: `eb1cbcf1e7c2f11c1c076366a275980e4f954b4616be6dd6ee4343598a8c8a76`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
