# `mailboxDisplayNameShapeError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-display-name.ts` · [README do módulo](../../../../../modules/core/email/email-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715809-715823](../../../../../../reference/runtime/host-main.cjs#L715809-L715823) | `FunctionDeclaration` | não | `name18` |
| [evaluation:527478-527492](../../../../../../reference/runtime/sand-eval-runner.cjs#L527478-L527492) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715809-715823](../../../../../../reference/runtime/host-main.cjs#L715809-L715823) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:527478-527492](../../../../../../reference/runtime/sand-eval-runner.cjs#L527478-L527492) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:715809

Chamadas escritas diretamente neste corpo: `.test`, `/[<>]/.test`, `CONTROL_OR_DEL.test`, `ENCODED_WORD.test`, `new RegExp`.

SHA-256 do trecho: `da5d8cf2203ee5e1e4bcb9d6dcbc35ca664337d47754a5651e104221821bb74e`.

### evaluation:527478

Chamadas escritas diretamente neste corpo: `.test`, `/[<>]/.test`, `CONTROL_OR_DEL.test`, `ENCODED_WORD.test`, `new RegExp`.

SHA-256 do trecho: `da5d8cf2203ee5e1e4bcb9d6dcbc35ca664337d47754a5651e104221821bb74e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
