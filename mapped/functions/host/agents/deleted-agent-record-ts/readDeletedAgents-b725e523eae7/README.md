# `readDeletedAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/agents/deleted-agent-record.ts` · [README do módulo](../../../../../modules/host/agents/deleted-agent-record-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:478728-478752](../../../../../../reference/runtime/host-main.cjs#L478728-L478752) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:478728-478752](../../../../../../reference/runtime/host-main.cjs#L478728-L478752) | 7 | 1 | 0 | 7 | 0 | 1 |

### host:478728

Chamadas escritas diretamente neste corpo: `Object.entries`, `agents.set`, `attemptSync`, `errorMessage`, `findSystemErrno`, `isUnknownRecord2`, `new Map`, `parseAgentId`, `parseDeletedAgent`, `readSandDataFileIfPresentSync`.

Alvos de atribuição ou incremento: `malformed`, `raw`.

SHA-256 do trecho: `6d89e41d3d06969e688dbb04c48372d7f0623a7fe17e010fdc403daac86f7ec5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
