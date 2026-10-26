# `wordsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-display-name.ts` · [README do módulo](../../../../../modules/core/email/email-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715827-715829](../../../../../../reference/runtime/host-main.cjs#L715827-L715829) | `FunctionDeclaration` | não | `value` |
| [evaluation:527496-527498](../../../../../../reference/runtime/sand-eval-runner.cjs#L527496-L527498) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715827-715829](../../../../../../reference/runtime/host-main.cjs#L715827-L715829) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527496-527498](../../../../../../reference/runtime/sand-eval-runner.cjs#L527496-L527498) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:715827

Chamadas escritas diretamente neste corpo: `.match`, `.replace`, `.replaceAll`, `value.normalize`.

SHA-256 do trecho: `dad7f45c70e7f0a184c962f5a0cd118611858f2c65d0eb8f6493175a83828850`.

### evaluation:527496

Chamadas escritas diretamente neste corpo: `.match`, `.replace`, `.replaceAll`, `value.normalize`.

SHA-256 do trecho: `dad7f45c70e7f0a184c962f5a0cd118611858f2c65d0eb8f6493175a83828850`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
