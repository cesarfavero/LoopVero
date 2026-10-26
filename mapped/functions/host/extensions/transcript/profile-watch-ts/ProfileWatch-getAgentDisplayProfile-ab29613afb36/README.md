# `ProfileWatch.getAgentDisplayProfile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/profile-watch.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/profile-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738878-738886](../../../../../../../reference/runtime/host-main.cjs#L738878-L738886) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738878-738886](../../../../../../../reference/runtime/host-main.cjs#L738878-L738886) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:738878

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `profile.name.trim`, `readSandProfileFile`, `this.tm.sessionStore.getAgentDir`.

SHA-256 do trecho: `aad539d9e21814f0a0a8f03c3c72d6b09bcb29aa6d5e308733c78d3c451bc0c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
