# `ToolDecisionAudit.supersede`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:489817-489820](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489817-L489820) | `method` | não | `toolCallId, verdict` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489817-489820](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489817-L489820) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:489817

Chamadas escritas diretamente neste corpo: `this.decide`, `this.touch`.

Alvos de atribuição ou incremento: `.decisions.length`.

SHA-256 do trecho: `cbcc7e972d6091d6de17316eb45d5caecb6716fd65a8d5948008e5dcadfc067a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
