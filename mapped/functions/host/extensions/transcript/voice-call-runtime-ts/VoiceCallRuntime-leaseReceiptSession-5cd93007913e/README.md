# `_VoiceCallRuntime.leaseReceiptSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/voice-call-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/voice-call-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742402-742410](../../../../../../../reference/runtime/host-main.cjs#L742402-L742410) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742402-742410](../../../../../../../reference/runtime/host-main.cjs#L742402-L742410) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:742402

Chamadas escritas diretamente neste corpo: `resolveSessionOrRefusal`, `resolved.lease[computed]`, `this.tm.groupChat.isGroupSession`.

SHA-256 do trecho: `d7e5c7b2760f627108345a9aa6330135173a3928ad7053aadbba34d5e6cad4e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
