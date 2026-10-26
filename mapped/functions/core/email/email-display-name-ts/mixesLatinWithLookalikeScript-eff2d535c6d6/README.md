# `mixesLatinWithLookalikeScript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-display-name.ts` · [README do módulo](../../../../../modules/core/email/email-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715897-715899](../../../../../../reference/runtime/host-main.cjs#L715897-L715899) | `FunctionDeclaration` | não | `value` |
| [evaluation:527566-527568](../../../../../../reference/runtime/sand-eval-runner.cjs#L527566-L527568) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715897-715899](../../../../../../reference/runtime/host-main.cjs#L715897-L715899) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527566-527568](../../../../../../reference/runtime/sand-eval-runner.cjs#L527566-L527568) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715897

Chamadas escritas diretamente neste corpo: `HAS_CYRILLIC_LETTER.test`, `HAS_GREEK_LETTER.test`, `HAS_LATIN_LETTER.test`.

SHA-256 do trecho: `b59aa9426346bbd43cf2a956392a8fd48be4a3cbcceae5a95f2240f893897b8a`.

### evaluation:527566

Chamadas escritas diretamente neste corpo: `HAS_CYRILLIC_LETTER.test`, `HAS_GREEK_LETTER.test`, `HAS_LATIN_LETTER.test`.

SHA-256 do trecho: `b59aa9426346bbd43cf2a956392a8fd48be4a3cbcceae5a95f2240f893897b8a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
