# `navigationPagesOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512652-512664](../../../../../../reference/runtime/sand-eval-runner.cjs#L512652-L512664) | `FunctionDeclaration` | não | `stdout` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512652-512664](../../../../../../reference/runtime/sand-eval-runner.cjs#L512652-L512664) | 6 | 1 | 0 | 1 | 0 | 0 |

### evaluation:512652

Chamadas escritas diretamente neste corpo: `botBlockTextProbeTarget`, `normalizeNavigationUrl`, `pages.push`, `parseNavigationProbeOutput`.

SHA-256 do trecho: `e9300c11c61d24f71a4f05b09c392b016567536912b0e3b7dbdb29deb0ac19ce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
