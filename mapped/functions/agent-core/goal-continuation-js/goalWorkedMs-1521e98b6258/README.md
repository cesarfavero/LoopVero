# `goalWorkedMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/goal-continuation.js` · [README do módulo](../../../../modules/agent-core/goal-continuation-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475448-475450](../../../../../reference/runtime/host-main.cjs#L475448-L475450) | `FunctionDeclaration` | não | `goalState` |
| [evaluation:254668-254670](../../../../../reference/runtime/sand-eval-runner.cjs#L254668-L254670) | `FunctionDeclaration` | não | `goalState` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475448-475450](../../../../../reference/runtime/host-main.cjs#L475448-L475450) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254668-254670](../../../../../reference/runtime/sand-eval-runner.cjs#L254668-L254670) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475448

Chamadas escritas diretamente neste corpo: `BigInt`, `Number`.

SHA-256 do trecho: `cbdc75c7eb5c65b51c4fe3311c56e8ac70f65d5b0d0a629c48bc4ea744a38ec0`.

### evaluation:254668

Chamadas escritas diretamente neste corpo: `BigInt`, `Number`.

SHA-256 do trecho: `cbdc75c7eb5c65b51c4fe3311c56e8ac70f65d5b0d0a629c48bc4ea744a38ec0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
