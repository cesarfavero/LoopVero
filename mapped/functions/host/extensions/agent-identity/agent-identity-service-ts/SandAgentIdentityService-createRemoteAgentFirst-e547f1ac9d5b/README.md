# `SandAgentIdentityService.createRemoteAgentFirst`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495328-495357](../../../../../../../reference/runtime/host-main.cjs#L495328-L495357) | `method` | sim | `fields3, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495328-495357](../../../../../../../reference/runtime/host-main.cjs#L495328-L495357) | 2 | 0 | 2 | 2 | 2 | 1 |

### host:495328

Chamadas escritas diretamente neste corpo: `new ConnectError`, `this.deps.getCreationPolicy`, `this.deps.newAgentId`, `this.mintRemoteFirst`, `this.pendingLocalMaterializationIds.add`, `this.pendingLocalMaterializationIds.delete`, `withGeneratedMark`.

Alvos de lançamento explícito: `ConnectError`, `error64`.

SHA-256 do trecho: `f11122b6ac62ea2727b19ef909351bdc64ed5c08539d07ea1d760a1360436257`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
