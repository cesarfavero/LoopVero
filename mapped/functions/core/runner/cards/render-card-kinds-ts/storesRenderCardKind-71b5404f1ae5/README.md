# `storesRenderCardKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/cards/render-card-kinds.ts` · [README do módulo](../../../../../../modules/core/runner/cards/render-card-kinds-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768667-768669](../../../../../../../reference/runtime/host-main.cjs#L768667-L768669) | `FunctionDeclaration` | não | `gates, kind` |
| [evaluation:564181-564183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L564181-L564183) | `FunctionDeclaration` | não | `gates, kind` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768667-768669](../../../../../../../reference/runtime/host-main.cjs#L768667-L768669) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564181-564183](../../../../../../../reference/runtime/sand-eval-runner.cjs#L564181-L564183) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768667

Chamadas escritas diretamente neste corpo: `RENDER_CARD_KIND_GATES[computed]`, `gates.widgetV0`.

SHA-256 do trecho: `e9f29f3b897417e56333924d1ed03e098b3ae1c03a7cdf3049e6b99d81ca76e5`.

### evaluation:564181

Chamadas escritas diretamente neste corpo: `RENDER_CARD_KIND_GATES[computed]`, `gates.widgetV0`.

SHA-256 do trecho: `e9f29f3b897417e56333924d1ed03e098b3ae1c03a7cdf3049e6b99d81ca76e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
