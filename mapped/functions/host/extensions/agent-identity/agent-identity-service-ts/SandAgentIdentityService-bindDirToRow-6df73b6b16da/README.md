# `SandAgentIdentityService.bindDirToRow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496030-496039](../../../../../../../reference/runtime/host-main.cjs#L496030-L496039) | `method` | sim | `root, agent, identity` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496030-496039](../../../../../../../reference/runtime/host-main.cjs#L496030-L496039) | 2 | 0 | 1 | 0 | 0 | 0 |

### host:496030

Chamadas escritas diretamente neste corpo: `assertSandProfileNotLinked`, `bindSandProfileToServer`, `mirrorRoomMembers`, `serverBindingOf`, `this.deps.forgetLocalAgentDeletion`, `this.droppedUnlistedIds.delete`, `this.prepareMediaRoots`.

SHA-256 do trecho: `0fe6a2f255388f42c14209596eedab929ee807e5ae4aec616fe1614f76539962`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
