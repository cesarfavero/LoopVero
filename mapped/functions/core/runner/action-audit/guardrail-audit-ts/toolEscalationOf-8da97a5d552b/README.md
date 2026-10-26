# `toolEscalationOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/guardrail-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/guardrail-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483606-483613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483606-L483613) | `FunctionDeclaration` | não | `decision` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483606-483613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L483606-L483613) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:483606

Chamadas escritas diretamente neste corpo: `INTERRUPTING_RETIREMENTS.has`.

SHA-256 do trecho: `0a3e884580352967f54be0c844335dff483e99dc26a9170fe0abded0b537dd88`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
