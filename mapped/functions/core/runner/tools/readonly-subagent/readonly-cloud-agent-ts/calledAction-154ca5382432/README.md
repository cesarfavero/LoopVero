# `calledAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/readonly-subagent/readonly-cloud-agent.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-cloud-agent-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:777782-777790](../../../../../../../../reference/runtime/host-main.cjs#L777782-L777790) | `FunctionDeclaration` | não | `rawArgs` |
| [evaluation:577477-577485](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577477-L577485) | `FunctionDeclaration` | não | `rawArgs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777782-777790](../../../../../../../../reference/runtime/host-main.cjs#L777782-L777790) | 2 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:577477-577485](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577477-L577485) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:777782

Chamadas escritas diretamente neste corpo: `JSON.parse`, `cloudAgentCall.safeParse`.

SHA-256 do trecho: `fff6c7cb8011903990448600a6cfd87358c8618f4bd9e20f9b39598fa866e361`.

### evaluation:577477

Chamadas escritas diretamente neste corpo: `JSON.parse`, `cloudAgentCall.safeParse`.

SHA-256 do trecho: `cfc1998aa46d8a37c9762af6d706ab104c5faedc1a54f59c92cae9fcdcd3daed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
