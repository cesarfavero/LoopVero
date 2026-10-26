# `spells`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-display-name.ts` · [README do módulo](../../../../../modules/core/email/email-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715873-715896](../../../../../../reference/runtime/host-main.cjs#L715873-L715896) | `FunctionDeclaration` | não | `text3, { length, lettersByUnit, lettersEnteredOnRepeat }, { mayStart, mayEnd, lastStart, crossesWords }` |
| [evaluation:527542-527565](../../../../../../reference/runtime/sand-eval-runner.cjs#L527542-L527565) | `FunctionDeclaration` | não | `text3, { length, lettersByUnit, lettersEnteredOnRepeat }, { mayStart, mayEnd, lastStart, crossesWords }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715873-715896](../../../../../../reference/runtime/host-main.cjs#L715873-L715896) | 7 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:527542-527565](../../../../../../reference/runtime/sand-eval-runner.cjs#L527542-L527565) | 7 | 1 | 0 | 4 | 0 | 0 |

### host:715873

Chamadas escritas diretamente neste corpo: `text3.charCodeAt`.

Alvos de atribuição ou incremento: `i`, `previous`, `spelledPrefixes`.

SHA-256 do trecho: `e527590284f06a7567b7166e9b0feec93b0091a627a87e07e351bcebf4c6d1fd`.

### evaluation:527542

Chamadas escritas diretamente neste corpo: `text3.charCodeAt`.

Alvos de atribuição ou incremento: `i`, `previous`, `spelledPrefixes`.

SHA-256 do trecho: `e527590284f06a7567b7166e9b0feec93b0091a627a87e07e351bcebf4c6d1fd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
