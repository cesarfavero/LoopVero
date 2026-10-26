# `WidgetResponses.requestCredentialAutoFill`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782937-782963](../../../../../../../reference/runtime/host-main.cjs#L782937-L782963) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782937-782963](../../../../../../../reference/runtime/host-main.cjs#L782937-L782963) | 3 | 0 | 2 | 2 | 0 | 1 |

### host:782937

Chamadas escritas diretamente neste corpo: `errorLogTag`, `reportHostDiagnostic`, `session.db.updateTranscriptEntry`, `this.tm.requestCredentialAutoFill`, `this.tm.roster.emit`, `this.tm.sessions.ensureActionTarget`, `updateEntry`.

Alvos de atribuição ou incremento: `outcome`.

SHA-256 do trecho: `dcd36e69ecf4bec2975cc4dd01f19ad11aae22dc61f42fc039837a3818ccdf4f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
