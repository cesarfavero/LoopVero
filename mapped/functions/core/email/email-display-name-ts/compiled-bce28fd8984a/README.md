# `compiled`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-display-name.ts` · [README do módulo](../../../../../modules/core/email/email-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715785-715791](../../../../../../reference/runtime/host-main.cjs#L715785-L715791) | `FunctionDeclaration` | não | `name18` |
| [evaluation:527454-527460](../../../../../../reference/runtime/sand-eval-runner.cjs#L527454-L527460) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715785-715791](../../../../../../reference/runtime/host-main.cjs#L715785-L715791) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:527454-527460](../../../../../../reference/runtime/sand-eval-runner.cjs#L527454-L527460) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:715785

Chamadas escritas diretamente neste corpo: `.map`, `/^[a-z]+$/.test`, `name18.replaceAll`, `new Error`, `spellingsOf`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `18d96d936cbbf9095f369c08900d55c16834acc87ae82ab059560623b6548865`.

### evaluation:527454

Chamadas escritas diretamente neste corpo: `.map`, `/^[a-z]+$/.test`, `name18.replaceAll`, `new Error`, `spellingsOf`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `18d96d936cbbf9095f369c08900d55c16834acc87ae82ab059560623b6548865`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
