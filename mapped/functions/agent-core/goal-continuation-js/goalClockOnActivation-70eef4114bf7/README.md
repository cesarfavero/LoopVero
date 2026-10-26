# `goalClockOnActivation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/goal-continuation.js` · [README do módulo](../../../../modules/agent-core/goal-continuation-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475461-475466](../../../../../reference/runtime/host-main.cjs#L475461-L475466) | `FunctionDeclaration` | não | `goalState, nowMs2` |
| [evaluation:254681-254686](../../../../../reference/runtime/sand-eval-runner.cjs#L254681-L254686) | `FunctionDeclaration` | não | `goalState, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475461-475466](../../../../../reference/runtime/host-main.cjs#L475461-L475466) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254681-254686](../../../../../reference/runtime/sand-eval-runner.cjs#L254681-L254686) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475461

Chamadas escritas diretamente neste corpo: `BigInt`.

SHA-256 do trecho: `a2c9062156af2804d0828cd0b3f86a67dbb6ec50f0792d87ce5ee41941466c21`.

### evaluation:254681

Chamadas escritas diretamente neste corpo: `BigInt`.

SHA-256 do trecho: `2c44a677398495baf8e6cadac044f4000cf1558c49141bb9db854b4085e39f2f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
