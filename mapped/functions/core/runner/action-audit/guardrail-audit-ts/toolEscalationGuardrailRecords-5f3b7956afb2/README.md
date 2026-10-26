# `toolEscalationGuardrailRecords`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/guardrail-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/guardrail-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483625-483653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483625-L483653) | `FunctionDeclaration` | não | `escalation, envelope, answer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483625-483653](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483625-L483653) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483625

Chamadas escritas diretamente neste corpo: `Math.max`, `holdResolutionOf`.

SHA-256 do trecho: `96480bd4c387639f63ab0bc790b4234b05e3e6de8246c0a132ab20d1ee904782`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
