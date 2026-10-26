# `SessionRuntime.isServerHostedAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/session-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/session-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:738300-738302](../../../../../../../reference/runtime/host-main.cjs#L738300-L738302) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:738300-738302](../../../../../../../reference/runtime/host-main.cjs#L738300-L738302) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:738300

Chamadas escritas diretamente neste corpo: `getSandProfilePath`, `readSandProfileHarness`, `this.tm.sessionStore.getAgentDir`.

SHA-256 do trecho: `8b1a8e9b62b9e8575c835e17d28596ac1cfdf60d2ff3e7b05351a25fc2da7242`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
