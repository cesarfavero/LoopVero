# `rewriteClonedAgentIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-clone.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-clone-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716894-716914](../../../../../../../reference/runtime/host-main.cjs#L716894-L716914) | `FunctionDeclaration` | não | `targetDir, newAgentId, includesChatHistory, createAgentDb` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716894-716914](../../../../../../../reference/runtime/host-main.cjs#L716894-L716914) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:716894

Chamadas escritas diretamente neste corpo: `createAgentDb`, `db.clearAgentPurpose`, `db.clearConversation`, `db.clearTransientState`, `db.close`, `db.getSandProfile`, `db.set`, `db.setAgentOrigin`, `db.setSandProfile`.

SHA-256 do trecho: `c8e6a90b1c04d56df1ee4a7076a28dbe2a8f6c67d0d105e28ce354c531370d43`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
