# `WidgetResponses.settleCredentialRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783012-783032](../../../../../../../reference/runtime/host-main.cjs#L783012-L783032) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783012-783032](../../../../../../../reference/runtime/host-main.cjs#L783012-L783032) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:783012

Chamadas escritas diretamente neste corpo: `args.session.db.updateTranscriptEntry`, `this.cancelCredentialRequestExpiry`, `this.tm.roster.emit`, `updateEntry`.

SHA-256 do trecho: `ef46c68db8952d2e09c2d7678313356e2d72276a3f3264b24b4e23e1cd64cd40`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
