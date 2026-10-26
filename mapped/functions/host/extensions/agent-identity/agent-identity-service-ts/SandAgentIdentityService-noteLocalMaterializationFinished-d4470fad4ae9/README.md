# `SandAgentIdentityService.noteLocalMaterializationFinished`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495493-495495](../../../../../../../reference/runtime/host-main.cjs#L495493-L495495) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495493-495495](../../../../../../../reference/runtime/host-main.cjs#L495493-L495495) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:495493

Chamadas escritas diretamente neste corpo: `this.pendingLocalMaterializationIds.delete`.

SHA-256 do trecho: `bb4f3421b1f4c79c7dce8a5b1d9886453957cef5fd3e08174751c221dbf60049`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
