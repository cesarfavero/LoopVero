# `longestSpelled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-display-name.ts` · [README do módulo](../../../../../modules/core/email/email-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715900-715929](../../../../../../reference/runtime/host-main.cjs#L715900-L715929) | `FunctionDeclaration` | não | `value, lexicon` |
| [evaluation:527569-527598](../../../../../../reference/runtime/sand-eval-runner.cjs#L527569-L527598) | `FunctionDeclaration` | não | `value, lexicon` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715900-715929](../../../../../../reference/runtime/host-main.cjs#L715900-L715929) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527569-527598](../../../../../../reference/runtime/sand-eval-runner.cjs#L527569-L527598) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715900

Chamadas escritas diretamente neste corpo: `.fill`, `edgesOf`, `lexicon.inside.filter`, `lexicon.spans.filter`, `lexicon.wholeNames.filter`, `lexicon.words.filter`, `matched.reduce`, `new Uint8Array`, `spelledIn`, `words2.join`, `words2.map`, `wordsOf`.

SHA-256 do trecho: `6dd46adfcea9c87fe316a1afb5d669a16ad76cc9110a17a8951c9c94dbef7055`.

### evaluation:527569

Chamadas escritas diretamente neste corpo: `.fill`, `edgesOf`, `lexicon.inside.filter`, `lexicon.spans.filter`, `lexicon.wholeNames.filter`, `lexicon.words.filter`, `matched.reduce`, `new Uint8Array`, `spelledIn`, `words.join`, `words.map`, `wordsOf`.

SHA-256 do trecho: `bb891b59b891e5174e229f13396719d87c7490b948c98a6ce6bfcdae6a938bab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
