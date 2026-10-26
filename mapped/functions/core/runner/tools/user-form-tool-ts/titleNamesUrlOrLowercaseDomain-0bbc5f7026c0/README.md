# `titleNamesUrlOrLowercaseDomain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726289-726295](../../../../../../../reference/runtime/host-main.cjs#L726289-L726295) | `FunctionDeclaration` | não | `title` |
| [evaluation:560904-560910](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560904-L560910) | `FunctionDeclaration` | não | `title` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726289-726295](../../../../../../../reference/runtime/host-main.cjs#L726289-L726295) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560904-560910](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560904-L560910) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:726289

Chamadas escritas diretamente neste corpo: `.some`, `title.includes`, `title.split`.

SHA-256 do trecho: `f9c3014f00208302f01270d36d1f6335f2aac2d963800adff3e401e391ce4777`.

### evaluation:560904

Chamadas escritas diretamente neste corpo: `.some`, `title.includes`, `title.split`.

SHA-256 do trecho: `f9c3014f00208302f01270d36d1f6335f2aac2d963800adff3e401e391ce4777`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
