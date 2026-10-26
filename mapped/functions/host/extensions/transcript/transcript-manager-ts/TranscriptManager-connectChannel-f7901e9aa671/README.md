# `TranscriptManager.connectChannel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/transcript-manager.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783305-783314](../../../../../../../reference/runtime/host-main.cjs#L783305-L783314) | `method` | não | `agentId, platform2, token` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783305-783314](../../../../../../../reference/runtime/host-main.cjs#L783305-L783314) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:783305

Chamadas escritas diretamente neste corpo: `this.sessionStore.storeConnectorCredential`, `token.trim`.

SHA-256 do trecho: `000ef44d544e1b5933d59cee0968fed78c7c2db1eed193a36528132e84946c75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
