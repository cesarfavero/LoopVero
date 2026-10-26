# `goalClockOnDeactivation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/goal-continuation.js` · [README do módulo](../../../../modules/agent-core/goal-continuation-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475467-475472](../../../../../reference/runtime/host-main.cjs#L475467-L475472) | `FunctionDeclaration` | não | `goalState, nowMs2` |
| [evaluation:254687-254692](../../../../../reference/runtime/sand-eval-runner.cjs#L254687-L254692) | `FunctionDeclaration` | não | `goalState, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475467-475472](../../../../../reference/runtime/host-main.cjs#L475467-L475472) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254687-254692](../../../../../reference/runtime/sand-eval-runner.cjs#L254687-L254692) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475467

Chamadas escritas diretamente neste corpo: `BigInt`, `goalElapsedMs`.

SHA-256 do trecho: `369d797e55a2814ee8c9ebfc4f06dba31ba5472fc2fe37a7a15e72609ea78b00`.

### evaluation:254687

Chamadas escritas diretamente neste corpo: `BigInt`, `goalElapsedMs`.

SHA-256 do trecho: `b50af8aba40670f81469b13451af4d1906747add78f8d5d4f9675320db8568d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
