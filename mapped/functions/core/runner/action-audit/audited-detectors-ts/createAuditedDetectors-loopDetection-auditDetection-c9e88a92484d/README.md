# `createAuditedDetectors/loopDetection/auditDetection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/audited-detectors.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/audited-detectors-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:484703-484709](../../../../../../../reference/runtime/sand-eval-runner.cjs#L484703-L484709) | `ArrowFunctionExpression` | não | `report, attribution` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484703-484709](../../../../../../../reference/runtime/sand-eval-runner.cjs#L484703-L484709) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:484703 usa retorno implícito de arrow function.

### evaluation:484703

Chamadas escritas diretamente neste corpo: `deps.getConversationId`, `deps.resolveBoxId`, `loopDetectedGuardrailRecord`, `recordOnStampedAuditor`.

SHA-256 do trecho: `6673952110fc05b1255ab2a6ceb51c74dcc4e19e988c63ecec183a0bc64e5033`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
