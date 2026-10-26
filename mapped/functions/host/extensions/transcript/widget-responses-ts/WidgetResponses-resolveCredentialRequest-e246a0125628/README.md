# `WidgetResponses.resolveCredentialRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782985-783011](../../../../../../../reference/runtime/host-main.cjs#L782985-L783011) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782985-783011](../../../../../../../reference/runtime/host-main.cjs#L782985-L783011) | 4 | 0 | 3 | 4 | 0 | 0 |

### host:782985

Chamadas escritas diretamente neste corpo: `findEntry`, `this.settleCredentialRequest`, `this.tm.clock.now`, `this.tm.sessions.ensureActionTarget`.

SHA-256 do trecho: `35bf4a72b6dde3aea2e5a958ea0fe3243041b819133e5d15292da0b971088f79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
