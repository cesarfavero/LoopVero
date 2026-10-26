# `runSandAgentTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/connector-scope/agent-turn.ts` · [README do módulo](../../../../../../modules/core/runner/connector-scope/agent-turn-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535196-535198](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535196-L535198) | `FunctionDeclaration` | não | `runner, prompt, options2, scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535196-535198](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535196-L535198) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:535196

Chamadas escritas diretamente neste corpo: `runner.run`.

SHA-256 do trecho: `b11a12636d9cabef004ad2e3340b699f0dc9e063ed6542600799ee29ad337b4f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
