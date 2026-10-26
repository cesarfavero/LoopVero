# `withSubagentHistoryLookup`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tool-policy/manifests/subagent-history.ts` · [README do módulo](../../../../../../../modules/core/runner/tool-policy/manifests/subagent-history-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:757182-757206](../../../../../../../../reference/runtime/host-main.cjs#L757182-L757206) | `FunctionDeclaration` | não | `base, options2` |
| [evaluation:543120-543144](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L543120-L543144) | `FunctionDeclaration` | não | `base, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757182-757206](../../../../../../../../reference/runtime/host-main.cjs#L757182-L757206) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:543120-543144](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L543120-L543144) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:757182

Chamadas escritas diretamente neste corpo: `extendAgentTools`.

SHA-256 do trecho: `2b858e9e5db84e06e2483cf3d2eab3830fbe0854741e41b8d7fc5484aac49eda`.

### evaluation:543120

Chamadas escritas diretamente neste corpo: `extendAgentTools`.

SHA-256 do trecho: `2b858e9e5db84e06e2483cf3d2eab3830fbe0854741e41b8d7fc5484aac49eda`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
