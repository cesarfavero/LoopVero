# `SandAgentIdentityService.isAwaitingLocalMaterialization`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495961-495966](../../../../../../../reference/runtime/host-main.cjs#L495961-L495966) | `method` | não | `root, handle` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495961-495966](../../../../../../../reference/runtime/host-main.cjs#L495961-L495966) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:495961

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `this.pendingLocalMaterializationIds.delete`, `this.pendingLocalMaterializationIds.has`.

SHA-256 do trecho: `b4e12fdcafe4313d6b4997f5d911ed310cac7d1d813004174a0b94f3a802c4f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
