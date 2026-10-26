# `durationExReviewAtMostDuration`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700504-700507](../../../../../../reference/runtime/host-main.cjs#L700504-L700507) | `FunctionDeclaration` | não | `durationMs, foregroundReviewMs` |
| [evaluation:514296-514299](../../../../../../reference/runtime/sand-eval-runner.cjs#L514296-L514299) | `FunctionDeclaration` | não | `durationMs, foregroundReviewMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700504-700507](../../../../../../reference/runtime/host-main.cjs#L700504-L700507) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514296-514299](../../../../../../reference/runtime/sand-eval-runner.cjs#L514296-L514299) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:700504

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `Number.isFinite`.

SHA-256 do trecho: `94cd268446373c7aac17a0311d5f132bca8e12b7d571f3f2ed34d7e360dbb958`.

### evaluation:514296

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `Number.isFinite`.

SHA-256 do trecho: `94cd268446373c7aac17a0311d5f132bca8e12b7d571f3f2ed34d7e360dbb958`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
