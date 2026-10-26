# `CloudAgentUpdatesStream.wait`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-updates-stream.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-updates-stream-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:537663-537669](../../../../../../../reference/runtime/host-main.cjs#L537663-L537669) | `method` | sim | `attempt, signal, hint` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537663-537669](../../../../../../../reference/runtime/host-main.cjs#L537663-L537669) | 1 | 0 | 1 | 0 | 1 | 1 |

### host:537663

Chamadas escritas diretamente neste corpo: `this.reconnect.schedule`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `323d8de0aba6e91bbffaaf0a84cfb09329446eb434158c682381f7cf2feeb5f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
