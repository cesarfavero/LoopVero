# `SandAgentIdentityService.deferBindUntilEditPushed`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495967-495971](../../../../../../../reference/runtime/host-main.cjs#L495967-L495971) | `method` | não | `handle, hasLocalProfile` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495967-495971](../../../../../../../reference/runtime/host-main.cjs#L495967-L495971) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:495967

Chamadas escritas diretamente neste corpo: `this.bindsAwaitingEdit.add`, `this.noteAgentIdentityChanged`, `this.unacknowledgedEditIds.add`.

SHA-256 do trecho: `d2728a2df437d858d62c4decda8a156cf3393e4804d573271b4bccc3c1c108dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
