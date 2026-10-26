# `cardTextProblems`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/card-text.ts` · [README do módulo](../../../../../modules/shared/transcript/card-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706906-706934](../../../../../../reference/runtime/host-main.cjs#L706906-L706934) | `FunctionDeclaration` | não | `path33, text3, rule` |
| [evaluation:481003-481031](../../../../../../reference/runtime/sand-eval-runner.cjs#L481003-L481031) | `FunctionDeclaration` | não | `path33, text3, rule` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706906-706934](../../../../../../reference/runtime/host-main.cjs#L706906-L706934) | 9 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:481003-481031](../../../../../../reference/runtime/sand-eval-runner.cjs#L481003-L481031) | 9 | 0 | 0 | 3 | 0 | 0 |

### host:706906

Chamadas escritas diretamente neste corpo: `Array.from`, `LINE_BREAKS.test`, `cardTextEntities`, `cardTextSite`, `codePoints`, `entities.join`, `hidden.join`, `new Set`, `problems.push`, `symbols.join`, `text3.matchAll`.

SHA-256 do trecho: `0219e07bd14193e48e65aaa47bf18e85bdd3817c52dfcb89e0689f069cbc380f`.

### evaluation:481003

Chamadas escritas diretamente neste corpo: `Array.from`, `LINE_BREAKS.test`, `cardTextEntities`, `cardTextSite`, `codePoints`, `entities.join`, `hidden.join`, `new Set`, `problems.push`, `symbols.join`, `text3.matchAll`.

SHA-256 do trecho: `0219e07bd14193e48e65aaa47bf18e85bdd3817c52dfcb89e0689f069cbc380f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
