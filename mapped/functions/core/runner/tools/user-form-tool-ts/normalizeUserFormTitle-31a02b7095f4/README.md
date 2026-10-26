# `normalizeUserFormTitle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726301-726309](../../../../../../../reference/runtime/host-main.cjs#L726301-L726309) | `FunctionDeclaration` | não | `raw` |
| [evaluation:560916-560924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560916-L560924) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726301-726309](../../../../../../../reference/runtime/host-main.cjs#L726301-L726309) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:560916-560924](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560916-L560924) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:726301

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `BARE_FORM_TITLES.has`, `capitalizeLeadingWord`, `clampLine`, `new SandToolInputError`, `stripWordPunctuation`, `titleNamesUrlOrLowercaseDomain`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `516fa3a9e3bd97f224eb3b67f1f8b44e71bb9f4768405dd558364b5b73879713`.

### evaluation:560916

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `BARE_FORM_TITLES.has`, `capitalizeLeadingWord`, `clampLine`, `new SandToolInputError`, `stripWordPunctuation`, `titleNamesUrlOrLowercaseDomain`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `516fa3a9e3bd97f224eb3b67f1f8b44e71bb9f4768405dd558364b5b73879713`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
