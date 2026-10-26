# `summaryStarted`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475956-475963](../../../../../reference/runtime/host-main.cjs#L475956-L475963) | `FunctionExpression` | não | `(nenhum)` |
| [evaluation:255266-255273](../../../../../reference/runtime/sand-eval-runner.cjs#L255266-L255273) | `FunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475956-475963](../../../../../reference/runtime/host-main.cjs#L475956-L475963) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255266-255273](../../../../../reference/runtime/sand-eval-runner.cjs#L255266-L255273) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475956

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new SummaryStartedUpdate`.

SHA-256 do trecho: `1b3a3db8d84251ee5d378648b09ccbaa576bd6a5f41a1e49039feeb71babcd61`.

### evaluation:255266

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new SummaryStartedUpdate`.

SHA-256 do trecho: `1b3a3db8d84251ee5d378648b09ccbaa576bd6a5f41a1e49039feeb71babcd61`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
