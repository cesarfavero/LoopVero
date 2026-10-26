# `SandAgentSessionStore.importAgentSkillSource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/agent-session.ts` · [README do módulo](../../../../../../modules/host/extensions/session/agent-session-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:723631-723639](../../../../../../../reference/runtime/host-main.cjs#L723631-L723639) | `method` | sim | `agentId, source, fallbackName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723631-723639](../../../../../../../reference/runtime/host-main.cjs#L723631-L723639) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:723631

Chamadas escritas diretamente neste corpo: `limitSurfacedSkills`, `store.importLiveSource`, `store.listAll`, `this.skillStoreFor`.

SHA-256 do trecho: `695f1918a2dbf089da0504d6f1c2cdb69ec41d09ca02c09ed3616f053b1a0ac3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
