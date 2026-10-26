# `WidgetResponses.getOpenCredentialRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782964-782984](../../../../../../../reference/runtime/host-main.cjs#L782964-L782984) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782964-782984](../../../../../../../reference/runtime/host-main.cjs#L782964-L782984) | 3 | 0 | 2 | 4 | 0 | 0 |

### host:782964

Chamadas escritas diretamente neste corpo: `findEntry`, `this.settleCredentialRequest`, `this.tm.clock.now`, `this.tm.sessions.ensureActionTarget`.

SHA-256 do trecho: `1e5d70c4fd4f279002ca590ec22c1f714b342503d0dcfad4d652eacfeafdb47b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
