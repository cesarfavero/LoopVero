# `classifyStderr`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-shell-diagnostic.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-shell-diagnostic-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724031-724036](../../../../../../../reference/runtime/host-main.cjs#L724031-L724036) | `FunctionDeclaration` | não | `stderr` |
| [evaluation:559989-559994](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559989-L559994) | `FunctionDeclaration` | não | `stderr` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724031-724036](../../../../../../../reference/runtime/host-main.cjs#L724031-L724036) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:559989-559994](../../../../../../../reference/runtime/sand-eval-runner.cjs#L559989-L559994) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:724031

Chamadas escritas diretamente neste corpo: `/\b(?:ERR_)?MODULE_NOT_FOUND\b/.test`, `stderr.includes`.

SHA-256 do trecho: `5f8eaa83795b614d2d3b37e3ede4926d35c7ff0009e388727265e333f72abf12`.

### evaluation:559989

Chamadas escritas diretamente neste corpo: `/\b(?:ERR_)?MODULE_NOT_FOUND\b/.test`, `stderr.includes`.

SHA-256 do trecho: `5f8eaa83795b614d2d3b37e3ede4926d35c7ff0009e388727265e333f72abf12`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
