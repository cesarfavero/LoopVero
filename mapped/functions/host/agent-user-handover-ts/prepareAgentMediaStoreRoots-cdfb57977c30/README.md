# `prepareAgentMediaStoreRoots`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/agent-user-handover.ts` · [README do módulo](../../../../modules/host/agent-user-handover-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:494835-494876](../../../../../reference/runtime/host-main.cjs#L494835-L494876) | `FunctionDeclaration` | sim | `agentDir, handoff2 = handPathToAgentUser, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494835-494876](../../../../../reference/runtime/host-main.cjs#L494835-L494876) | 3 | 1 | 3 | 0 | 1 | 2 |

### host:494835

Chamadas escritas diretamente neste corpo: `classifyAgentMediaRootOwnership`, `ensureSandDataDirSync`, `errorClassOf`, `findSystemErrno`, `getAgentAssetsDir`, `getAgentAttachmentsDir`, `handoff2`, `options2.observe`.

Alvos de atribuição ou incremento: `agentUser`, `agentUserReadErrorClass`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `6bab5cc7a20d6b930e58ce16af48a6d32935045253e8b4d683ea89cc7714b80c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
