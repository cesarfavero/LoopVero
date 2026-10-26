# `_SandVoiceCallReceipt.parse`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/voice-call/receipt.ts` · [README do módulo](../../../../../modules/shared/voice-call/receipt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:714470-714477](../../../../../../reference/runtime/host-main.cjs#L714470-L714477) | `method` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714470-714477](../../../../../../reference/runtime/host-main.cjs#L714470-L714477) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:714470

Chamadas escritas diretamente neste corpo: `.find`, `.map`, `.replace`, `.trim`, `_SandVoiceCallReceipt.isScannableDescription`, `clampLine2`, `firstLine.replace`, `raw.split`.

SHA-256 do trecho: `a94b04ddd2c24a01b3cafb9a91d8d95b98cdbc9bd75e58b34dabb9314ed6a5a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
