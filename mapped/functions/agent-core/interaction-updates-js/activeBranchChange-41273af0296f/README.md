# `activeBranchChange`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476039-476046](../../../../../reference/runtime/host-main.cjs#L476039-L476046) | `FunctionExpression` | não | `path33, branchName` |
| [evaluation:255349-255356](../../../../../reference/runtime/sand-eval-runner.cjs#L255349-L255356) | `FunctionExpression` | não | `path33, branchName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476039-476046](../../../../../reference/runtime/host-main.cjs#L476039-L476046) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255349-255356](../../../../../reference/runtime/sand-eval-runner.cjs#L255349-L255356) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476039

Chamadas escritas diretamente neste corpo: `new ActiveBranchChange`, `new InteractionUpdate`.

SHA-256 do trecho: `10c0b9565ab9fdc6d52499fbdf30a5efd3c9362a77cc340c42e13c3dc6b32a32`.

### evaluation:255349

Chamadas escritas diretamente neste corpo: `new ActiveBranchChange`, `new InteractionUpdate`.

SHA-256 do trecho: `10c0b9565ab9fdc6d52499fbdf30a5efd3c9362a77cc340c42e13c3dc6b32a32`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
