# `withSpotlightedToolResult/render`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-spotlight-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-spotlight-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761896-761905](../../../../../../../reference/runtime/host-main.cjs#L761896-L761905) | `ArrowFunctionExpression` | sim | `ctx, output2, props` |
| [evaluation:554341-554350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554341-L554350) | `ArrowFunctionExpression` | sim | `ctx, output2, props` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761896-761905](../../../../../../../reference/runtime/host-main.cjs#L761896-L761905) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:554341-554350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554341-L554350) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:761896

Chamadas escritas diretamente neste corpo: `rendered.content.map`, `spotlightToolResultContent`, `tool.render`.

SHA-256 do trecho: `a97879c03ac672c1a9496c42ada2d95cf38972f2bb60429e705d7df956f9c193`.

### evaluation:554341

Chamadas escritas diretamente neste corpo: `rendered.content.map`, `spotlightToolResultContent`, `tool.render`.

SHA-256 do trecho: `a97879c03ac672c1a9496c42ada2d95cf38972f2bb60429e705d7df956f9c193`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
