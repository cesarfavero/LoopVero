# `_SandAgentRunner.hasSummarySinceLastParentCall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-agent-runner.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:594090-594093](../../../../../../reference/runtime/sand-eval-runner.cjs#L594090-L594093) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594090-594093](../../../../../../reference/runtime/sand-eval-runner.cjs#L594090-L594093) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:594090

Chamadas escritas diretamente neste corpo: `this.getConversationState`, `this.summaryLifecycle.hasUnsettledOrPersistedSince`.

SHA-256 do trecho: `06fa30bc24563c34c8ac0d7619bc9ca966334cf4b0f4219c266e3c3f38ce6840`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
