# `userMessageAppended`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/interaction-updates.js` · [README do módulo](../../../../modules/agent-core/interaction-updates-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475922-475930](../../../../../reference/runtime/host-main.cjs#L475922-L475930) | `FunctionExpression` | não | `userMessage2` |
| [evaluation:255232-255240](../../../../../reference/runtime/sand-eval-runner.cjs#L255232-L255240) | `FunctionExpression` | não | `userMessage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475922-475930](../../../../../reference/runtime/host-main.cjs#L475922-L475930) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255232-255240](../../../../../reference/runtime/sand-eval-runner.cjs#L255232-L255240) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475922

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new UserMessageAppendedUpdate`.

SHA-256 do trecho: `3c6b0a0f3aec33dfe8c7ff4adc57fe57ad01315372a815843fc9cf528696e7e7`.

### evaluation:255232

Chamadas escritas diretamente neste corpo: `new InteractionUpdate`, `new UserMessageAppendedUpdate`.

SHA-256 do trecho: `c0cff427b21af91ef0acdd7c986c2b6062ea9803845cc8502bc8a2efe95c1d09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
