# `WidgetResponses.scheduleCredentialRequestExpiry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/widget-responses.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/widget-responses-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:782398-782418](../../../../../../../reference/runtime/host-main.cjs#L782398-L782418) | `method` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:782398-782418](../../../../../../../reference/runtime/host-main.cjs#L782398-L782418) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:782398

Chamadas escritas diretamente neste corpo: `.dispose`, `JSON.stringify`, `Math.max`, `this.credentialExpiryTimers.get`, `this.credentialExpiryTimers.set`, `this.tm.clock.now`, `this.tm.clock.schedule`.

SHA-256 do trecho: `925ec71aa2797201499e9b4e4dfead3c33843224dc74342c809f0d63caa97d83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
