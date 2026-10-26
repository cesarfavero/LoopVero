# `toUnredactedInteractionListener/sendUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/redacted-interaction-listener.js` · [README do módulo](../../../../modules/agent-core/redacted-interaction-listener-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615529-615531](../../../../../reference/runtime/host-main.cjs#L615529-L615531) | `FunctionExpression` | sim | `ctx, update` |
| [evaluation:284249-284251](../../../../../reference/runtime/sand-eval-runner.cjs#L284249-L284251) | `FunctionExpression` | sim | `ctx, update` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615529-615531](../../../../../reference/runtime/host-main.cjs#L615529-L615531) | 0 | 0 | 1 | 0 | 0 | 0 |
| [evaluation:284249-284251](../../../../../reference/runtime/sand-eval-runner.cjs#L284249-L284251) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:615529

Chamadas escritas diretamente neste corpo: `delegate.sendUpdate`, `toRedactedInteractionUpdate`.

SHA-256 do trecho: `d2cea52a43e42a8792def0d14f811e152f3521923b4c2a3f9bc6abef83a33eac`.

### evaluation:284249

Chamadas escritas diretamente neste corpo: `delegate.sendUpdate`, `toRedactedInteractionUpdate`.

SHA-256 do trecho: `d2cea52a43e42a8792def0d14f811e152f3521923b4c2a3f9bc6abef83a33eac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
