# `TranscriptManager.getAgentChannels`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/transcript-manager.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/transcript-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783293-783295](../../../../../../../reference/runtime/host-main.cjs#L783293-L783295) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783293-783295](../../../../../../../reference/runtime/host-main.cjs#L783293-L783295) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:783293

Chamadas escritas diretamente neste corpo: `this.sessionStore.listAgentChannels`.

SHA-256 do trecho: `a483a467ce8f0097c79f8412451086c38a86fcf4cc554763509771bc22d2afb5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
