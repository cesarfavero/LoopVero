# `loopDetectedGuardrailRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/guardrail-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/guardrail-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483551-483568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483551-L483568) | `FunctionDeclaration` | não | `report, identity2, attribution` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483551-483568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483551-L483568) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483551

Chamadas escritas diretamente neste corpo: `Date.now`.

SHA-256 do trecho: `ba432e7c93f8f40e4ba5c6df2429c8cebd4fa5e9638ca7f74c2ae0c33e0ad7b2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
