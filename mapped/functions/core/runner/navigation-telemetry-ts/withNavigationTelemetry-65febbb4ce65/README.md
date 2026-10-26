# `withNavigationTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `core/runner/navigation-telemetry.ts` · [README do módulo](../../../../../modules/core/runner/navigation-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484615-484695](../../../../../../reference/runtime/sand-eval-runner.cjs#L484615-L484695) | `FunctionDeclaration` | não | `auditor, options2, recordGuardrailOnStampedAuditor` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484615-484695](../../../../../../reference/runtime/sand-eval-runner.cjs#L484615-L484695) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:484615

Chamadas escritas diretamente neste corpo: `withBotBlockDetection`, `withSiteVisitTracking`.

SHA-256 do trecho: `3f2278060b53ab38fc8bef2d0779dd38519e4b5087e8282e6e4cc1bac03a4841`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
