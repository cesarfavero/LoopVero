# `PromptAcceptanceLedger.enterDegraded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733401-733418](../../../../../../../reference/runtime/host-main.cjs#L733401-L733418) | `method` | não | `nowMs2, error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733401-733418](../../../../../../../reference/runtime/host-main.cjs#L733401-L733418) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:733401

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `errorLogTag`, `reportHostDiagnostic`, `this.markerPath`, `writeSandDataFileSync`.

Alvos de atribuição ou incremento: `this.degradedSinceMs`, `this.markerMayExist`.

SHA-256 do trecho: `e9fd48f424b6fd9f490bb25d061332677ff925d4362f5e5a2f864f8e3f0d7868`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
